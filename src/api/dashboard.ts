import API from ".";
import * as type from "../types/dashboard";
import { BaseAPI } from "../types/api";

export async function getCountUserPerDay(params: type.DateParams) {
  const response = await API<
    type.DateParams,
    BaseAPI<type.RES_countUserPerDay[]>
  >({
    method: "GET",
    path: "/dashboard/countUserPerDay",
    params,
  });

  return response.data;
}

export async function getTop5User() {
  const response = await API<null, BaseAPI<type.RES_top5User[]>>({
    method: "GET",
    path: "/dashboard/top5User",
  });

  return response.data;
}

export async function getCountUserPerHour(params: type.DateParams) {
  const response = await API<
    type.DateParams,
    BaseAPI<type.RES_countUserPerHour[]>
  >({
    method: "GET",
    path: "/dashboard/countDataUserPerHour",
    params,
  });

  return response.data;
}

export async function getTotalUser() {
  const response = await API<null, BaseAPI<type.RES_totalUser>>({
    method: "GET",
    path: "/dashboard/totalUser",
  });

  return response.data;
}

export async function getDataUser(params?: type.PageParams) {
  const response = await API<type.PageParams, BaseAPI<type.RES_dataUser[]>>({
    method: "GET",
    path: "/dashboard",
    params,
  });

  return response.data;
}
