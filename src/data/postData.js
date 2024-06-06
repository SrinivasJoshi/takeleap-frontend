const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const postMentorPersonalData = async (formData) => {
  try {
    const _response = await fetch(`${SERVER_URL}/addMentorPersonalData`, {
      method: "POST",
      body: formData,
    });
    const response = await _response.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postMentorProfessionalData = async (data) => {
  try {
    const _response = await fetch(`${SERVER_URL}/addMentorProfessionalData`, {
      method: "POST",
      body: data,
    });
    const response = await _response.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postMentorAcademicData = async (data) => {
  try {
    const _response = await fetch(`${SERVER_URL}/addMentorAcademicData`, {
      method: "POST",
      body: data,
    });
    const response = await _response.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postMentorMentorshipData = async (data) => {
  try {
    const _response = await fetch(`${SERVER_URL}/addMentorMentorshipData`, {
      method: "POST",
      body: data,
    });
    const response = await _response.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};


