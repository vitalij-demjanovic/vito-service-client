import CartCategory from "../../components/CartCategory.tsx";
import { useGetCategoriesQuery } from "../../store/api/categories.service.ts";

export default function TabsCategory() {
  const { data = [] } = useGetCategoriesQuery("");

  return (
    <div>
      {data.map((item: CategoryI) => (
        <CartCategory categoryId={item.id} key={item.id} category={item.name} />
      ))}
    </div>
  );
}
