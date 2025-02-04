import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import List from "../pages/List";
import Form_Page from "../pages/Form_Page";
import Details from "../pages/Details";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../components/ProtectedRoutes/ProtectedRoutes";
import WelcomePage from "../pages/Welcome";
import SnakeGame from "../pages/SnakeGame";
export const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
          { path: "/", element: <LoginPage /> },
          { path: "/login", element: <LoginPage /> },
          { path: "/snake", element: <SnakeGame /> },
          {
            path: "/welcome",
            element: (
              <ProtectedRoute>
                <WelcomePage />
              </ProtectedRoute>
            ),
          },
          { path: "/employees",
            element: (
              <ProtectedRoute>
                <List />
              </ProtectedRoute>
            ),
          },
          { path: "/form",
            element: (
              <ProtectedRoute>
                <Form_Page />
              </ProtectedRoute>
            ),
            },
          {
            path: "/details/:id",
            element: (
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );