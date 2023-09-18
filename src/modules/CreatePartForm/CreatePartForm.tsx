import SelectFunctionality from "../../components/SelectFunctionality.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import SelectCategories from "../../components/SelectCategories.tsx";

export default function CreatePartForm() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((e) => {
        return e;
      });
  }, []);

  console.log(categories);

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
          <SelectCategories categories={categories} />
        </div>
        <button className="bg-primary p-2 rounded-[20px] min-w-[300px] cursor-pointer">
          Vytvoriť
        </button>
      </form>
    </>
  );
}
