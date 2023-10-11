import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  nickname: string;
  picture: string;
  sub: string;
  updated_at: string;
}

const Sidebar = () => {

  const { logout } = useAuth0();
  const navigate = useNavigate();

  const [user, setUsers] = useState<User | null>();
  useEffect(() => {
    let data = localStorage.getItem("user");
    if (data) {
      setUsers(JSON.parse(data));
    }
  }, []);

  const logoutUser = () => {
    localStorage.clear();
    logout();
    navigate('/')
  }

  return (
    <aside className="h-[100vh] w-[250px] bg-zinc-800 fixed">
      <div className="flex items-center gap-4 p-4 border-b border-zinc-600">
        <img className="w-9 h-9 rounded-full" src={user?.picture} alt="" />
        <p className="text-xs text-white font-semibold">
          {user?.name}
          <br />
          {user?.email}
        </p>
        <svg
          className="w-5 cursor-pointer"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384.971 384.971"
          stroke="#ffffff"
          transform="matrix(-1, 0, 0, 1, 0, 0)"
          onClick={() => logoutUser()}
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            
            <g>
              
              <g id="Sign_Out">                
                <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z"></path>
                <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>

      <ul className="text-white text-sm font-semibold space-y-3">
        <li className="px-4 py-2 cursor-pointer duration-100 hover:bg-zinc-900">
          <Link to={"/home"}>Users</Link>
        </li>
        <li className="px-4 py-2 cursor-pointer duration-100 hover:bg-zinc-900">
          <Link to={"/settings"}>Bot Settings</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
