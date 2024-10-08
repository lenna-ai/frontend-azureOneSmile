import { useQuery } from "react-query";

import Card from "../components/Card";
import Chart from "../components/Chart";
import Table from "../components/Table";
import areaChartConfig from "../constants/area-chart-config";
import barChartConfig from "../constants/bar-chart-config";

import {
  getCountUserPerDay,
  getTop5User,
  getCountUserPerHour,
  getTotalUser,
} from "../api/dashboard";
import dayjs from "dayjs";
import { Dispatch, SetStateAction, useEffect } from "react";

type Props = {
  dates: string[];
  setDates: Dispatch<SetStateAction<string[]>>;
};

export default function Dashboard({ dates, setDates }: Props) {
  const queryTop5User = useQuery({
    queryKey: ["TOP_5_USER"],
    queryFn: async () => {
      const params = {
        from_date:
          dates[0] || dayjs().subtract(90, "days").format("YYYY-MM-DD"),
        to_date: dates[1] || dayjs().format("YYYY-MM-DD"),
      };

      return await getTop5User(params);
    },
  });
  console.log("DATES", dates);
  const queryCountUserPerDay = useQuery({
    queryKey: ["COUNT_USER_PER_DAY"],
    queryFn: async () => {
      const params = {
        from_date:
          dates[0] || dayjs().subtract(90, "days").format("YYYY-MM-DD"),
        to_date: dates[1] || dayjs().format("YYYY-MM-DD"),
      };

      return await getCountUserPerDay(params);
    },
  });

  const queryCountUserPerHour = useQuery({
    queryKey: ["COUNT_USER_PER_HOUR"],
    queryFn: async () => {
      const params = {
        from_date:
          dates[0] || dayjs().subtract(90, "days").format("YYYY-MM-DD"),
        to_date: dates[1] || dayjs().format("YYYY-MM-DD"),
      };

      return await getCountUserPerHour(params);
    },
  });

  const queryTotalUser = useQuery({
    queryKey: ["TOTAL_USER"],
    queryFn: async () => {
      return await getTotalUser();
    },
  });

  useEffect(() => {
    if (dates.length) {
      queryCountUserPerDay.refetch();
      queryCountUserPerHour.refetch();
      queryTop5User.refetch();
      setDates([]);
    }
  }, [dates]);

  return (
    <div className="overflow-y-auto w-full gap-4 col-span-7 grid grid-cols-7 h-[calc(100vh-100px)]">
      <div className="col-span-7 w-full gap-4">
        <div className="grid grid-cols-9 w-full gap-4">
          <div className="col-span-4 grid grid-cols-4 w-full gap-4">
            <Card className="col-span-2 flex justify-between items-center">
              <div>
                <p className="text-gray-600">Total Users</p>
                <b>{queryTotalUser.data?.TotalUser}</b>
              </div>
              <div className="size-[50px] bg-teal-400 fc rounded">
                <i className="ri-group-fill text-xl text-white"></i>
              </div>
            </Card>
            <Card className="col-span-2 flex justify-between items-center">
              <div>
                <p className="text-gray-600">Total Users Access</p>
                <b>
                  {queryCountUserPerDay.data?.reduce(
                    (acc, cur) => (acc += cur.TotalAccesses),
                    0
                  )}
                </b>
              </div>
              <div className="size-[50px] bg-cyan-400 fc rounded">
                <i className="ri-group-fill text-xl text-white"></i>
              </div>
            </Card>
            <Card className="col-span-4">
              <div className="flex items-center justify-between mb-4">
                <p>Top 5 User Access</p>
                <button
                  type="button"
                  className="bg-blue-400 text-white px-2 py-1.5 rounded text-sm"
                >
                  See All
                </button>
              </div>
              <Table columns={["Name", "Total Access", "Last Access"]}>
                {queryTop5User.data?.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-200 [&>td]:p-3 [&>td]:text-start"
                  >
                    <td>{item.Username}</td>
                    <td>{item.CountUsernameEnter}</td>
                    <td>{dayjs().format("DD MMMM YYYY, HH:mm")}</td>
                  </tr>
                ))}
              </Table>
            </Card>
          </div>
          <Card className="col-span-5">
            <h5>User Access</h5>
            <div className="flex item-end h-full">
              <div className="w-full mt-auto">
                <Chart
                  data={{
                    series: [
                      {
                        name: "Access",
                        data:
                          queryCountUserPerDay.data?.map(
                            (item) => item.TotalAccesses
                          ) || [],
                      },
                    ],
                  }}
                  type="area"
                  options={areaChartConfig(
                    queryCountUserPerDay.data?.map((item) => item.Day) || []
                  )}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Card className="col-span-7">
        <h5>Peak Hours</h5>
        <div className="w-full">
          <Chart
            data={{
              series: [
                {
                  name: "Access",
                  data:
                    queryCountUserPerHour.data?.map(
                      (item) => item.ResultCountHour
                    ) || [],
                },
              ],
            }}
            type="bar"
            options={barChartConfig}
          />
        </div>
      </Card>
    </div>
  );
}
