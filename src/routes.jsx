import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Sale from "./components/Sale";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "sale",
        element: <Sale />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
