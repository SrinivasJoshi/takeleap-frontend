import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import MentorDashboard from "./routes/MentorDashboard";
import SignUpPage from "./routes/Signup";
import SignInPage from "./routes/Signin";
import HomePage from "./routes/HomePage";
import PersonalMentorForm from "./routes/PersonalMentorForm";
import ProfessionalMentorForm from "./routes/ProfessionalMentorForm";
import AcademicMentorForm from "./routes/AcademicMentorForm";
import MentorshipMentorForm from "./routes/MentorshipMentorForm";
import { useUser } from "@clerk/clerk-react";

function App() {
   const {user}=useUser();
   console.log(user)
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
          path: "personalMentorForm",
          element: <PersonalMentorForm />,
        },
        {
          path: "academicMentorForm",
          element: <AcademicMentorForm />,
        },
        {
          path: "professionalMentorForm",
          element: <ProfessionalMentorForm />,
        },
        {
          path: "mentorshipMentorForm",
          element: <MentorshipMentorForm />,
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
