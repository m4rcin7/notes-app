import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-900 text-white px-6 py-4 shadow-lg z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold tracking-wide">Notes</h2>

        <ProfileInfo onLogout={onLogout} />
      </div>
    </nav>
  );
}
