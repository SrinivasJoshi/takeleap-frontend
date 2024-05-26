const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const postMentorData = async (data) => {
  try {
    const _response = await fetch(`${SERVER_URL}/addMentor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({mentorData:data}),
    });
    const response = _response.json();
    return response
  } catch (error) {
    console.log(error);
  }
};
