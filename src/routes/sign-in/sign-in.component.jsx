import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import { signInWithGooglePopup , createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup(); 
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(userDocRef);
  };

  return (
    <div>   
      <h1>This is Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
