<script>
  import { getContext, onDestroy } from 'svelte';
  import * as d3 from 'd3';
  import { scaleCanvas } from 'layercake';
  import forceMagnetic from 'd3-force-magnetic';

  const { data, width, height } = getContext('LayerCake');

  export let pointRadius = 7; // 4;
  export let colorFn = null;
  export let hoveredSlices = null;
  export let centerYRatio = 0.5;
  export let centerXRatio = 0.5;

  export let hoveredMousePosition = null;
  export let hoveredPointIndex = null;

  export let colorByError = false;
  export let colorBySlice = true;

  const sliceColorScale = d3.scaleOrdinal(d3.schemeCategory10);

  const { ctx } = getContext('canvas');

  let nodePositions = [];

  let nodeData = [];

  export let simulationProgress = 0;

  let maxNumSlices;

  let simulation;

  let showConvexHulls = false;

  onDestroy(cleanUp);

  $: if ($data.length > 0) {
    cleanUp();
    console.log('force data', $data);
    initSimulation($data, $width, $height);
  } else {
    cleanUp();
  }

  function cleanUp() {
    if (!!simulation) simulation.stop();
    nodeData = [];
    nodePositions = [];
    simulation = null;
  }

  function resetNodePositions(ds, w, h) {
    showConvexHulls = false;

    nodeData = ds.map((d) => ({
      numSlices: d.slices.reduce((prev, curr) => prev + curr, 0),
    }));
    maxNumSlices = nodeData.reduce(
      (prev, curr) => Math.max(prev, curr.numSlices),
      1
    );

    // TODO try using UMAP as an initialization

    let slicePositions = {}; // put nodes with the same least-common slice in the same coordinates
    let counts = Array.apply(null, Array(ds[0].slices.length)).map(() => 0);
    ds.forEach((d) => {
      d.slices.forEach((x, i) => {
        if (x) counts[i] += 1;
      });
    });

    nodePositions = nodeData.map((n, i) => {
      if (n.numSlices > 0) {
        let leastCommonSlice = ds[i].slices.reduce(
          (prev, curr, idx) => (counts[idx] < counts[prev] ? idx : prev),
          0
        );
        if (!!slicePositions[leastCommonSlice])
          return Object.assign({}, slicePositions[leastCommonSlice]);
        let newPos = {
          x: w / 2 + Math.random() * 50 - 25,
          y: h / 2 + Math.random() * 50 - 25,
        };
        slicePositions[leastCommonSlice] = newPos;
        return newPos;
      }
      return {
        x: Math.random() * 800 - 400 + w / 2,
        y: Math.random() * 800 - 400 + h / 2,
      };
    });
  }

  function initSimulation(ds, w, h) {
    resetNodePositions(ds, w, h);

    let counts = Array.apply(null, Array(ds[0].slices.length)).map(() => 0);
    ds.forEach((d) => {
      d.slices.forEach((x, i) => {
        if (x) counts[i] += 1;
      });
    });
    let maxCount = counts.reduce((prev, curr) => Math.max(prev, curr), 0);

    let links = [];
    let repulsions = [];
    $data.forEach((n1, i) => {
      $data.forEach((n2, j) => {
        if (i <= j) return;
        let countEqual = n1.slices
          .map(
            (s1, k) =>
              (s1 && n2.slices[k]) * Math.log10(0.1 + maxCount / counts[k])
          )
          .reduce((prev, curr) => prev + curr, 0);
        let sum1 = n1.slices.reduce((prev, curr, k) => prev + curr, 0);
        let sum2 = n2.slices.reduce((prev, curr, k) => prev + curr, 0);
        if (sum1 == 0 && sum2 == 0) {
          return; // links.push({ source: i, target: j, strength: 1.0 });
        } else if ((sum1 == 0 || sum2 == 0) && !(n1.error && n2.error))
          return; // links.push({ source: i, target: j, strength: 0.8, repel: true });
        else if (countEqual == 0) repulsions.push({ source: i, target: j });
        else {
          links.push({
            source: i,
            target: j,
            strength: countEqual / ((sum1 + sum2) * 0.5),
          });
        }
      });
    });

    let linkForce = d3
      .forceLink(links)
      .distance(pointRadius * 0.5)
      .strength((l) => l.strength);

    let magnetForce = forceMagnetic()
      .links(repulsions)
      .strength(2)
      .polarity(false);

    simulation = d3
      .forceSimulation(nodePositions)
      .force('center', d3.forceCenter(w * centerXRatio, h * centerYRatio))
      .force('link', linkForce)
      .force('magnet', magnetForce)
      .force(
        'collide',
        d3
          .forceCollide()
          .radius(pointRadius * 1.2)
          .strength(0.1)
      )
      .force('x', d3.forceX(w * centerXRatio).strength(0.1))
      .force('y', d3.forceY(h * centerYRatio).strength(0.1));

    let alphaResetInterval = 200;
    let initialAlpha = 0.1;
    let finalAlpha = 0.001;
    let numTicks = 0;
    let totalTicks = 0;
    let numTicksBeforeAnimation = alphaResetInterval * 7;

    simulation
      .alpha(0.1)
      .alphaDecay(0.005)
      .alphaMin(1e-6)
      .on('tick', () => {
        // if (totalTicks > numTicksBeforeAnimation) {
        updatePositions();
        if (totalTicks > numTicksBeforeAnimation) {
          showConvexHulls = true;
        }
        // simulationProgress = 0.0;
        // } else if (totalTicks % 20 == 0)
        //   simulationProgress = totalTicks / numTicksBeforeAnimation;
        let f = simulation.force('collide');
        f.strength(Math.min(1.0, f.strength() * 1.005));
        if (numTicks >= alphaResetInterval && initialAlpha > finalAlpha) {
          numTicks = 0;
          initialAlpha *= 0.4;
          simulation.alpha(initialAlpha).restart();
          f.strength(0.1);
        }
        numTicks += 1;
        totalTicks += 1;
      });
  }

  function updatePositions(colorF, hovered) {
    colorF = colorF || colorFn;

    scaleCanvas($ctx, $width, $height);
    $ctx.clearRect(0, 0, $width, $height);

    /* --------------------------------------------
     * Draw our scatterplot
     */
    nodePositions.forEach((d, i) => {
      let radius = pointRadius;
      if (hovered != null && i == hoveredPointIndex) radius *= 1.5;

      let numSlices = nodeData[i].numSlices;

      $ctx.globalAlpha = 1.0;

      if (colorBySlice) {
        $ctx.beginPath();
        let itemSlices = $data[i].slices;
        let color = colorFn != null ? colorFn($data[i]) : null;
        // if (!$data[i].error) radius *= 0.7;
        $ctx.globalAlpha = !!color ? 1.0 : 0.4;
        $ctx.strokeStyle = '#94a3b8';
        $ctx.lineWidth = 1;
        $ctx.arc(d.x, d.y, radius - 3, 0, 2 * Math.PI, false);
        $ctx.stroke();
        if ($data[i].error) {
          $ctx.fillStyle = '#94a3b8';
          $ctx.fill();
        }
        let lw = 4; // $data[i].error ? 4 : 2;
        $ctx.lineWidth = lw;
        // if (numSlices == 0) $ctx.globalAlpha = 0.7;
        if (numSlices > 0) {
          itemSlices.forEach((s, j) => {
            if (!s) return;
            $ctx.beginPath();
            $ctx.strokeStyle = sliceColorScale(j);
            $ctx.arc(
              d.x,
              d.y,
              radius - 1, // (numSlices > 0 ? radius : radius * 0.5) + ($data[i].error ? 1 : 0),
              -Math.PI * 0.5 + (j * Math.PI * 2.0) / itemSlices.length,
              -Math.PI * 0.5 + ((j + 1) * Math.PI * 2.0) / itemSlices.length,
              false
            );
            $ctx.stroke();
          });
        }
      } else if (colorByError) {
        $ctx.beginPath();
        let itemSlices = $data[i].slices;
        let color = colorFn != null ? colorFn($data[i]) : 'steelblue';
        radius = numSlices > 0 ? radius : radius * 0.5;
        $ctx.arc(d.x, d.y, radius, 0, 2 * Math.PI, false);
        $ctx.strokeStyle = color;
        $ctx.stroke();
        // if (numSlices == 0) $ctx.globalAlpha = 0.7;
        if (numSlices > 0) {
          $ctx.beginPath();
          $ctx.moveTo(d.x, d.y);
          itemSlices.forEach((s, j) => {
            if (!s) return;
            $ctx.arc(
              d.x,
              d.y,
              radius, // (numSlices > 0 ? radius : radius * 0.5) + ($data[i].error ? 1 : 0),
              -Math.PI * 0.5 + (j * Math.PI * 2.0) / itemSlices.length,
              -Math.PI * 0.5 + ((j + 1) * Math.PI * 2.0) / itemSlices.length,
              false
            );
            $ctx.lineTo(d.x, d.y);
          });
          $ctx.fillStyle = color;
          $ctx.fill();
        }
      } else {
        $ctx.beginPath();
        $ctx.arc(
          d.x,
          d.y,
          radius + ($data[i].error ? 1 : 0),
          0,
          2 * Math.PI,
          false
        );
        if ($data[i].error) {
          $ctx.fillStyle = colorFn != null ? colorFn($data[i]) : 'steelblue';
          $ctx.fill();
        } else {
          $ctx.strokeStyle = colorFn != null ? colorFn($data[i]) : 'steelblue';
          $ctx.stroke();
        }
      }
    });

    /*if (showConvexHulls) {
      renderConvexHulls();
    }*/
  }

  /*function renderConvexHulls() {
    let numSlices = $data[0].slices.length;
    d3.range(numSlices).forEach((sliceIndex) => {
      let hull = d3.polygonHull(
        nodePositions
          .map((d) => [d.x, d.y])
          .filter((d, i) => $data[i].slices[sliceIndex])
      );
      if (hull.length == 0) return;
      $ctx.beginPath();
      $ctx.moveTo(hull[0][0], hull[0][1]);
      hull.slice(1).forEach((p) => {
        $ctx.lineTo(p[0], p[1]);
      });
      $ctx.fillStyle = '#bbbbbb';
      $ctx.globalAlpha = 0.3;
      $ctx.fill();
    });
    $ctx.globalAlpha = 1.0;
  }*/

  $: if (!!$ctx && !!simulation) {
    updatePositions(colorFn, hoveredPointIndex);
  }

  $: if (!!$ctx) {
    let canvas = d3.select($ctx.canvas);
    console.log('canvas:', canvas);
    canvas.call(
      d3.zoom().on('zoom', (e) => {
        console.log('zooming');
      })
    );
  }

  $: if (!!hoveredMousePosition && !!simulation) {
    let closest = simulation.find(
      hoveredMousePosition[0],
      hoveredMousePosition[1],
      pointRadius * 2
    );
    if (!!closest) {
      hoveredSlices = $data[closest.index].slices;
      hoveredPointIndex = closest.index;
    } else {
      hoveredSlices = null;
      hoveredPointIndex = null;
    }
  } else {
    hoveredSlices = null;
    hoveredPointIndex = null;
  }
</script>
