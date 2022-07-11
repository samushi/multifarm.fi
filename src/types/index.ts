import type { SWRResponse } from "swr";

// export interface ChartData {
//   date: string;
//   value: number;
// }

export interface ChartProps {
  width?: number;
  height?: number;
  className?: string;
  data: IDetailDataType[];
}

export type IUrlParams = {
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
  aprYearly: number;
  aprDaily: number;
  tvlStaked: number;
}

export interface IAssetPayload {
  data: IData[];
  max_pages: number;
}

export interface ISwrData extends Omit<SWRResponse, "data"> {
  data?: IAssetPayload;
}

// Get Asset Details
export interface IDetailDataType {
  date: string;
  value: number;
}

export interface IDetailsData {
  aprHistory: IDetailDataType[];
  tvlStakedHistory: IDetailDataType[];
}
export interface ISwrDataDetails extends Omit<SWRResponse, "data"> {
  data?: IDetailsData;
}
