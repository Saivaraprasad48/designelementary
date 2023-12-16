import userModel from "../../models/userModel";

const getUserDataWithEmail = async (email: string) => {
  const emaildata = await userModel.findOne({
    email,
  });

  return emaildata;
};
export default getUserDataWithEmail;
