import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const getDataTeam = async () => {
  try {
    const { data } = await instance.get("/api/boxes");
    return { success: true, data };
  } catch (error) {
    return { success: false };
  }
};

const getTeamMember = async (team) => {
  try {
    const res = await instance.get(`/api/boxes/${team}`);
    return res.data;
  } catch (error) {
    return console.log(error.message);
  }
};

export { getDataTeam, getTeamMember };
