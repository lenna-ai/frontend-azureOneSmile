import { useQuery } from "react-query";

import Card from "../components/Card";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

import { getDataUser } from "../api/dashboard";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function DataTable() {
  const [page, setPage] = useState(1);

  const onChangePage = (page: number) => {
    setPage(page);
  };

  const queryDataUser = useQuery({
    queryKey: ["DATA_USER"],
    queryFn: () => getDataUser({ page }),
  });

  useEffect(() => {
    queryDataUser.refetch();
  }, [page]);

  return (
    <Card className="col-span-7 min-h-[600px]">
      <div className="p-4 flex justify-end">
        <Pagination
          page={page}
          onChangePage={onChangePage}
          totalPages={queryDataUser.data?.total_pages || 1}
        />
      </div>
      <Table columns={["User ID", "Username", "Access Time"]}>
        {queryDataUser.data?.data?.map((item, i) => (
          <tr
            key={i}
            className="border-b border-gray-200 [&>td]:p-3 [&>td]:text-start"
          >
            <td>{item.UserId}</td>
            <td>{item.Username}</td>
            <td>{dayjs(item.CreatedAt).format("DD MMMM YYYY, HH:mm")}</td>
          </tr>
        ))}
      </Table>
    </Card>
  );
}
