import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Main/Main";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Game from "./Components/Game/Game";
import Blog from "./Components/Blog/Blog";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/game",
        loader: async () => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Game></Game>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
