import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Nav = ({ icon, title }) => {
  return (
    <nav className='navbar' style={navstyle}>
      <h1>
        <i className={icon}> </i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/searchrandom'>Search Random</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Nav.defaultProps = {
  title: "Giphy Search",
  icon: "fab fa-fly fa-2x"
};
Nav.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
const navstyle = {
  background: "#ffd000",
  color: "#dc3545",
  padding: "30px"
};

export default Nav;
