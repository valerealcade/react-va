import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

export const Home = (props) => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>valere alcade</code>
        </p>
        <a
          className="App-link"
          href="http://valere.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          valere.xyz
        </a>
        <a
          className="App-link"
          href="http://valere.xyz/photo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          photos
        </a>
        <a
          className="App-link"
          href="https://fr.linkedin.com/in/val%C3%A8re-alcade-78657b111"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
)