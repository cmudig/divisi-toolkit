// defines how slice glyphs will be drawn throughout the interface
import * as d3 from 'd3';

export enum OutcomeColors {
  False = '#fff',
  True = '#94a3b8',
}

export const GlyphBorderColor = '#cbd5e1';
export const GlyphOutlineColor = '#7dd3fc';

export function drawSliceGlyphCanvas(
  ctx: CanvasRenderingContext2D,
  slices: number[],
  sliceColors: string[],
  radius: number = 12,
  outcome: boolean = false,
  alpha: number = 1.0,
  numSlices: number | null = null,
  outlineWidth: number = 0
) {
  if (numSlices == null) numSlices = slices.reduce((a, b) => a + b, 0);
  if (alpha < 0.001) return;
  ctx.globalAlpha = alpha;

  ctx.beginPath();
  ctx.arc(0, 0, radius * (numSlices > 0 ? 0.4 : 0.5), 0, 2 * Math.PI, false);
  ctx.strokeStyle = GlyphBorderColor;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = outcome ? OutcomeColors.True : OutcomeColors.False;
  ctx.fill();
  let lw = radius * 0.3;
  ctx.lineWidth = lw;
  if (numSlices > 0) {
    let sliceIdx = 0;
    slices.forEach((s, j) => {
      if (!s) return;
      ctx.beginPath();
      ctx.strokeStyle = sliceColors[j];
      ctx.arc(
        0,
        0,
        radius * 0.55, // (numSlices > 0 ? radius : radius * 0.5) + (outcome ? 1 : 0),
        -Math.PI * 0.5 + (sliceIdx * Math.PI * 2.0) / numSlices,
        -Math.PI * 0.5 + ((sliceIdx + 1) * Math.PI * 2.0) / numSlices,
        false
      );
      ctx.stroke();
      sliceIdx++;
    });
  }

  if (outlineWidth > 0) {
    ctx.beginPath();
    ctx.arc(
      0,
      0,
      Math.ceil(radius * (numSlices > 0 ? 0.7 : 0.5) + 2),
      0,
      2 * Math.PI,
      false
    );
    ctx.strokeStyle = GlyphOutlineColor;
    ctx.lineWidth = outlineWidth;
    ctx.stroke();
  }
}

export function drawSliceGlyphHTML(
  node: HTMLElement,
  slices: number[],
  sliceColors: string[],
  radius: number = 12,
  outcome: boolean = false,
  alpha: number = 1.0,
  numSlices: number | null = null
) {
  if (numSlices == null) numSlices = slices.reduce((a, b) => a + b, 0);

  let sel = d3
    .select(node)
    .html(null)
    .append('svg')
    .attr('width', radius * 2)
    .attr('height', radius * 2);
  let innerCircle = sel
    .append('circle')
    .attr('cx', radius)
    .attr('cy', radius)
    .attr('r', radius * (numSlices > 0 ? 0.4 : 0.5))
    .attr('stroke', GlyphBorderColor)
    .attr('fill', outcome ? OutcomeColors.True : OutcomeColors.False);

  let lw = radius * 0.3;
  let sliceR = radius * 0.55;
  if (numSlices > 1) {
    let sliceIdx = 0;
    slices.forEach((s, j) => {
      if (!s) return;
      let startAngle = -Math.PI * 0.5 + (sliceIdx * Math.PI * 2.0) / numSlices;
      let endAngle =
        -Math.PI * 0.5 + ((sliceIdx + 1) * Math.PI * 2.0) / numSlices;
      sel
        .append('path')
        .attr(
          'd',
          `M ${(radius + Math.cos(startAngle) * sliceR).toFixed(2)} ${(
            radius +
            Math.sin(startAngle) * sliceR
          ).toFixed(2)}` +
            ` A ${sliceR.toFixed(2)} ${sliceR.toFixed(2)} 0 0 1 ${(
              radius +
              Math.cos(endAngle) * sliceR
            ).toFixed(2)} ${(radius + Math.sin(endAngle) * sliceR).toFixed(2)}`
        )
        .attr('stroke', sliceColors[j])
        .attr('fill', 'none')
        .attr('stroke-width', lw);
      sliceIdx++;
    });
  } else if (numSlices == 1) {
    let idx = slices.findIndex((s, j) => s);
    sel
      .append('circle')
      .attr('cx', radius)
      .attr('cy', radius)
      .attr('r', sliceR)
      .attr('stroke', sliceColors[idx])
      .attr('fill', 'none')
      .attr('stroke-width', lw);
  }
}
