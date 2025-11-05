import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!name) {
      setError("Please enter the password");
      return;
    }

    setError("");
  };

  return (
    <>
      <NavBar />

      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7">SignUp</h4>

            <input
              type="text"
              placeholder="Name"
              className="w-full mb-4 py-3 px-4 rounded-xl bg-neutral-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
              className="w-full py-3 mt-2 rounded-xl bg-gradient-to-red from-cyan-400 to-blue-500 text-black font-semibold hover:opacity-90 hover:-translate-y-0.5 transition"
            >
              SignUp
            </button>

            <p className="text-gray-400 text-sm mt-4">
              Alredy have an account?{" "}
              <Link
                to="/login"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
