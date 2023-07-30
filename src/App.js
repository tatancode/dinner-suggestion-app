import React, { useState } from 'react';
import styles from './App.css';

function App() {
  const [dish, setDish] = useState('Click the button to get a recipe suggestion!');

  const getSuggestion = async () => {
    const response = await fetch('https://dinner-suggestion-api.herokuapp.com/suggestion');
    const data = await response.text();

    setDish(data);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dinner Suggestions</h1>
      <p className={styles.dish}>{dish}</p>
      <button className={styles.button} onClick={getSuggestion}>Get a suggestion!</button>
    </div>
  );
}

export default App;
