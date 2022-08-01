import React, { useState, useEffect, useContext } from "react";
import { getRedirectResult } from "firebase/auth";
import FormInput from "../form-input/FormInput.component";
import Button from "../button/Button.component";
import "./signInForm.styles.scss";
//user context object is going to give us back whatever value passed in for value.our value is current user of use state as well as seter function
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/Firebase.utils";
const defaultFormField = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };
  useEffect(() => {
    async function fetchData() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef);
      }
    }
    fetchData();
  }, []);
  const SignInWithGooglePopup = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          //resetFormFields();

          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={SignInWithGooglePopup}>
            GOOGLE SIGN IN
          </Button>

          {/* <Button buttonType="google" onClick={signInWithGoogleRedirect}>
            SIGN IN WITH GOOGLE REDIRECT
          </Button> */}
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
