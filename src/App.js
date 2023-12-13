import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product'
import styles from './App.module.css'; 
import Dialog from './Dialog'; 
import './DialogAnimation.css';
import { Button } from 'antd';
import LoginModal from './LoginModal';

const App = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);/////////////////////////////////////////////////////
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);/////////////////////////////////////////////////////

  const handleOpenDialog = () => {/////////////////////////////////////////////////////
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {/////////////////////////////////////////////////////
    setDialogOpen(false);
  };

  const handleLogin = (values) => {/////////////////////////////////////////////////////

    console.log('Logged in with:', values);
    setLoginModalVisible(false);
  };
  return (
    <Router>
    <div className={styles.App}>
      <Header />
      <div>
      <button onClick={handleOpenDialog}>Open Dialog</button>
      <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog}>
       ara
        <h2>DIALOG CONTENT</h2>
      </Dialog>
    </div>
    <div>
      <Button type="primary" onClick={() => setLoginModalVisible(true)}>
        LOGIN
      </Button>
      <LoginModal
        visible={isLoginModalVisible}
        onCancel={() => setLoginModalVisible(false)}
        onLogin={handleLogin}
      />
    </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
