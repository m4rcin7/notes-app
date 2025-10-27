import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

export default function Login() {
  return (
    <>
      <NavBar />

      <div>
        <form onSubmit={() => {}}>
          <h4>Login</h4>
          <input type="text" placeholder="Email" className="input-box" />
          <button type="submit" className="btn-primary">
            Login
          </button>

          <p>
            Not registered yet? <Link to="/signup">Create an Account</Link>
          </p>
        </form>
      </div>
    </>
  );
}
