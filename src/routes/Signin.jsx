import { SignIn,useUser } from "@clerk/clerk-react";
import { Box } from "@mui/material";

export default function SignInPage() {
  const { user } = useUser();
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      height={"97vh"}
    >
      <SignIn path="/signin" fallbackRedirectUrl={"/mentorDashboard"} />
    </Box>
  );
}
