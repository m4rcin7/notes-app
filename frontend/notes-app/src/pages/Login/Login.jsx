import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import PasswordInput from "../../components/Input/PasswordInput";
import { useState } from "react";
import { validateEmail } from "../../utils/helper";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
  };

  return (
    <>
      <NavBar />

      <div className="flex justify-center items-center min-h-screen px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-neutral-900 p-8 rounded-2xl shadow-lg text-center"
        >
          <h4 className="text-white text-xl font-semibold mb-6 tracking-wide">
            Login
          </h4>

          <input
            type="text"
            placeholder="Email"
            className="w-full mb-4 py-3 px-4 rounded-xl bg-neutral-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm pb-1">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:opacity-90 hover:-translate-y-0.5 transition"
          >
            Login
          </button>

          <p className="text-gray-400 text-sm mt-4">
            Not registered yet?{" "}
            <Link
              to="/signup"
              className="text-cyan-400 hover:text-cyan-300 transition"
            >
              Create an Account
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
