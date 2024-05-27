import { SignIn } from "@clerk/clerk-react";
import { Box } from "@mui/material";

export default function SignInPage() {
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
