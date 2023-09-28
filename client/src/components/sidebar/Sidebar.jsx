import "./sidebar.css"
import { useState, useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => { 
      const res = await axios.get("http://localhost:5000/api/categories")
      setCats(res.data)
    }
    getCats()
    
  }, [])
  

  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
              src="/assets/blogSidebar.png" 
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Pariatur qui odio libero, error reiciendis harum et dolor autem!
            </p>
        </div>
        <div className="sideBarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              { cats.map((c) => (
                <Link to={`/?cat=${c.name}`} className="link" key={c._id}>
                  <li className="sidebarListItem">{c.name}</li>
                </Link>
                
              ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
              <i className="sidebarIcon fa-brands fa-square-facebook"></i>
              <i className="sidebarIcon fa-brands fa-square-twitter"></i>
              <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
              <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
