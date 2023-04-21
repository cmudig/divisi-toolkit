<script>
  import * as d3 from 'd3';

  export let intersectionCounts = [];
  export let labels = [];

  let numSlices = intersectionCounts[0].slices.length;

  let container;

  let matrix = null;
  $: if (intersectionCounts.length > 0 && !!container) {
    matrix = d3
      .range(numSlices + 1)
      .map((i) => new Array(numSlices + 1).fill(0));
    intersectionCounts.forEach((item) => {
      item.slices.forEach((s, i) => {
        if (!s) return;
        item.slices.forEach((s2, j) => {
          if (!s2 || i < j) return;
          matrix[i][j] += item.count;
          if (i != j) matrix[j][i] += item.count;
        });
      });
      if (item.slices.reduce((prev, curr) => prev + curr, 0) == 0)
        matrix[matrix.length - 1][matrix.length - 1] = item.count;
    });
    console.log(matrix);
    createChordDiagram();
  } else matrix = null;

  function createChordDiagram() {
    if (matrix == null) return;
    // create the svg area
    var svg = d3
      .select(container)
      .append('svg')
      .attr('width', 440)
      .attr('height', 440)
      .append('g')
      .attr('transform', 'translate(220,220)');
    console.log(svg);

    let colors = d3.schemeCategory10;
    console.log(colors);
    // give this matrix to d3.chord(): it will calculates all the info we need to draw arc and ribbon
    var res = d3.chord().padAngle(0.05).sortSubgroups(d3.descending)(matrix);

    // add the groups on the outer part of the circle
    svg
      .datum(res)
      .append('g')
      .selectAll('g')
      .data(function (d) {
        return d.groups;
      })
      .enter()
      .append('g')
      .append('path')
      .style('fill', function (d, i) {
        return colors[i];
      })
      .style('stroke', 'black')
      .attr('d', d3.arc().innerRadius(200).outerRadius(210));

    // Add the links between groups
    svg
      .datum(res)
      .append('g')
      .selectAll('path')
      .data(function (d) {
        return d;
      })
      .enter()
      .append('path')
      .attr('d', d3.ribbon().radius(200))
      .style('fill', function (d) {
        return colors[d.source.index];
      }) // colors depend on the source group. Change to target otherwise.
      .style('stroke', 'black');
  }
</script>

<p>
  This isn't a correct visualization in that the total number of points
  reflected in the circle is larger than the total number in the dataset. When
  we translate the full N-dimensional intersection matrix to just 2D pairwise
  intersections, there will be some double counts for points that are part of
  more than 2 slices.
</p>
<div bind:this={container} style="width: 500px; height: 500px;" />
