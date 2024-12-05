import { API } from "..";

const getprofile = async () => {
  const res = await API.get('profile/get-profile');
  console.log(res);
  if (res.data.status === 200) {
    return res.data.data;
  } else {
    alert("internal server error");
  }
};

export default {
  getprofile,
};
