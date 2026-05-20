import React, { useState } from 'react';
import styles from '@/styles/components/SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput('');
    }
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Search for a city..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.searchBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
      </div>
    </form>
  );
}
