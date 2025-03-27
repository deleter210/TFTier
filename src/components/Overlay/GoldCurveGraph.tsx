import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const GoldCurveGraph: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // Replace with real per-round gold data collected from GEO events.
    const data = [
      { round: 1, gold: 50 },
      { round: 2, gold: 55 },
      { round: 3, gold: 52 },
      { round: 4, gold: 60 },
      { round: 5, gold: 58 }
    ];

    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();
    const width = 200;
    const height = 100;

    const xScale = d3.scaleLinear().domain([1, data.length]).range([0, width]);
    const yScale = d3.scaleLinear().domain([
      d3.min(data, (d) => d.gold)! - 5,
      d3.max(data, (d) => d.gold)! + 5
    ]).range([height, 0]);

    const line = d3.line<{ round: number; gold: number }>()
      .x((d) => xScale(d.round))
      .y((d) => yScale(d.gold));

    svg.attr('width', width).attr('height', height);
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'white')
      .attr('stroke-width', 2)
      .attr('d', line as any);
  }, []);

  return (
    <div className="mt-2">
      <h2 className="text-white font-bold">Gold Curve</h2>
      <svg ref={ref} />
    </div>
  );
};

export default GoldCurveGraph;
