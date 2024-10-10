// VotingGraph.jsx
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const VotingGraph = ({ votesYes, votesNo }) => {
  const data = [
    { name: "Yes", value: votesYes },
    { name: "No", value: votesNo },
  ];
  const COLORS = ["#00C49F", "#FF8042"];

  return (
    <PieChart width={400} height={400}>
      <Pie data={data} cx={200} cy={200} labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default VotingGraph;
