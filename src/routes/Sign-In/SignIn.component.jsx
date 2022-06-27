import { signInWithGooglePopup } from "../../utils/firebase/Firebase.utils";
import React from "react";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>SIGN IN PAGE</h1>

      <button onClick={logGoogleUser}> SIGN IN WITH GOOGLE POPUP </button>
    </div>
  );
};

export default SignIn;
