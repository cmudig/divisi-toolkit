<script>
  import * as upset from '@upsetjs/bundle';
  import * as d3 from 'd3';

  const errorKey = 'Error Rate';

  export let intersectionCounts = [];
  export let labels = [];

  let container;

  let selection = null;

  function onHover(set) {
    selection = set;
  }

  let sets;
  let comboArray;
  let elems;

  $: if (intersectionCounts.length > 0 && labels.length > 0) {
    elems = intersectionCounts
      .map((item) => {
        let errors = item[errorKey];
        let noErrors = item.count - errors;
        let itemSets = item.slices
          .map((s, i) => (s ? i : null))
          .filter((n) => n != null);
        return [
          ...Array.apply(null, Array(noErrors)).map((_) => ({
            sets: itemSets,
            error: false,
          })),
          ...Array.apply(null, Array(errors)).map((_) => ({
            sets: itemSets,
            error: true,
          })),
        ];
      })
      .flat();
    let totalPoints = intersectionCounts.reduce(
      (prev, curr) => prev + curr.count,
      0
    );
    // const elems = [
    //   { name: 'A', sets: ['S1', 'S2'] },
    //   { name: 'B', sets: ['S1'] },
    //   { name: 'C', sets: ['S2'] },
    //   { name: 'D', sets: ['S1', 'S3'] },
    // ];
    // elems.forEach((item, i) => (item.name = i));
    let { sets: newSets, combinations } = upset.extractCombinations(elems, {
      type: 'distinctIntersection',
    });
    sets = newSets;
    comboArray = Array.from(combinations);
    comboArray.sort((a, b) => {
      if (a.degree != b.degree) return a.degree - b.degree;
      return b.cardinality - a.cardinality;
    });
    comboArray = comboArray.filter((item) => item.cardinality > 10);
  }

  function describeSlice(slice) {
    let descriptions = Object.entries(slice).map(
      (e) => `<span class='font-mono'>${e[0]}</span> = ${e[1]}`
    );
    if (descriptions.length == 0) return '<empty slice>';
    return descriptions.join(', ');
  }

  $: if (!!container && !!sets && sets.length > 0) {
    upset.renderUpSet(container, {
      sets,
      combinations: comboArray,
      width: 600,
      height: 350,
      selection,
      onHover,
      combinationAddons: [
        upset.categoricalAddon('error', elems, {
          orient: 'vertical',
        }),
      ],
    });
  }
</script>

<div class="container w-100 h-100" bind:this={container} />
<div class="absolute bottom-0 left-0 p-3 text-gray-600">
  {#each labels as label, i}
    <p>
      {@html describeSlice(label.featureValues)} (count = {label.metrics[
        'Count'
      ].count}, error = {d3.format('.1%')(label.metrics[errorKey].mean)})
    </p>
  {/each}
</div>
