/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { createRoot } from 'react-dom/client';
import { act } from '@testing-library/react';
import App from '../../App';

describe('Main Component', () => {
  let rootElement;

  beforeEach(() => {
    rootElement = document.createElement('div');
    rootElement.id = 'root'; // Configurar el id del elemento raíz
    document.body.appendChild(rootElement);
  });

  afterEach(() => {
    document.body.removeChild(rootElement);
    rootElement = null;
  });

  test('renders App component', () => {
    act(() => {
      createRoot(rootElement).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    });

    expect(rootElement.id).toBe('root');
  });
});
