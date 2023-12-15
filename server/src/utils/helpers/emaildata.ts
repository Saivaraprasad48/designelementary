import userModel from "../../models/userModel";

const getUserDataWithEmail = async (email: string) => {
  const emaildata = await userModel.findOne({
    email,
  });
  console.log(email);

  return emaildata;
};
export default getUserDataWithEmail;
