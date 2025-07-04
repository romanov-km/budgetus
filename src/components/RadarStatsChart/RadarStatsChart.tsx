import React from "react";
import {
  PolarAngleAxis,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";

interface DataItem {
  name: string;
  value: number;
}

interface RadarStatsChartProps {
  data: DataItem[];
}

const RadarStatsChart: React.FC<RadarStatsChartProps> = ({ data }) => {
  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius={10}
          outerRadius={100}
          barSize={20}
          data={data}
          startAngle={450}
          endAngle={90}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, Math.max(...data.map((d) => d.value)) * 1.2]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            dataKey="value"
            cornerRadius={1}
          />
          <Legend
    iconSize={0}
    layout="vertical"
    align="left"
    verticalAlign="middle"
  />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarStatsChart;
