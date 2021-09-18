import * as React from "react";
import { Link } from "gatsby";

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from "./layout.module.css"

const Layout = ({ noNav, pageTitle, children }) => {
  const showNav = () => {
    if (noNav === "false") {
      return (
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>Home</Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>About</Link>
            </li>
          </ul>
        </nav>
      );
    } else {
      return;
    }
  }

  return (
    <div className={container}> 
      <title>{pageTitle}</title>
      {showNav()}
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}

export default Layout;
