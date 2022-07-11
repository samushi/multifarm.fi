import { getAssets } from "../lib/api";
import { Link, Outlet } from "react-router-dom";

const List = (): JSX.Element => {
  const { data, error } = getAssets({
    page: 1,
    tvlMin: 50000,
    sort: "tvlStaked",
    sortOrder: "desc",
    farmsTvlStakedGte: 50000,
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const items = data.data;

  return (
    <>
      <Outlet />
      <table className="multifarm-table">
        <thead>
          <tr>
            <th>Asset</th>
            <th>TVL Staked</th>
            <th>APR (y)</th>
            <th>APR (d)</th>
            <th>Blockchain</th>
            <th>Farm</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <Link to={`/item/${item.assetId}`}>{item.asset}</Link>
                </td>
                <td>{item.tvlStaked}</td>
                <td>{item.aprYearly}%</td>
                <td>{item.aprDaily}%</td>
                <td>{item.blockchain}</td>
                <td>{item.farm}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default List;
