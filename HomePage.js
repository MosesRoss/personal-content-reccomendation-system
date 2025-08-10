import React, { useState } from 'react';

function HomePage() {
  const [recommendations, setRecommendations] = useState([
    'Movie 1', 'Movie 2', 'Book 1', 'Article 1'
  ]);

  const fetchRecommendations = () => {
    // Simulate fetching recommendations
    setRecommendations(['Movie 3', 'Book 2', 'Article 2']);
  };

  return (
    <div>
      <h2>Recommended for You</h2>
      <button onClick={fetchRecommendations}>Fetch New Recommendations</button>
      <ul>
        {recommendations.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
