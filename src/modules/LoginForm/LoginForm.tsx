import { FormEvent, useState } from "react";

export default function LoginForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = async (e: FormEvent) => {
    e.preventDefault();
    console.log({
      name: login,
      password: password,
    });
  };

  return (
    <form className="flex flex-col" onSubmit={signupHandler}>
      <input
        type="text"
        name="login"
        placeholder="Meno"
        className="text-third placeholder:text-third p-2 rounded-[20px] min-w-[300px] mb-4"
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Heslo"
        className="text-third placeholder:text-third p-2 rounded-[20px] min-w-[300px] mb-4"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-primary p-2 rounded-[20px] min-w-[300px] cursor-pointer">
        Prihlásiť sa
      </button>
    </form>
  );
}
