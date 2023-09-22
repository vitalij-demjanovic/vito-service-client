interface IPart {
  id: number;
  name: string;
  count: number;
  price: number;
}

interface ITable {
  head: string[];
  line: IPart[];
}

export default function PartsTable({ head, line }: ITable) {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="text-left">
          {head.map((item, index) => (
            <th className="bg-third p-2" key={index}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {line.map((item) => (
          <tr key={item.id} className="even:bg-[#4d4d4d] cursor-pointer">
            <td className="p-2">{item.id}</td>
            <td className="p-2">{item.name}</td>
            <td className="p-2">{item.count}</td>
            <td className="p-2">{item.price}€</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
