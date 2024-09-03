import React from "react";
import { useNavigate } from "react-router-dom";
import "../dashboard/home.css";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";
import icon from '../../assets/file1.png';
import BookCard from "../../component/bookCard";

function Home() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <div className="home-box">
        <div className="header">
          <div className="logo">
            <img src={icon} alt="Logo" className="logo-image" />
          </div>
          <div className="search">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="header-icons">
            <div className="icon-container" onClick={() => handleNavigation('/')}>
              <UserIcon className="icon" />
              <p>{username}</p>
            </div>
            <div className="icon-container" onClick={() => handleNavigation('/cart')}>
              <ShoppingCartIcon className="icon" />
              <p>Cart</p>
            </div>

          </div>
        </div>
        <div className="nav-header">
          <div className="icon-header-container">
            <div className="nav-item">
              <button>Fiction</button>
              <div className="dropdown-content">
                <button onClick={() => handleNavigation('/horror')}>Horror</button>
                <button onClick={() => handleNavigation('/novel')}>Novel</button>
                <button onClick={() => handleNavigation('/Mystery')}>Mystery/Crime</button>
                <button onClick={() => handleNavigation('/romance')}>Romance</button>
                <button onClick={() => handleNavigation('/science')}>Science Fiction</button>
                <button onClick={() => handleNavigation('/fantasy')}>Fantasy</button>
              </div>
            </div>
            <div className="nav-item">
              <button>Self Help</button>
              <div className="dropdown-content">
                <button onClick={() => handleNavigation('/sprituality')}>Spirituality</button>
                <button onClick={() => handleNavigation('/personalDevelopment')}>Personal Development</button>
              </div>
            </div>
            <div className="nav-item">
              <button>Religion</button>
              <div className="dropdown-content">
                <button onClick={() => handleNavigation('/hinduism')}>Hinduism</button>
                <button onClick={() => handleNavigation('/agnosticism')}>Agnosticism</button>
                <button onClick={() => handleNavigation('/athesim')}>Atheism</button>
                <button onClick={() => handleNavigation('/buddhism')}>Buddhism</button>
              </div>
            </div>
            <div className="nav-item">
              <button>Autobiography & Biography</button>
              <div className="dropdown-content">
                <button onClick={() => handleNavigation('/leaders')}>Leaders & Notable People</button>
                <button onClick={() => handleNavigation('/ethnic')}>Ethnic & Cultural</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <BookCard/>
        </div>
      </div>
    </div>
  );
}

export default Home;
