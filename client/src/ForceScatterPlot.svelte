<script>
  import { getContext, onDestroy } from 'svelte';
  import * as d3 from 'd3';
  import { scaleCanvas } from 'layercake';
  import forceMagnetic from 'd3-force-magnetic';

  const { data, width, height } = getContext('LayerCake');

  export let pointRadius = 4;
  export let colorFn = null;
  export let hoveredSlices = null;

  export let hoveredMousePosition = null;
  export let hoveredPointIndex = null;

  const { ctx } = getContext('canvas');

  let nodePositions = [];

  let nodeData = [];

  export let simulationProgress = 0;

  let simulation;

  onDestroy(() => {
    if (!!simulation) simulation.stop();
  });

  $: if ($data.length > 0) {
    console.log('force data', $data);
    initializeData($data, $width, $height);
  } else {
    nodeData = [];
    nodePositions = [];
    simulation = null;
  }

  function initializeData(ds, w, h) {
    nodeData = ds.map((d) => ({
      numSlices: d.slices.reduce((prev, curr) => prev + curr, 0),
    }));
    nodePositions = nodeData.map((n, i) =>
      n.numSlices > 0
        ? {
            x: w / 2 + Math.random() * 50 - 25,
            y: h / 2 + Math.random() * 50 - 25,
          }
        : {
            x: Math.random() * 800 - 400 + w / 2,
            y: Math.random() * 800 - 400 + h / 2,
          }
    );

    let counts = Array.apply(null, Array(ds[0].slices.length)).map(() => 0);
    ds.forEach((d) => {
      d.slices.forEach((x, i) => {
        if (x) counts[i] += 1;
      });
    });

    let links = [];
    $data.forEach((n1, i) => {
      $data.forEach((n2, j) => {
        if (i <= j) return;
        let countEqual = n1.slices
          .map(
            (s1, k) => (s1 && n2.slices[k]) * Math.log10(ds.length / counts[k])
          )
          .reduce((prev, curr) => prev + curr, 0);
        let sum1 = n1.slices.reduce(
          (prev, curr, k) => prev + curr * Math.log10(ds.length / counts[k]),
          0
        );
        let sum2 = n2.slices.reduce(
          (prev, curr, k) => prev + curr * Math.log10(ds.length / counts[k]),
          0
        );
        if (sum1 == 0 && sum2 == 0) {
          return; // links.push({ source: i, target: j, strength: 1.0 });
        } else if ((sum1 == 0 || sum2 == 0) && !(n1.error && n2.error))
          return; // links.push({ source: i, target: j, strength: 0.8, repel: true });
        else {
          links.push({
            source: i,
            target: j,
            strength: Math.pow((countEqual / ((sum1 + sum2) * 0.5)) * 3, 2.0),
          });
        }
      });
    });

    // let linkForce = forceMagnetic()
    //   .links(links)
    //   // .charge((n) => (nodeData[n.index].numSlices > 0 ? 100 : -1))
    //   // .distance((l) => 30 / l.strength)
    //   .strength((l) => l.strength)
    //   .polarity((l) => !l.repel);
    let linkForce = d3
      .forceLink(links)
      .distance(10)
      .strength((l) => l.strength);
    // simulation = d3
    //   .forceSimulation(nodePositions)
    //   .force('center', d3.forceCenter(w / 2, h / 2))
    //   .force('link', linkForce)
    //   // .force(
    //   //   'collide',
    //   //   d3
    //   //     .forceCollide()
    //   //     .radius(pointRadius * 1.5)
    //   //     .strength(0.5)
    //   // )
    //   // .force(
    //   //   'attract',
    //   //   d3
    //   //     .forceManyBody()
    //   //     .strength(10)
    //   //     .distanceMin(pointRadius)
    //   //     .distanceMax(100)
    //   // )
    //   .force('x', d3.forceX(w / 2).strength(0.1))
    //   .force('y', d3.forceY(w / 2).strength(0.1))
    //   .alpha(1)
    //   .alphaDecay(0.01)
    //   .on('tick', updatePositions);

    // setTimeout(() => {
    let alphaResetInterval = 200;
    let initialAlpha = 0.1;
    let finalAlpha = 0.001;
    let numTicks = 0;
    let totalTicks = 0;
    simulation = d3
      .forceSimulation(nodePositions)
      .force('center', d3.forceCenter(w / 2, h / 2))
      .force('link', linkForce)
      .force(
        'collide',
        d3
          .forceCollide()
          .radius(pointRadius * 1.5)
          .strength(0.1)
      )
      .force('x', d3.forceX(w / 2).strength(0.1))
      .force('y', d3.forceY(w / 2).strength(0.1))
      .alpha(0.1)
      .alphaDecay(0.005)
      .alphaMin(1e-6)
      .on('tick', () => {
        if (totalTicks > alphaResetInterval * 4) {
          updatePositions();
          simulationProgress = 0.0;
        } else if (totalTicks % 20 == 0)
          simulationProgress = totalTicks / (alphaResetInterval * 4);
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
    // }, 5000);
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

      $ctx.beginPath();
      let numSlices = nodeData[i].numSlices;
      $ctx.arc(
        d.x,
        d.y,
        (numSlices > 0 ? radius : radius * 0.5) + ($data[i].error ? 1 : 0),
        0,
        2 * Math.PI,
        false
      );
      if ($data[i].error) {
        if (numSlices == 0) $ctx.fillStyle = '#bbb';
        else $ctx.fillStyle = colorFn != null ? colorFn($data[i]) : 'steelblue';
        $ctx.fill();
      } else {
        if (numSlices == 0) $ctx.strokeStyle = '#bbb';
        else
          $ctx.strokeStyle = colorFn != null ? colorFn($data[i]) : 'steelblue';
        $ctx.stroke();
      }
    });
  }

  $: if (!!$ctx) updatePositions(colorFn, hoveredPointIndex);

  $: if (!!hoveredMousePosition && !!simulation) {
    let closest = simulation.find(
      hoveredMousePosition[0],
      hoveredMousePosition[1],
      pointRadius * 2
    );
    if (!!closest) {
      hoveredSlices = $data[closest.index].slices;
      hoveredPointIndex = closest.index;
    }
  } else {
    hoveredSlices = null;
    hoveredPointIndex = null;
  }
</script>
