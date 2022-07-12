import { useParams } from "react-router-dom";
import { getAssetDetails } from "../lib/api";
import ArpChart from "./ArpChart";
import TvlChart from "./TvlChart";

const Item = (): JSX.Element => {
  const { assetId } = useParams();

  const { data, error } = getAssetDetails(assetId);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex">
      <ArpChart data={data.aprHistory} />
      <TvlChart data={data.tvlStakedHistory} />
    </div>
  );
};

export default Item;
