import axios from "axios";
import type { IUrlParams } from "../types";
import useSWR from "swr";
import { ISwrData } from "../types";

//https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000

const instance = axios.create({
  baseURL: "https://api.multifarm.fi",
});

/**
 * Get Assets
 * @param params
 * @returns
 */
export const getAssets = (params: IUrlParams): ISwrData => {
  const axiosFetcher = (url: string, params: IUrlParams) =>
    instance
      .get(url, {
        params: {
          pg: params.page,
          tvl_min: params.tvlMin,
          sort: params.sort,
          sort_order: params.sortOrder,
          farms_tvl_staked_gte: params.farmsTvlStakedGte,
        },
      })
      .then((res) => res.data);

  return useSWR([`${params.farmId}/get_assets`, params], axiosFetcher);
};

export default instance;
