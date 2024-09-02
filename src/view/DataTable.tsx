import { useQuery } from "react-query";

import Card from "../components/Card";
import Table from "../components/Table";

import { getDataUser } from "../api/dashboard";
import dayjs from "dayjs";

export default function DataTable() {
  const queryDataUser = useQuery({
    queryKey: ["DATA_USER"],
    queryFn: () => getDataUser(),
  });

  return (
    <Card className="col-span-7">
      <Table columns={["User ID", "Username", "Access Time"]}>
        {queryDataUser.data?.map((item, i) => (
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
