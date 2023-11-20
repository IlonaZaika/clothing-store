import { signInWIthGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWIthGooglePopup();
    console.log(response);
    const userDocRef = await createUserDocumentFromAuth(response.user);
  }

  return (
    <div>
      <div>I am sign in component</div>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  );
}

export default SignIn;