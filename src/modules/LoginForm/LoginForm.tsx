import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/user/user.slice.ts";
import { AppDispath } from "../../store/store.ts";

export type ILoginForm = {
  login: string;
  password: string;
};

export default function LoginForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispath>();

  const signupHandler = async (e: FormEvent) => {
    e.preventDefault();
    const sendData: ILoginForm = {
      login,
      password,
    };
    await dispatch(loginUser(sendData));
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
