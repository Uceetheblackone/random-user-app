import React, { useState, useEffect } from 'react';

const RandomUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomUser = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  if (loading) return <p>Loading user...</p>;

  return (
    <div style={styles.container}>
      {user && (
        <div style={styles.card}>
          <img src={user.picture.large} alt={user.name.first} style={styles.avatar} />
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.city}, {user.location.country}</p>
          <button onClick={fetchRandomUser} style={styles.button}>Get Another User</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    maxWidth: '300px',
    backgroundColor: '#f9f9f9'
  },
  avatar: {
    width: '100px',
    borderRadius: '50%'
  },
  button: {
    marginTop: '10px',
    padding: '8px 12px',
    cursor: 'pointer'
  }
};

export default RandomUser;