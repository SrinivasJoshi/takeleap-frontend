import { Typography,Box, Divider, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MentorDashboard() {
  const navigate = useNavigate();
  return <Box display='flex' flexDirection={'column'} alignItems={'center'} width={'100%'}> 
  <Typography variant="h6">
    Thanks for registering with us :) 
  </Typography>

  <Typography>
    Complete the rest of the forms to start mentoring
  </Typography>

  <Box display={'flex'} mt={5}>
      <Button onClick={()=> navigate('/academicMentorForm')}>
      Academics Info
      </Button>

    <Button onClick={()=> navigate('/professionalMentorForm')}>
      Professional Info
    </Button>

    <Button onClick={()=> navigate('/mentorshipMentorForm')}>
      Mentorship Info
    </Button>
  </Box>
    </Box>;
}
