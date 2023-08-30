import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import AppStore from "../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load Header Component with Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const Loginbutton = screen.getByRole("button", { name: "Login" });

  expect(Loginbutton).toBeInTheDocument();
});

it("Login should change to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const Loginbutton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(Loginbutton); //Fire Event used

    const Logoutbutton=screen.getByRole("button", { name: "Logout" });
  
    expect(Logoutbutton).toBeInTheDocument();
  });

it("Should load Header Component with Cart(0)", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText("Cart(0)");
  
    expect(cartItems).toBeInTheDocument();
  });

it("Should load Header Component with Cart(0)", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText(/Cart/); //Giving as regex
  
    expect(cartItems).toBeInTheDocument();
  });
