import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [
  { name: "Page A", uv: 400, pv: 1400, amt: 2400 },
  { name: "Page B", uv: 500, pv: 2400, amt: 2400 },
  { name: "Page C", uv: 600, pv: 3400, amt: 2400 },
  { name: "Page D", uv: 700, pv: 4400, amt: 2400 },
];

const Chart = () => {
  return (
    <LineChart width={600} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </LineChart>
  );
};

export default Chart;
