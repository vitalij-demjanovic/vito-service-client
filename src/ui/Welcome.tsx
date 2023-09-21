export default function Welcome({ name }: { name: string }) {
  return (
    <>
      <h1 className="text-xl hidden md:block ml-5">Dobrý deň {name}</h1>
    </>
  );
}
