import {
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";
import type { ChartProps } from "../types/index";
import numbro from "numbro";

const TvlChart = (props: ChartProps) => {
  const { data, className } = props;
  const classNameIncluded = [props.className].join(" ");
  return (
    <ResponsiveContainer
      width={props.width ? props.width : "100%"}
      height={props.height ? props.height : 400}
      className={classNameIncluded}
    >
      <AreaChart data={data}>
        <defs>
          <linearGradient id="chart" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3498db" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#3498db" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <Area
          type="monotone"
          dataKey="value"
          stroke="#bb86fc"
          fill="url(#chart)"
          strokeWidth={2}
        />

        <YAxis
          dataKey="value"
          axisLine={{ stroke: "#FFF", strokeWidth: 1, opacity: 0.1 }}
          tickLine={false}
          tickCount={9}
          tick={{ fill: "#3498db", fontSize: "10px" }}
          tickFormatter={(string) => {
            return numbro(string).format({
              average: true,
              mantissa: 2,
            });
          }}
        ></YAxis>
        <XAxis
          dataKey="date"
          axisLine={{ stroke: "#FFF", strokeWidth: 1, opacity: 0.1 }}
          tickLine={false}
          tickFormatter={(value) => {
            return "";
          }}
        />
        <Tooltip content={<CustomTooltipTVL />} />
        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const CustomTooltipTVL = ({ active, payload, label }: any) => {
  if (!active) return null;

  const value = numbro(payload[0].value).format({
    average: true,
    mantissa: 2,
  });

  return (
    <div className="chart-tooltip">
      <p className="label">{format(parseISO(label), "MMM dd")}</p>
      <p className="value">{value}</p>
    </div>
  );
};

export default TvlChart;
