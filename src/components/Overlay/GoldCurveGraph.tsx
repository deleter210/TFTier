import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface GoldCurveGraphProps {
  goldHistory: number[];
}

const GoldCurveGraph: React.FC<GoldCurveGraphProps> = ({ goldHistory }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 200, height = 100;
    svg.attr("width", width).attr("height", height);

    if (goldHistory.length === 0) return;
    const xScale = d3.scaleLinear().domain([0, goldHistory.length - 1]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, d3.max(goldHistory) || 10]).range([height, 0]);

    const line = d3.line<number>()
      .x((d, i) => xScale(i))
      .y(d => yScale(d))
      .curve(d3.curveMonotoneX);

    svg.append("path")
      .datum(goldHistory)
      .attr("fill", "none")
      .attr("stroke", "#FFD700")
      .attr("stroke-width", 2)
      .attr("d", line as any);

    svg.append("circle")
      .attr("cx", xScale(goldHistory.length - 1))
      .attr("cy", yScale(goldHistory[goldHistory.length - 1]))
      .attr("r", 4)
      .attr("fill", "#FFD700");
  }, [goldHistory]);

  return (
    <div className="p-2 bg-gray-800 bg-opacity-50 rounded">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default GoldCurveGraph;
