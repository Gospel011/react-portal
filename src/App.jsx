import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilesPage from "./pages/ProfilesPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./styles/index.css";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
    children: [
      {
        path: "/profiles/:profileId",
        element: <ProfilePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
