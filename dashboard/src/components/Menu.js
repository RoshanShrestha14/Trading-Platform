import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Menu = ({ user, logout }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  function handleSelectedMenu(index) {
    setSelectedMenu(index);
    console.log(index);
  }

  return (
    <div className="menu-container">
      <div>
        <h2>
          <i class="fa-solid fa-user"></i> &nbsp;
          {user}
        </h2>
      </div>

      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <p
                className={selectedMenu === 0 ? "menu selected" : "menu"}
                onClick={() => handleSelectedMenu(0)}
              >
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/orders"
            >
              <p
                className={selectedMenu === 1 ? "menu selected" : "menu"}
                onClick={() => handleSelectedMenu(1)}
              >
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/holdings"
            >
              <p
                className={selectedMenu === 2 ? "menu selected" : "menu"}
                onClick={() => handleSelectedMenu(2)}
              >
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/positions"
            >
              <p
                className={selectedMenu === 3 ? "menu selected" : "menu"}
                onClick={() => handleSelectedMenu(3)}
              >
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/funds"
            >
              <p
                className={selectedMenu === 4 ? "menu selected" : "menu"}
                onClick={() => handleSelectedMenu(4)}
              >
                Funds
              </p>
            </Link>
          </li>
          <li>
          
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ID</div>
          <button
            onClick={logout}
            style={{
              background:"#d626dcff",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#3d8dd8ff")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#d626dcff")}
          >
          logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
