// src/__tests__/App.test.jsx
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import FetchCharacters from "../services/characters-service";

// Mock de FetchCharacters
jest.mock("../services/characters-service", () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue({
    results: [
      {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        location: { name: "Earth" },
        image: "url",
      },
    ],
    info: { next: null, prev: null },
  }),
}));

test("renders Navbar and Characters components", async () => {
  render(<App />);

  // Verificar que el Navbar se renderiza
  expect(screen.getByText("Rick and Morty App V2.0")).toBeInTheDocument();

  // Esperar a que los personajes se carguen y verificar que se renderiza un personaje
  await waitFor(() =>
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument()
  );
});
