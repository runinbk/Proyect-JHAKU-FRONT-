import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>React Node MySQL Express</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="form">Create User</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
