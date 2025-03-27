import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const SummaryChart: React.FC = () => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // Replace with real analytics data from Analytics.getAnalyticsData()
    const data = [
      { stage: 1, gold: 50 },
      { stage: 2, gold: 55 },
      { stage: 3, gold: 52 },
      { stage: 4, gold: 60 },
      { stage: 5, gold: 58 }
    ];

    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();
    const width = 400;
    const height = 200;

    const xScale = d3.scaleLinear().domain([1, data.length]).range([0, width]);
    const yScale = d3.scaleLinear().domain([
      d3.min(data, (d) => d.gold)! - 5,
      d3.max(data, (d) => d.gold)! + 5
    ]).range([height, 0]);

    const line = d3.line<{ stage: number; gold: number }>()
      .x((d) => xScale(d.stage))
      .y((d) => yScale(d.gold));

    svg.attr('width', width).attr('height', height);
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', line as any);
  }, []);

  return (
    <div>
      <h2 className="font-bold">Economic Timeline</h2>
      <svg ref={ref} />
    </div>
  );
};

export default SummaryChart;
