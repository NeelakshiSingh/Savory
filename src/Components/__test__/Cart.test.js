import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA_NAME from "../mocks/mockRestMenu.json";
import Header from "../Header";
import Cart from "../Cart";
import RestMenu from "../RestMenu";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("Should load RestMenu with added Category Name - Burger and Wrap. (15) and 15 List of Items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
          <RestMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Burger and Wrap. (15)");

  expect(accordianHeader).toBeInTheDocument();

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(15);
});

it("Should have addBtn for each List of Items under Category Name - Burger and Wrap. (15)", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
          <RestMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  fireEvent.click(screen.getByText("Burger and Wrap. (15)"));

  const addBtn = screen.getAllByRole("button", { name: "+" });

  expect(addBtn.length).toBe(15);
});

it("Should add Two items to cart on click of two foodItems which makes foodItems count 17 and again on click of Clear Cart,foodItems should become 15", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
          <RestMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  fireEvent.click(screen.getByText("Burger and Wrap. (15)"));

  const addBtn = screen.getAllByRole("button", { name: "+" });

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart(1)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart(2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(17);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(15);
});

it("Should have 15 foodItems and display Msg - Cart is empty.Please add items to cart!🍔", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
          <RestMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  fireEvent.click(screen.getByText("Burger and Wrap. (15)"));

  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  expect(
    screen.getByText("Cart is empty.Please add items to cart!🍔")
  ).toBeInTheDocument();
});
