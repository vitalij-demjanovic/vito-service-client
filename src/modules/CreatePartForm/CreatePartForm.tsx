import SelectFunctionality from "../../components/SelectFunctionality.tsx";
import SelectCategories from "../../components/SelectCategories.tsx";
import { useGetCategoriesQuery } from "../../store/api/categories.service.ts";

export default function CreatePartForm() {
  const { data = [] } = useGetCategoriesQuery("");

  return (
    <>
      <form className="flex flex-col max-w-[500px]">
        <input
          type="text"
          name="name"
          placeholder="Názov"
          className="text-third placeholder:text-third p-2 rounded-[20px] min-w-[300px] mb-4"
        />
        <input
          type="number"
          name="count"
          placeholder="Počet"
          className="text-third placeholder:text-third p-2 rounded-[20px] min-w-[300px] mb-4"
        />
        <input
          type="number"
          name="price"
          placeholder="Cena"
          className="text-third placeholder:text-third p-2 rounded-[20px] min-w-[300px] mb-4"
        />
        <input
          type="text"
          name="description"
          placeholder="Stručný opis"
          className="text-third placeholder:text-third p-2 rounded-[20px] min-w-[300px] mb-4"
        />
        <div className="mb-4">
          <SelectFunctionality />
        </div>
        <div className="mb-4">
          <SelectCategories categories={data} />
        </div>
        <button className="bg-primary p-2 rounded-[20px] min-w-[300px] cursor-pointer">
          Vytvoriť
        </button>
      </form>
    </>
  );
}
