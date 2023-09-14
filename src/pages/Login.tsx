import LoginForm from "../modules/LoginForm/LoginForm.tsx";
import Logo from "../ui/Logo.tsx";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo />
      <LoginForm />
    </div>
  );
}
