import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
