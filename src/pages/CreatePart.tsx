import CreatePartForm from "../modules/CreatePartForm/CreatePartForm.tsx";

export default function CreatePart() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl mb-8">Vytvoriť položku</h1>
      <CreatePartForm />
    </div>
  );
}
