import React, { useState } from 'react';
import { useAppContext } from './AppContext';

const ProductDetail = ({ product }) => {
  const { handleCheckboxChange, handleAddComment } = useAppContext();
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddCommentClick = () => {
    handleAddComment(product.id, comment);
    setComment('');
  };

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div>
        <h3>Comments</h3>
        <ul>
          {product.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <input type="text" value={comment} onChange={handleCommentChange} />
        <button type="button" onClick={handleAddCommentClick}>
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
