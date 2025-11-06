import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import ProfileInfo from "../Cards/ProfileInfo";

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-900 text-white px-6 py-4 shadow-lg z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h2 className="text-lg font-semibold tracking-wide">Notes</h2>

        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            setSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />

        <ProfileInfo onLogout={onLogout} />
      </div>
    </nav>
  );
}
