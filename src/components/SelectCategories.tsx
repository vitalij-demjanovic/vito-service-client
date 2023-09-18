interface CategoriesI {
  categories: CategoryI[];
}

interface CategoryI {
  id: number;
  name: string;
}

export default function SelectCategories({ categories }: CategoriesI) {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Kategória
      </label>
      <select
        defaultValue={"DEFAULT"}
        id="categories"
        className="bg-gray-50 border border-gray-300 text-third text-sm rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="DEFAULT">Vybrať kategóriu</option>
        <option value="OK">OK</option>
        {categories.map((category: CategoryI) => (
          <option value={category.name} key={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
}
