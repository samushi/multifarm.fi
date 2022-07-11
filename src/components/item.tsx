import { useParams } from "react-router-dom";
import { getAssetDetails } from "../lib/api";

const Item = (): JSX.Element => {
  const { assetId } = useParams();

  const { data, error } = getAssetDetails(assetId);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  return (
    <div className="text-center">
      <p>{data.aprHistory[0].date}</p>
      <p>{data.aprHistory[0].value}</p>
    </div>
  );
};

export default Item;
