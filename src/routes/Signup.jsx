import { SignUp } from "@clerk/clerk-react";
import { Box } from "@mui/material";

export default function SignUpPage() {
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      height={"97vh"}
    >
      <SignUp path="/signup" forceRedirectUrl={"/mentorForm"} />
    </Box>
  );
}
