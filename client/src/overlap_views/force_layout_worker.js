import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';
import forceMagnetic from 'https://cdn.jsdelivr.net/npm/d3-force-magnetic/+esm';

class ForceLayout {
  /** @type {Array<{ numSlices: number }>} */
  nodeData;
  /** @type {number} */
  maxNumSlices;
  /** @type {Array<{ x: number, y: number }>} */
  nodePositions;
  /** @type {number} */
  w;
  /** @type {number} */
  h;
  /** @type {Array<{ slices: Array<number>, outcome: number }>} */
  data;
  simulation = null;

  /**
   * @param {number} w
   * @param {number} h
   * @param {Array<{ slices: Array<number>, outcome: number }>} data
   */
  constructor(w, h, data) {
    this.w = w;
    this.h = h;
    this.data = data;
    this.resetNodePositions();
  }

  resetNodePositions() {
    this.nodeData = this.data.map((d) => ({
      numSlices: d.slices.reduce((prev, curr) => prev + curr, 0),
    }));
    this.maxNumSlices = this.nodeData.reduce(
      (prev, curr) => Math.max(prev, curr.numSlices),
      1
    );

    // TODO try using UMAP as an initialization

    let slicePositions = {}; // put nodes with the same least-common slice in the same coordinates
    let counts = Array.apply(null, Array(this.data[0].slices.length)).map(
      () => 0
    );
    this.data.forEach((d) => {
      d.slices.forEach((x, i) => {
        if (x) counts[i] += 1;
      });
    });

    this.nodePositions = this.nodeData.map((n, i) => {
      if (n.numSlices > 0) {
        let leastCommonSlice = this.data[i].slices.reduce(
          (prev, curr, idx) => (counts[idx] < counts[prev] ? idx : prev),
          0
        );
        if (!!slicePositions[leastCommonSlice])
          return Object.assign({}, slicePositions[leastCommonSlice]);
        let newPos = {
          x: Math.random() * 50 - 25,
          y: Math.random() * 50 - 25,
        };
        slicePositions[leastCommonSlice] = newPos;
        return newPos;
      }
      return {
        x: Math.random() * this.w - this.w / 2,
        y: Math.random() * this.h - this.h / 2,
        vx: 0,
        vy: 0,
      };
    });
  }

  compute(opts = {}) {
    let pointRadius = opts.pointRadius ?? 5;

    this.resetNodePositions();
    let counts = Array.apply(null, Array(this.data[0].slices.length)).map(
      () => 0
    );
    this.data.forEach((d) => {
      d.slices.forEach((x, i) => {
        if (x) counts[i] += 1;
      });
    });
    let maxCount = counts.reduce((prev, curr) => Math.max(prev, curr), 0);

    let links = [];
    let repulsions = [];
    let strongRepulsions = [];
    this.data.forEach((n1, i) => {
      this.data.forEach((n2, j) => {
        if (i <= j) return;
        let countEqual = n1.slices
          .map((s1, k) => (s1 && n2.slices[k] ? 1 / counts[k] : 0))
          .reduce((prev, curr) => prev + curr, 0);
        let sum1 = n1.slices.reduce((prev, curr, k) => prev + curr, 0);
        let sum2 = n2.slices.reduce((prev, curr, k) => prev + curr, 0);
        if (sum1 == 0 && sum2 == 0) {
          if (n1.outcome && n2.outcome)
            repulsions.push({ source: i, target: j });
          return; // links.push({ source: i, target: j, strength: 1.0 });
        } else if (sum1 == 0 || sum2 == 0) {
          return;
        } else {
          let allEqual = n1.slices.every((s, k) => n2.slices[k] == s);
          if (!allEqual) strongRepulsions.push({ source: i, target: j });
          if (countEqual != 0)
            links.push({
              source: i,
              target: j,
              strength: countEqual * (allEqual ? 3 : 1),
            });
        }
      });
    });

    let linkForce = d3
      .forceLink(links)
      .distance(pointRadius * 1.5)
      .strength((l) => l.strength);

    let magnetForce = forceMagnetic()
      .links(repulsions)
      .strength(0.1)
      .distanceWeight((d) => Math.min(1 / (d * d), 100))
      .polarity(false);

    let clusterForce = forceMagnetic()
      .links(strongRepulsions)
      .strength(1.0)
      .distanceWeight((d) => Math.min(1 / (d * d), 100))
      .polarity(false);

    let alphaResetInterval = 200;
    let initialAlpha = 1.0;
    let finalAlpha = 0.1;
    let minAlpha = 1e-5;
    let numTicks = 0;
    let numResets = 40;
    let totalTicks = alphaResetInterval * numResets;

    this.simulation = d3
      .forceSimulation(this.nodePositions)
      .force('center', d3.forceCenter(0, 0))
      .force('link', linkForce)
      .force(
        'collide',
        d3
          .forceCollide()
          .radius(pointRadius * 2)
          .strength(0.1)
      )
      .force('x', d3.forceX(0).strength(0.001))
      .force('y', d3.forceY(0).strength(0.001))
      .stop();

    this.simulation
      .alpha(initialAlpha)
      .alphaDecay(0.005)
      .alphaMin(minAlpha)
      .stop();

    let resetIndex = 0;
    for (let i = 0; i < totalTicks; i++) {
      let f = this.simulation.force('collide');
      f.strength(Math.min(1.0, f.strength() * 1.0005));
      if (numTicks >= alphaResetInterval) {
        numTicks = 0;
        resetIndex++;
        if (initialAlpha > finalAlpha) {
          initialAlpha *= 0.7;
          this.simulation.alpha(initialAlpha);
        }
        f.strength(Math.min(1.0, Math.pow((resetIndex / numResets) * 4, 2.0)));
        if (resetIndex >= 3) {
          this.simulation
            .force('x')
            .strength(0.001 * Math.pow(1.75, resetIndex - 3));
          this.simulation
            .force('y')
            .strength(0.001 * Math.pow(1.75, resetIndex - 3));
        }
        // console.log('resetting', initialAlpha, f.strength());
        if (!this.simulation.force('magnet')) {
          this.simulation = this.simulation
            .force('magnet', magnetForce)
            .force('cluster', clusterForce);
        }
      }
      this.simulation.tick();
      numTicks += 1;
      if (this.simulation.alpha() < minAlpha) break;

      if (!!opts.callback && numTicks % (opts.updateInterval ?? 200) == 0)
        opts.callback({
          tick: i,
          totalTicks,
          positions: this.nodePositions,
        });
    }
    if (!!opts.callback)
      opts.callback({
        tick: totalTicks,
        totalTicks,
        positions: this.nodePositions,
      });
  }
}

onmessage = (e) => {
  let task = e.data;
  let layout = new ForceLayout(task.w ?? 400, task.h ?? 400, task.data);
  let id = task.id;
  layout.compute({
    callback: (result) => postMessage({ ...result, id }),
    updateInterval: task.updateInterval,
    pointRadius: task.pointRadius,
  });
};
