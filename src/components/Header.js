import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <img 
        src= "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="Logo" 
        style={styles.logo}
      />
      <h1 style={styles.title}>Random User Generator</h1>
    </header>
  );
};
const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white'
  },
  logo: {
    width: '40px',
    marginRight: '10px'
  },
  title: {
    fontSize: '1.5rem',
  }
};

export default Header;
