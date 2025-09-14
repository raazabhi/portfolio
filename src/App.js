import React, { useState } from 'react';
import Portfolio from './Portfolio';
import './styles.css';

function App() {
  // This 'state' hook controls which theme is active. Default is 'desktop'.
  const [theme, setTheme] = useState('desktop');

  // This function toggles the theme between 'desktop' and 'mobile'
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'desktop' ? 'mobile' : 'desktop'));
  };

  return (
    // The className of this container changes based on the theme state
    <div className={`app-container ${theme}-style`}>
      
      {/* This button switches the theme */}
      <div className="style-switcher">
        <button onClick={toggleTheme}>
          Switch to {theme === 'desktop' ? 'Mobile' : 'Desktop'} Style
        </button>
      </div>

      <Portfolio />
    </div>
  );
}

export default App;