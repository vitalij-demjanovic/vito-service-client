import { ChangeEvent } from "react";

interface SelectFunctionalityProps {
  selectedValue: string;
  onValueChange: (value: string) => void;
}

export default function SelectFunctionality({
  selectedValue,
  onValueChange,
}: SelectFunctionalityProps) {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Stav
      </label>
      <select
        value={selectedValue}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          onValueChange(e.target.value)
        }
        id="functionality"
        className="bg-gray-50 border border-gray-300 text-third text-sm rounded-[20px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="DEFAULT">Vybrať stav</option>
        <option value="OK">OK</option>
        <option value="Repas">Repas</option>
        <option value="Poškodené">Poškodené</option>
      </select>
    </>
  );
}
