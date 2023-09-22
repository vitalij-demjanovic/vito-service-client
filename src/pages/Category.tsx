import { useParams } from "react-router-dom";
import PartsTable from "../components/PartsTable.tsx";
import { useGetPartsQuery } from "../store/api/parts.service.ts";

export default function Category() {
  const { id } = useParams();
  const { data = [] } = useGetPartsQuery(id);
  const headTable: string[] = ["id", "Názov", "Počet", "Cena"];

  return (
    <div className="container">
      <PartsTable head={headTable} line={data} />
    </div>
  );
}
