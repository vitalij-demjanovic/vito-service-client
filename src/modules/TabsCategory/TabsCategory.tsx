import CartCategory from "../../components/CartCategory.tsx";
import { useGetCategoriesQuery } from "../../store/api/categories.service.ts";

export default function TabsCategory() {
  const { data = [] } = useGetCategoriesQuery("");

  return (
    <div className="text-center">
      <h1 className="text-5xl mb-8">Kategórie</h1>
      <div className="flex gap-3 flex-wrap">
        {data.map((item: CategoryI) => (
          <CartCategory
            categoryId={item.id}
            key={item.id}
            category={item.name}
          />
        ))}
      </div>
    </div>
  );
}
