import { Route, Routes } from "react-router-dom";
import Signin from "../../Pages/Signin/signin";
import Signup from "../../Pages/signup/signup";
import OAuth2 from "../../Pages/OAuth2/OAuth2";
import OAuth2Signup from "../../Pages/OAuth2Signup/OAuth2Signup";
import OAuthSignin from "../..Pages/OauthSignin/OAuthSighin";
import OAuth2Merge from "../../Pages/OAuth2Merge/OAuth2Merge";

function AuthRouter() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/oauth2" element={<OAuth2 />} />
        <Route path="/oauth2/signup" element={<OAuth2Signup />} />
        <Route path="/oauth2/signin" element={<OAuthSignin />} />
        <Route path="oauth2/merge" element={<OAuth2Merge/> } />
      </Routes>
    </>
  );
}

export default AuthRouter;
