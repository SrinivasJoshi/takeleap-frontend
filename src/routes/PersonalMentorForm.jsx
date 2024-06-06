import React, { useState, useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

import {
  Button,
  TextField,
  Box,
  Typography,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Divider,
  IconButton,
  Tooltip,
  LinearProgress,
  CircularProgress,
  Modal
} from "@mui/material";
import { postMentorPersonalData } from "../data/postData";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InfoIcon from "@mui/icons-material/Info";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 110,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

export default function PersonalMentorForm() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { userId } = useAuth();
  console.log(userId);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    fields: admitFields,
    append: appendAdmits,
    remove: removeAdmits,
  } = useFieldArray({
    control,
    name: "admits",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) { // Limit file size to 5MB
        setSelectedFile(file);
        simulateUploadProgress();
    } else {
      setSelectedFile(null);
      alert('File size should be 3MB or less');
    }
  };

  const simulateUploadProgress = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 200);
  };

  const onSubmit = async (data) => {
    setLoading(true);
  
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'admits') {
        formData.append(key, JSON.stringify(data[key]));
      }
      else{
        formData.append(key, data[key]);
      }
    });
    formData.append('id',userId);

    if(selectedFile){
        formData.append('file', selectedFile);
    }
    else{
        toast.error('File not selected!');
        return;
    }
  
    try {
      const response = await postMentorPersonalData(formData);
      if (response.error) {
        toast.error(response.error);
      } else {
        toast.success("Form submitted successfully !");
        navigate("/mentorDashboard");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (admitFields.length === 0) {
      appendAdmits({ programName: "", universityName: "" });
    }
  }, []);

  return (
    <Box mt={4} display={'flex'} justifyContent={'center'} width={'100%'}>
    <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex',justifyContent:'center'}} >
      <Grid
        container
        sx={{
          width: { sm: "80%", lg: "50%" },
        }}
        spacing={{ xs: 4 }}
      >
        <Grid item xs={12} sm={12}>
          <TextField
          variant={'standard'}
            fullWidth
            {...register("name", { required: "Name is required" })}
            label="Name"
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid item xs={12} sm={12} alignItems={"center"}>
          <TextField
            sx={{ width: "93%" }}
            variant={'standard'}
            {...register("contactNumber", {
              required: "Whatsapp Number is required",
            })}
            label="Whatsapp Number"
            placeholder="Please add country code, +91"
            error={!!errors.contactNumber}
            helperText={errors.contactNumber?.message}
          />

          <Tooltip
            title="Your contact number is solely for mentee access. It will not be used for sales calls or unsolicited communications."
            sx={{ mt: 1 }}
          >
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            {...register("greScore", {
              required: "GRE Score is required",
            })}
            variant={'standard'}
            type="number"
            label="GRE Score"
            error={!!errors.greScore}
            helperText={errors.greScore?.message}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            variant={'standard'}
            {...register("toeflScore", {
              required: "Toefl Score is required",
            })}
            type="number"
            label="TOEFL Score"
            error={!!errors.toeflScore}
            helperText={errors.toeflScore?.message}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth error={!!errors.gender}>
            <InputLabel>Gender</InputLabel>
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              rules={{ required: "Gender is required" }}
              render={({ field }) => (
                <Select variant={'standard'} {...field} label="Gender">
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

        <Grid item xs={12} sm={12}>
          <FormControl fullWidth error={!!errors.currentLocation}>
            <InputLabel>Current Location</InputLabel>
            <Controller
              name="currentLocation"
              control={control}
              defaultValue=""
              rules={{ required: "currentLocation is required" }}
              render={({ field }) => (
                <Select variant={'standard'} {...field} label="currentLocation">
                  <MenuItem value="US">US</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="Europe">Europe</MenuItem>
                  <MenuItem value="Australia">Australia</MenuItem>
                  <MenuItem value="New Zealand">New Zealand</MenuItem>
                  <MenuItem value="UK">UK</MenuItem>
                  <MenuItem value="Netherlands">Netherlands</MenuItem>
                </Select>
              )}
            />
            {errors.currentLocation && (
              <Typography color="error">
                {errors.currentLocation.message}
              </Typography>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12}>
          <FormControl fullWidth error={!!errors.currentStatus}>
            <InputLabel>Current Status</InputLabel>
            <Controller
              name="currentStatus"
              control={control}
              defaultValue=""
              rules={{ required: "Current Status is required" }}
              render={({ field }) => (
                <Select variant={'standard'} {...field} label="Current Status">
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

        <Grid item xs={12} sm={12}>
          <Button
            component="label"
            role={undefined}
            fullWidth
            variant={'outlined'}
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            error={!!errors.avatar}
          >
            Upload your photo
            <VisuallyHiddenInput
              type="file"
              accept="image/*"
              
              onChange={handleFileChange}
            />
          </Button>
          {errors.avatar && (
            <Typography variant="body2" color="error">
              {errors.avatar.message}
            </Typography>
          )}
          {selectedFile && (
            <Box mt={1}>
              <Typography variant="body2">{selectedFile.name}</Typography>
              <LinearProgress variant="determinate" value={uploadProgress} />
              <Typography variant="body2">{`${uploadProgress}%`}</Typography>
            </Box>
          )}
        </Grid>

        <Divider />
        <Grid item xs={12} sm={12}>
          <Typography sx={{ my: 3, fontWeight: "medium" }}>
            Admits Received
          </Typography>
        </Grid>
        <Box ml={3}>
          {admitFields.map((field, index) => (
            <Grid item xs={12} key={field.id} my={1}>
              <Grid
                width={"750px"}
                container
                spacing={2}
                alignItems="center"
                justifyContent="evenly"
              >
                <Grid item xs={11} sm={5} md={5.5}>
                  <TextField
                    fullWidth
                    {...register(`admits[${index}].programName`)}
                    label="Program Name"
                  />
                </Grid>

                <Grid item xs={11} sm={5} md={5.5}>
                  <TextField
                    fullWidth
                    {...register(`admits[${index}].universityName`)}
                    label="University Name"
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={1}>
                  <IconButton onClick={() => removeAdmits(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Box>
        <Grid item xs={12}>
          <Button
            startIcon={<AddIcon />}
            color="primary"
            onClick={() =>
              appendAdmits({ programName: "", universityName: "" })
            }
          >
            Add Admit
          </Button>
        </Grid>

        <Grid item xs={12} sx={{ mt: 3 }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>

      <Modal
        open={loading}
      >
        <Box sx={modalStyle}>
        <CircularProgress />
        </Box>
      </Modal>
    </form>
    </Box>
  );
}
