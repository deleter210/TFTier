import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import Card from '../../Common/Card';

interface GoldCurveGraphProps {
  goldHistory: number[];
}

const GoldCurveGraph: React.FC<GoldCurveGraphProps> = ({ goldHistory }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || goldHistory.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 280;
    const height = 120;
    svg.attr('width', width).attr('height', height);

    const xScale = d3.scaleLinear().domain([0, goldHistory.length - 1]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, d3.max(goldHistory) || 10]).range([height, 0]);

    const line = d3
      .line<number>()
      .x((_, i) => xScale(i))
      .y((d) => yScale(d))
      .curve(d3.curveMonotoneX);

    svg
      .append('path')
      .datum(goldHistory)
      .attr('fill', 'none')
      .attr('stroke', '#FFD700')
      .attr('stroke-width', 2)
      .attr('d', line as any);

    svg
      .append('circle')
      .attr('cx', xScale(goldHistory.length - 1))
      .attr('cy', yScale(goldHistory[goldHistory.length - 1]))
      .attr('r', 4)
      .attr('fill', '#FFD700');
  }, [goldHistory]);

  return (
    <Card title="Gold Curve">
      <svg ref={svgRef}></svg>
    </Card>
  );
};

export default GoldCurveGraph;
