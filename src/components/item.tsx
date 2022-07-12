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
    <div className="flex w-full">
      <div className="w-1/2 bg-gradient-to-r from-[#303659] to-[#292E4D] my-4 mr-2 rounded-lg">
        <h2 className="text-center mb-5 font-mono my-5">Asset APR(y)</h2>
        <ArpChart data={data.aprHistory} />
      </div>
      <div className="w-1/2 bg-gradient-to-r from-[#303659] to-[#292E4D] my-4 ml-2 rounded-lg">
        <h2 className="text-center mb-5 font-mono my-5">Asset TVL</h2>
        <TvlChart data={data.tvlStakedHistory} />
      </div>
    </div>
  );
};

export default Item;
