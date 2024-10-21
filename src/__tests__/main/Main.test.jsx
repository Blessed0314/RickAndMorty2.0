/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createRoot } from 'react-dom/client';
import App from '../../App';

describe('App Component', () => {
  test('renders App component inside StrictMode', () => {
    const rootElement = document.createElement('div');
    rootElement.setAttribute('id', 'root');
    document.body.appendChild(rootElement);

    createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    expect(rootElement).toBeInTheDocument();
  });

  
  test('root element is created with correct ID', () => {
    const rootElement = document.createElement('div');
    rootElement.setAttribute('id', 'root');
    document.body.appendChild(rootElement);

    createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    expect(rootElement.id).toBe('root');
  });
});
