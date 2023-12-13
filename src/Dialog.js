import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './DialogAnimation.css';

const Dialog = ({ isOpen, onClose, children }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="dialog"
      unmountOnExit
    >
      <div className="dialog">
        <div className="dialog-content">
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Dialog;