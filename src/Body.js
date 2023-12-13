import React from 'react';
import ProductDetail from './ProductDetail';
import { useAppContext } from './AppContext';
import styles from './Body.module.css';

function Body() {
  const { items } = useAppContext();

  return (
    <div className={styles.bodyy}>
      <div className={styles.bodydiv}>
        <h2>List of Products</h2>
        {items.map((item) => (
          <ProductDetail key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Body;
