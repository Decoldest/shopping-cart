import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes.jsx";

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <div>gelher</div>
      </RouterProvider>
    </>
  );
}

export default App;
