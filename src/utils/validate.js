export const checkValidData = (email, password) => {
  // const isFullNameValid = /[A-Za-z\s]{1,}[.\]{0,1}[A-Za-z\s]{0,}$/.test(
  //   fullName
  // );

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // if (!isFullNameValid) return "Name is not valid!";
  if (!isEmailValid) return "Email ID is not valid!";
  if (!isPasswordValid) return "Password is not valid!";

  return null;
};
