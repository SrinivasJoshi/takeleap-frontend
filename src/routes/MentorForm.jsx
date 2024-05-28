import React, { useState, useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

import {
  Button,
  TextField,
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Divider,
} from "@mui/material";
import { postMentorData } from "../data/postData";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';

function MentorForm() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const {
    fields: publicationFields,
    append: appendPublication,
    remove: removePublication,
  } = useFieldArray({
    control,
    name: "publications",
  });

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "professionalExperiences",
  });

  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    "Personal Information",
    "Academics",
    "Publications",
    "Professional Experiences",
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = async (data) => {
    if (activeStep === 3) {
      const response = await postMentorData(data);
      if (response.error) {
        toast.error(response.error);
      } else {
        toast.success("Form submitted successfully !");
      }
    }
    // redirect to dashboard
    // loader
  };

  // Watching fields to persist values
  const genderValue = watch("gender");
  const statusValue = watch("currentStatus");

  useEffect(() => {
    if (publicationFields.length === 0) {
      appendPublication({ title: "", journalName: "", link: "" });
    }

    // Append an empty professional experience if the experience list is empty
    if (experienceFields.length === 0) {
      appendExperience({
        title: "",
        startDate: "",
        endDate: "",
        companyName: "",
        description: "",
      });
    }
  }, []);

  const stepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid
            container
            sx={{
              width: { xs: "70%", lg: "70%" },
            }}
            spacing={{ xs: 4, sm: 2 }}
          >
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                {...register("name", { required: "Name is required" })}
                label="Name"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.gender}>
                <InputLabel>Gender</InputLabel>
                <Controller
                  name="gender"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Gender is required" }}
                  render={({ field }) => (
                    <Select {...field} label="Gender">
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Prefer Not to Say">
                        Prefer Not to Say
                      </MenuItem>
                    </Select>
                  )}
                />
                {errors.gender && (
                  <Typography color="error">{errors.gender.message}</Typography>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                {...register("currentLocation", {
                  required: "Current Location is required",
                })}
                label="Current Location"
                error={!!errors.currentLocation}
                helperText={errors.currentLocation?.message}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.currentStatus}>
                <InputLabel>Current Status</InputLabel>
                <Controller
                  name="currentStatus"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Current Status is required" }}
                  render={({ field }) => (
                    <Select {...field} label="Current Status">
                      <MenuItem value="Working">Working</MenuItem>
                      <MenuItem value="Student">Student</MenuItem>
                    </Select>
                  )}
                />
                {errors.currentStatus && (
                  <Typography color="error">
                    {errors.currentStatus.message}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                {...register("classRank", {
                  required: "Class Rank is required",
                })}
                type="number"
                label="Class Rank"
                error={!!errors.classRank}
                helperText={errors.classRank?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                {...register("contactNumber", {
                  required: "Whatsapp Number is required",
                })}
                label="Whatsapp Number"
                placeholder="Please add country code, +91"
                error={!!errors.contactNumber}
                helperText={errors.contactNumber?.message}
              />
            </Grid>

            <Divider />
            <Grid item xs={12}>
              <Typography sx={{ mt: 5, fontWeight: "medium" }}>
                GRE Score
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                {...register("greQ", {
                  required: "GRE Q is required",
                })}
                type="number"
                label="Quantative"
                error={!!errors.greQ}
                helperText={errors.greQ?.message}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                {...register("greV", {
                  required: "GRE V is required",
                })}
                type="number"
                label="Verbal"
                error={!!errors.greV}
                helperText={errors.greV?.message}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                {...register("greAwa", {
                  required: "GRE AWA is required",
                })}
                type="number"
                label="AWA"
                error={!!errors.greAwa}
                helperText={errors.greAwa?.message}
              />
            </Grid>
            <Divider />
            <Grid item xs={12}>
              <Typography width={"100%"} sx={{ mt: 5, fontWeight: "medium" }}>
                TOEFL Score
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                {...register("toeflSpeaking", {
                  required: "TOEFL Speaking is required",
                })}
                type="number"
                label="Speaking"
                error={!!errors.toeflSpeaking}
                helperText={errors.toeflSpeaking?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                {...register("toeflListening", {
                  required: "TOEFL Listening is required",
                })}
                type="number"
                label="Listening"
                error={!!errors.toeflListening}
                helperText={errors.toeflListening?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                {...register("toeflReading", {
                  required: "TOEFL Reading is required",
                })}
                type="number"
                label="Reading"
                error={!!errors.toeflReading}
                helperText={errors.toeflReading?.message}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                {...register("toeflWriting", {
                  required: "TOEFL Writing is required",
                })}
                type="number"
                label="Writing"
                error={!!errors.toeflWriting}
                helperText={errors.toeflWriting?.message}
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid
            container
            sx={{
              width: { sm: "60%", lg: "70%" },
            }}
            spacing={{ xs: 2, sm: 2 }}
          >
            <Grid item xs={12}>
              <Typography sx={{ mt: 5, fontWeight: "medium" }}>
                Undergraduate Information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("underGradInstitution", {
                  required: "Undergrad Institution is required",
                })}
                label="Undergrad Institution"
                error={!!errors.underGradInstitution}
                helperText={errors.underGradInstitution?.message}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("underGradDegree", {
                  required: "Undergrad Degree is required",
                })}
                label="Undergrad Degree"
                error={!!errors.underGradDegree}
                helperText={errors.underGradDegree?.message}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("undergraduateGPA", {
                  required: "Undergraduate GPA is required",
                })}
                type="number"
                label="Undergraduate GPA"
                error={!!errors.undergraduateGPA}
                helperText={errors.undergraduateGPA?.message}
                fullWidth
                placeholder="GPA out of 4"
                inputProps={{ step: 0.1, min: 0.1, max: 4.0 }}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography sx={{ mt: 5, fontWeight: "medium" }}>
                Postgraduate Information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("postGraduateInstitution", {
                  required: "Post Graduate Institution is required",
                })}
                label="Post Graduate Institution"
                error={!!errors.postGraduateInstitution}
                helperText={errors.postGraduateInstitution?.message}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("postGraduateDegree", {
                  required: "Post Graduate Degree is required",
                })}
                label="Post Graduate Degree"
                error={!!errors.postGraduateDegree}
                helperText={errors.postGraduateDegree?.message}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("programName", {
                  required: "Program Name is required",
                })}
                label="Program Name"
                error={!!errors.programName}
                helperText={errors.programName?.message}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                {...register("universityName", {
                  required: "University Name is required",
                })}
                label="University Name"
                error={!!errors.universityName}
                helperText={errors.universityName?.message}
                fullWidth
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid
            container
            alignItems="center"
            spacing={{ xs: 4, sm: 2 }}
            sx={{
              width: { sm: "60%", lg: "70%" },
            }}
          >
            {publicationFields.map((field, index) => (
              <Grid item xs={12} key={field.id}  border={1}
              borderColor={"#dddddd"}
              borderRadius={2}
              pb={2}
              pr={2}>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={11} sm={5} md={3}>
                    <TextField
                      fullWidth
                      {...register(`publications[${index}].title`)}
                      label="Publication Title"
                    />
                  </Grid>
                  <Grid item xs={11} sm={5} md={3}>
                    <TextField
                      fullWidth
                      {...register(`publications[${index}].journalName`)}
                      label="Journal Name"
                    />
                  </Grid>
                  <Grid item xs={11} sm={5} md={3}>
                    <TextField
                      fullWidth
                      {...register(`publications[${index}].link`)}
                      label="DOI"
                    />
                  </Grid>

                  <Grid item xs={11} sm={5} md={3}>
                    <TextField
                      fullWidth
                      {...register(`publications[${index}].year`)}
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      label="Year"
                    />
                  </Grid>
                  
                </Grid>
                <Grid item xs={12} sm={12} md={1} mt={2}>
                    <Button
                      startIcon={<DeleteIcon />}
                      variant="contained"
                      aria-label="delete"
                      onClick={() => removePublication(index)}
                    >
                      Remove
                  </Button>
                </Grid>
              </Grid>
            ))}
            <Grid
              item
              xs={12}
              sx={{ mt: 5 }}
              display="flex"
              justifyContent="center"
            >
              <Button
                startIcon={<AddIcon />}
                variant="contained"
                color="primary"
                onClick={() =>
                  appendPublication({ title: "", journalName: "", link: "" })
                }
              >
                Add Publication
              </Button>
            </Grid>
          </Grid>
        );

      case 3:
        return (
          <Grid
            container
            alignItems="center"
            // spacing={{ xs: 4, sm: 1 }}
            sx={{
              width: { sm: "60%", lg: "80%" },
            }}
          >
            {experienceFields.map((field, index) => (
              <Grid item xs={12} key={field.id}>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  border={1}
                  borderColor={"#dddddd"}
                  borderRadius={2}
                  pb={2}
                  pr={2}
                  my={1}
                >
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      {...register(`professionalExperiences[${index}].title`)}
                      label="Job Title"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      {...register(
                        `professionalExperiences[${index}].companyName`,
                      )}
                      label="Company Name"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3} md={6}>
                    <TextField
                      fullWidth
                      {...register(
                        `professionalExperiences[${index}].startDate`,
                      )}
                      label="Start Date"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3} md={6}>
                    <TextField
                      fullWidth
                      {...register(`professionalExperiences[${index}].endDate`)}
                      label="End Date(Leave empty if currently working)"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={12}>
                    <TextField
                      fullWidth
                      {...register(
                        `professionalExperiences[${index}].description`,
                      )}
                      label="Description"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      {...register(
                        `professionalExperiences[${index}].awardsRecognition`,
                      )}
                      label="Awards / Recognition"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      {...register(
                        `professionalExperiences[${index}].numberOfPromotions`,
                      )}
                      label="Number of Promotions"
                    />
                  </Grid>
                  <Grid item xs={12} sm={1} md={1}>
                    <Button
                    startIcon={<DeleteIcon />}
                    variant="contained"
                      aria-label="delete"
                      onClick={() => removeExperience(index)}
                    >
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ))}
            <Grid
              item
              xs={12}
              sx={{ mt: 5 }}
              display="flex"
              justifyContent="center"
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() =>
                  appendExperience({
                    title: "",
                    startDate: "",
                    endDate: "",
                    companyName: "",
                    description: "",
                  })
                }
              >
                Add Experience
              </Button>
            </Grid>
          </Grid>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", width: "100%", fontWeight: "medium" }}
      >
        Mentor Onboarding
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mt: 3 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            mt: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {stepContent(activeStep)}
          <Box sx={{ display: "flex", mt: 3 }}>
            <Button
              variant="outlined"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ m: 1 }}
            >
              Back
            </Button>
            {activeStep === 3 && (
              <Button
                type="submit"
                variant="contained"
                sx={{
                  m: 1,
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#fff", // Keep background color white on hover
                    borderColor: "#673AB7", // Keep border color
                    color: "#673AB7", // Keep text color
                  },
                }}
              >
                Submit
              </Button>
            )}
            {activeStep !== 3 && (
              <Button variant="outlined" onClick={handleNext} sx={{ m: 1 }}>
                Next
              </Button>
            )}
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default MentorForm;
