// Loader.jsx

import React, { useState, useEffect } from 'react';
import './Loader.css';
import loaderGif from '../../img/pulse-loader-2.gif';

const Loader = ({ delay = 2000, children }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return showLoader ? (
    <div className="loader-container">
      <img className="loader" src={loaderGif} alt="Loading..." />
    </div>
  ) : (
    children
  );
};

export default Loader;
