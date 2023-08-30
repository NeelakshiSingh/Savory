import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockRestListData.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load Body component with submit button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("restCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("restCard");

  expect(cardsAfterSearch.length).toBe(2);
});

it("should load Body component with Top Rated button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("restCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const TopRatedRestBtn = screen.getByRole("button", { name: "Top rated restaurant" });

  fireEvent.click(TopRatedRestBtn);

  const cardsAfterSearch = screen.getAllByTestId("restCard");

  expect(cardsAfterSearch.length).toBe(17);

});
