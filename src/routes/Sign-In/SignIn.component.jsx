import { signInWithGooglePopup } from "../../utils/firebase/Firebase.utils";
import React from "react";
import { createUserDocumentFromAuth } from "../../utils/firebase/Firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    //console.log(user);
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>SIGN IN PAGE</h1>

      <button onClick={logGoogleUser}> SIGN IN WITH GOOGLE POPUP </button>
    </div>
  );
};

export default SignIn;
