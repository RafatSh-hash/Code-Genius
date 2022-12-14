import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Main/Main";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Game from "./Components/Game/Game";
import Blog from "./Components/Blog/Blog";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Ques from "./Components/Ques/Ques";
import Chart from "./Components/Chart/Chart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
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
      {
        path: "/chart",
        loader: async ({ params }) => {
          return fetch("https://openapi.programming-hero.com/api/quiz");
        },
        element: <Chart></Chart>,
      },
      {
        path: "game/topic/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
        element: <Ques></Ques>,
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
