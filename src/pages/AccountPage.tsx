// /pages/AccountPage.tsx
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/Slices/LoginSlice";
import { useNavigate } from "react-router";
import { RootState } from "../redux/store";

const AccountPage = () => {
  const { isLoggedIn, userData } = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    dispatch(userLogout());
    navigate("/");
  };

  if (!isLoggedIn) {
    navigate("/login");
    return null; // Return null to avoid rendering the component if the user is not logged in
  }

  const avatarUrl = `https://api.dicebear.com/8.x/initials/svg?seed=${userData.email}`;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-3xl shadow-lg">
        <div className="flex flex-col items-center gap-6">
          <img
            src={avatarUrl}
            alt="User  Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
          />
          <h1 className="text-2xl font-bold text-gray-800">Account Details</h1>
          <div className="flex flex-col items-center gap-2 text-center font-semibold text-lg text-gray-700">
            <p>Name: <span className="font-normal">{userData.name || "Unknown"}</span></p>
            <p>Email: <span className="font-normal">{userData.email || "Unknown"}</span></p>
            <p>Contact Number: <span className="font-normal">{userData.telNumber || "Unknown"}</span></p>
            <p>Password: <span className="font-normal">{userData.password ? "******" : "Not Set"}</span></p>
          </div>
          <button
            onClick={logoutHandler}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;