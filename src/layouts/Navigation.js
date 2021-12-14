import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";

const list = [
  { name: "start", path: "/", exact: true },
  { name: "produkty", path: "/products" },
  { name: "kontakt", path: "/contact" },
  { name: "panel admin", path: "/admin" },
]

const Navigation = () => {

  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
    </li>
  ))

  return (
    <nav className="main">
      <ul>
        {menu}

      </ul>
    </nav>
  );
}

export default Navigation;

// const Navigation = () => {
//   return ( 
//   <nav>
//     <ul>
//       <li>
//         <NavLink to="/">Satrt</NavLink>
//       </li>
//       <li>
//         <NavLink to="/products">Produkty</NavLink>
//       </li>
//       <li>
//         <NavLink to="/contact">Kontakt</NavLink>
//       </li>
//       <li>
//         <NavLink to="/admin">Panel adminisracyjny</NavLink>
//       </li>
//     </ul>
//   </nav>
//    );
// }
 
// export default Navigation;
