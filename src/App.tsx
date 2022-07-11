import { getAssets } from "./lib/api";
import Chart from "./components/chart";
import type { IData } from "./types/index";

// const data1: IData[] = [
//   { name: "Page A", uv: 400, pv: 1400, amt: 2400 },
//   { name: "Page B", uv: 500, pv: 2400, amt: 2400 },
//   { name: "Page C", uv: 600, pv: 3400, amt: 2400 },
//   { name: "Page D", uv: 700, pv: 4400, amt: 2400 },
// ];

// const data2: IData[] = [
//   { name: "Page A", uv: 400, pv: 1400, amt: 2400 },
//   { name: "Page B", uv: 500, pv: 2400, amt: 2400 },
//   { name: "Page C", uv: 600, pv: 3400, amt: 2400 },
//   { name: "Page D", uv: 700, pv: 4400, amt: 2400 },
// ];

function App() {
  const { data, error } = getAssets({
    farmId: "jay_flamingo_random_6ix_vegas",
    page: 1,
    tvlMin: 50000,
    sort: "tvlStaked",
    sortOrder: "desc",
    farmsTvlStakedGte: 50000,
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const items = data.data;
  const max_pages = data.max_pages;

  console.log(items);

  return (
    <div className="ml-5">
      {items.map((item, index) => {
        return <h2>{item.asset}</h2>;
      })}
    </div>
  );
}

export default App;
