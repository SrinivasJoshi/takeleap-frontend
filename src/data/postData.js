const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const postMentorData = async (data) => {
  let mentorData = {
    name: data.name,
    gender: data.gender,
    currentLocation: data.currentLocation,
    currentStatus: data.currentStatus,
    classRank: data.classRank,
    greScore: {
      Q:data.greQ,
      V:data.greQ,
      AWA:data.greQ,
    },
    toeflScore: {
      speaking:data.toeflSpeaking,
      writing:data.toeflWriting,
      listening:data.toeflListening,
      reading:data.toeflReading,
    },

    underGradInstitution: data.underGradInstitution,
    underGradDegree: data.underGradDegree,
    undergraduateGPA: data.undergraduateGPA,

    postGraduateInstitution: data.postGraduateInstitution,
    postGraduateDegree: data.postGraduateDegree,
    programName: data.programName,
    universityName: data.universityName,
    
    publications: data.publications,
    professionalExperiences: data.professionalExperiences,
  }
  try {
    const _response = await fetch(`${SERVER_URL}/addMentor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({mentorData}),
    });
    const response = _response.json();
    return response
  } catch (error) {
    console.log(error);
  }
};
