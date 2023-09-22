import { useNavigate } from "react-router-dom";

interface CartCategoryI {
  category: string;
  categoryId: number;
}

export default function CartCategory({ category, categoryId }: CartCategoryI) {
  const navigate = useNavigate();

  const goCatgory = (id: number) => {
    navigate(`/warehouse/${id}`);
  };

  return (
    <div
      className="text-3xl bg-primary max-w-lg p-2 mb-4 last:mb0 hover:bg-secondary duration-500 cursor-pointer"
      onClick={() => goCatgory(categoryId)}
    >
      {category}
    </div>
  );
}
