import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import LevelPage from "../src/pages/LevelPage";
import '@testing-library/jest-dom';

describe("LevelPage", () => {
  it("renders not found message for invalid params", () => {
    render(
      <MemoryRouter initialEntries={["/invalid/wrong"]}>
        <Routes>
          <Route path="/:level/:category" element={<LevelPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
