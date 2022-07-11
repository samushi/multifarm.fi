import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import type { ChartProps } from "../types/index";

const Chart = (props: ChartProps) => {
  const className = ["m-5", props.className].join(" ");
  return (
    <LineChart
      className={className}
      width={props.width ? props.width : 600}
      height={props.height ? props.height : 400}
      data={props.data}
    >
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
  );
};

export default Chart;
