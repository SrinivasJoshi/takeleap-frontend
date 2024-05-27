import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import MentorForm from "./routes/MentorForm";
import MentorDashboard from "./routes/MentorDashboard";
import SignUpPage from "./routes/Signup";
import SignInPage from "./routes/Signin";
import HomePage from "./routes/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "mentorForm",
          element: <MentorForm />,
        },
        {
          path: "mentorDashboard",
          element: <MentorDashboard />,
        },
      ],
    },
    {
      path: "signin",
      element: <SignInPage />,
    },
    {
      path: "signup",
      element: <SignUpPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
