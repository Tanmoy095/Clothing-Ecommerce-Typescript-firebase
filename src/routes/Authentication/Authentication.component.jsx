import SignUpForm from "../../components/sign-Up-form/SignUpForm.component";
import SignInForm from "../../components/signIn-form/SignInForm.component";
import "./authentication.stylws.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
