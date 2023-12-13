import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <div className={styles.header}>
        <Link className="btn-light"  to="/">Home</Link>
        <Link  className="btn-light"  to="/about">About</Link>
        <Link className="btn-light"  to="/product">Product</Link>
      </div>
    </header>
  );
}

export default Header;
