import { useParams } from "react-router-dom";
import PartsTable from "../components/PartsTable.tsx";
import { useGetPartsQuery } from "../store/api/parts.service.ts";
import Spinner from "../ui/Spinner.tsx";

export default function Category() {
  const { id } = useParams();
  const { data = [], isLoading } = useGetPartsQuery(id);
  const headTable: string[] = ["id", "Názov", "Počet", "Cena"];

  if (isLoading) return <Spinner />;

  return (
    <div className="container">
      <PartsTable head={headTable} line={data} />
    </div>
  );
}
