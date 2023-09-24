import SelectFunctionality from "../../components/SelectFunctionality.tsx";
import SelectCategories from "../../components/SelectCategories.tsx";
import { useGetCategoriesQuery } from "../../store/api/categories.service.ts";
import { FormEvent, useState } from "react";
import { useCreateItemMutation } from "../../store/api/create-item.service.ts";

export default function CreatePartForm() {
  const [formData, setFormData] = useState({
    name: "",
    count: 0,
    price: 0,
    description: "",
  });
  const [functionality, setFunctionality] = useState("");
  const [category, setCategory] = useState("");

  const { data = [], isSuccess } = useGetCategoriesQuery("");
  const [createItem] = useCreateItemMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
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
    createItem(body);
    if (isSuccess === true) {
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col items-center max-w-[50%] m-auto">
      <h1 className="text-5xl mb-8">Vytvoriť položku</h1>
      <form onSubmit={handleCreateItem} className="flex flex-col w-full">
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
    </div>
  );
}
