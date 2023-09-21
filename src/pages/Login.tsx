import LoginForm from "../modules/LoginForm/LoginForm.tsx";
import Logo from "../ui/Logo.tsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store.ts";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();
  const { jwt } = useSelector((s: RootState) => s.user);

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo appearance={"big"} />
      <LoginForm />
    </div>
  );
}
