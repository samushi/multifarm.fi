import type { SWRResponse } from "swr";

// export interface IData {
//   name: string;
//   uv: number;
//   pv: number;
//   amt: number;
// }

export interface ChartProps {
  width?: number;
  height?: number;
  className?: string;
  data: IData[];
}

export type IUrlParams = {
  farmId: string;
  page: number;
  tvlMin: number;
  sort: string;
  sortOrder: string;
  farmsTvlStakedGte: number;
};

// Get Assets
export interface IData {
  active: boolean;
  assetId: string;
  asset: string;
  farm: string;
  farmId: string;
  blockchain: string;
}

export interface IAssetPayload {
  data: IData[];
  max_pages: number;
}

export interface ISwrData extends Omit<SWRResponse, "data"> {
  data?: IAssetPayload;
}
