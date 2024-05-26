import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import MentorForm from "./routes/MentorForm";
import MentorDashboard from "./routes/MentorDashboard";
import { ToastContainer } from "react-toastify";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
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
    // {
    //   path: "signin",
    //   element: <Signin />,
    // },
    // {
    //   path: "signup",
    //   element: <Signup />,
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
