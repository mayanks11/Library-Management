//import "../App.css";
import "./nav.css";
export default function Nav(User){
    return(
        <div className = "nav-bar">
            <span className="logo">Library App</span>
            <ul className = "list">
                <li className="listItem">
                    <img stc ="" alt ="" className="avatar"/>
                </li>
                <li className="listItem">John Doe</li>
                <li className="listItem">Logout</li>
            </ul>
        </div>
   )
}