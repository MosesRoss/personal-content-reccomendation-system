import React, { useState } from 'react';

function ProfilePage() {
  const [preferences, setPreferences] = useState({
    genre: 'Action',
    author: 'J.K. Rowling',
  });

  const updatePreferences = () => {
    setPreferences({
      genre: 'Drama',
      author: 'George Orwell',
    });
  };

  return (
    <div>
      <h2>Your Profile</h2>
      <p>Preferred Genre: {preferences.genre}</p>
      <p>Preferred Author: {preferences.author}</p>
      <button onClick={updatePreferences}>Update Preferences</button>
    </div>
  );
}

export default ProfilePage;
