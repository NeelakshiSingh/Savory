import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestMenu from "./Components/RestMenu";
import UserContext from "./utils/UserContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AppStore from "./utils/AppStore";
import Cart from "./Components/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //suppose authentication Code is written here

  useEffect(() => {
    //fetch the name and password from API and return it
    //Below is dummy data being returned for now to see working of Context
    const data = {
      loggedInUser: "Neelakshi",
    };
    setUserName(data.loggedInUser);
  }, []);

  return (
    // Tied below state Variable and UserContext together
    // and now we can update our UserContext from anywhere using this state Variable
    <Provider store={AppStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(() => import("./Components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={<h1 className="font-bold text-2xl p-4">Loading...</h1>}
          >
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
