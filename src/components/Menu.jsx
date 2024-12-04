import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Rightmenu1 from "../assets/logo/rightMenu1.svg";
import Rightmenu2 from "../assets/logo/rightMenu2.svg";

const Menu = () => (
  <div className="menu d-flex justify-content-between pe-3 ps-5 color">
    <div className="menu-left d-flex align-items-center">
      <h1 className="text-white">TV Shows</h1>
      <DropdownButton
        as={ButtonGroup}
        id="dropdown-variants-dark"
        variant="dark"
        title="Genres"
        style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white'
          }}
        className="color border mx-5 rounded-0"
      >
        <Dropdown.Item eventKey="1">Comedy</Dropdown.Item>
        <Dropdown.Item eventKey="2">Drama</Dropdown.Item>
        <Dropdown.Item eventKey="3">Thriller</Dropdown.Item>
      </DropdownButton>
    </div>
    <div className="menu-right d-flex align-items-center">
      <img
        src={Rightmenu1}
        width="40"
        height="18"
        className="d-inline-block align-top"
        alt="Right Menu 1"
      />
      <img
        src={Rightmenu2}
        width="40"
        height="18"
        className="d-inline-block align-top ms-3"
        alt="Right Menu 2"
      />
    </div>
  </div>
);

export default Menu;
