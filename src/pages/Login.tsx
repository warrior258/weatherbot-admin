import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, loginWithPopup } = useAuth0();
  const navigate = useNavigate();

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
    navigate('/home')
  }

  return (
    <main className="h-[100vh] grid place-items-center">
      <div className="space-y-4">
        <h1 className="text-white text-4xl text-center">Admin Panel</h1>
        <p className="text-white text-xs text-center">
          Login to Manage your bot
        </p>
        <button
          className="bg-zinc-800 px-20 py-2.5 text-xs font-semibold active:scale-95 duration-100 text-white shadow-lg flex items-center gap-4"
          onClick={() => loginWithPopup()}
        >
          <img
            src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
            alt=""
            width={"18px"}
          />
          Log with Google
        </button>
      </div>
    </main>
  );
};

export default Login;
