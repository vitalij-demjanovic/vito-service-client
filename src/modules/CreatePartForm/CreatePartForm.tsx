import SelectFunctionality from "../../components/SelectFunctionality.tsx";
import SelectCategories from "../../components/SelectCategories.tsx";
import { useGetCategoriesQuery } from "../../store/api/categories.service.ts";
import { FormEvent, useState } from "react";

export default function CreatePartForm() {
  const [formData, setFormData] = useState({
    name: "",
    count: 0,
    price: 0,
    description: "",
  });
  const [functionality, setFunctionality] = useState("");
  const [category, setCategory] = useState("");

  const { data = [] } = useGetCategoriesQuery("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // For numeric fields (count and price), parse the value to a number
    const newValue =
      name === "count" || name === "price" ? parseFloat(value) : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleCreateItem = (e: FormEvent) => {
    e.preventDefault();

    const body = {
      ...formData,
      category,
      functionality,
    };
    console.log(body);
  };

  return (
    <>
      <form onSubmit={handleCreateItem} className="flex flex-col max-w-[500px]">
        <input
          type="text"
          name="name"
          placeholder="Názov"
          className="text-third placeholder:text-third p-2 rounded-[20px] min-w-[300px] mb-4"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="count"
          placeholder="Počet"
          className="text-third placeholder:text-third p-2 rounded-[20px] min-w-[300px] mb-4"
          value={formData.count}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step={"0.01"}
          placeholder="Cena"
          className="text-third placeholder:text-third p-2 rounded-[20px] min-w-[300px] mb-4"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Stručný opis"
          className="text-third placeholder:text-third p-2 rounded-[20px] min-w-[300px] mb-4"
          value={formData.description}
          onChange={handleChange}
        />
        <div className="mb-4">
          <SelectFunctionality
            selectedValue={functionality}
            onValueChange={setFunctionality}
          />
        </div>
        <div className="mb-4">
          <SelectCategories categories={data} onChange={setCategory} />
        </div>
        <button className="bg-primary p-2 rounded-[20px] min-w-[300px] cursor-pointer">
          Vytvoriť
        </button>
      </form>
    </>
  );
}
