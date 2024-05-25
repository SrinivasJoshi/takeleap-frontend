import React, { useState } from "react";
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
import { toast } from 'react-toastify';

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
    if(activeStep===3){
        const response = await postMentorData(data);
        if(response.error){
            toast.error(response.error);
        }
        else{
            toast.success('Form submitted successfully !');
        }
    }
    // redirect to dashboard
    // loader 
  };

  // Watching fields to persist values
  const genderValue = watch("gender");
  const statusValue = watch("currentStatus");

  const stepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid width={"60%"} container spacing={2} justifyContent="">
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
                      <MenuItem value="Other">Other</MenuItem>
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
            <Divider />
            <Typography width={'100%'} sx={{mt:3,px:2}}>GRE Score</Typography>
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

            <Typography width={'100%'} sx={{mt:3,px:2}}>TOEFL Score</Typography>
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
          <Box sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}>
            <TextField
              {...register("underGradInstitution", {
                required: "Undergrad Institution is required",
              })}
              label="Undergrad Institution"
              error={!!errors.underGradInstitution}
              helperText={errors.underGradInstitution?.message}
            />
            <TextField
              {...register("underGradDegree", {
                required: "Undergrad Degree is required",
              })}
              label="Undergrad Degree"
              error={!!errors.underGradDegree}
              helperText={errors.underGradDegree?.message}
            />
            <TextField
              {...register("undergraduateGPA", {
                required: "Undergraduate GPA is required",
              })}
              label="Undergraduate GPA"
              type="number"
              error={!!errors.undergraduateGPA}
              helperText={errors.undergraduateGPA?.message}
            />

            <TextField
              {...register("postGraduateInstitution", {
                required: "Post Graduate Institution is required",
              })}
              label="Post Graduate Institution"
              error={!!errors.postGraduateInstitution}
              helperText={errors.postGraduateInstitution?.message}
            />
            <TextField
              {...register("postGraduateDegree", {
                required: "Post Graduate Degree is required",
              })}
              label="Post Graduate Degree"
              error={!!errors.postGraduateDegree}
              helperText={errors.postGraduateDegree?.message}
            />
            <TextField
              {...register("programName", {
                required: "Program Name is required",
              })}
              label="Program Name"
              error={!!errors.programName}
              helperText={errors.programName?.message}
            />
            <TextField
              {...register("universityName", {
                required: "University Name is required",
              })}
              label="University Name"
              error={!!errors.universityName}
              helperText={errors.universityName?.message}
            />
          </Box>
        );
      case 2:
        return (
          <Box>
            {publicationFields.map((field, index) => (
              <Box
                key={field.id}
                sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              >
                <TextField
                  {...register(`publications[${index}].title`)}
                  label="Publication Title"
                />
                <TextField
                  {...register(`publications[${index}].journalName`)}
                  label="Journal Name"
                />
                <TextField
                  {...register(`publications[${index}].link`)}
                  label="Link"
                />
                <Button onClick={() => removePublication(index)}>Remove</Button>
              </Box>
            ))}
            <Button
              onClick={() =>
                appendPublication({ title: "", journalName: "", link: "" })
              }
            >
              Add Publication
            </Button>
          </Box>
        );
      case 3:
        return (
          <Box>
            {experienceFields.map((field, index) => (
              <Box
                key={field.id}
                sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              >
                <TextField
                  {...register(`professionalExperiences[${index}].title`)}
                  label="Job Title"
                />
                <TextField
                  {...register(`professionalExperiences[${index}].startDate`)}
                  label="Start Date"
                  type="date"
                />
                <TextField
                  {...register(`professionalExperiences[${index}].endDate`)}
                  label="End Date"
                  type="date"
                />
                <TextField
                  {...register(`professionalExperiences[${index}].companyName`)}
                  label="Company Name"
                />
                <TextField
                  {...register(`professionalExperiences[${index}].description`)}
                  label="Description"
                />
                <Button onClick={() => removeExperience(index)}>Remove</Button>
              </Box>
            ))}
            <Button
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
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5" sx={{ textAlign: "center", width: "100%" }}>
        {" "}
        Mentor OnBoarding{" "}
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
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ m: 1 }}
            >
              Back
            </Button>
            {activeStep === 3 && <Button type="submit" sx={{ m: 1 }}>
                Submit
              </Button>}
            {activeStep !== 3 && (
              <Button variant="contained" onClick={handleNext} sx={{ m: 1 }}>
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
