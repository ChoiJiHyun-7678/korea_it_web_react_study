import { Route, Routes } from "react-router-dom";
import Signin from "../../Pages/Signin/signin";
import Signup from "../../Pages/signup/signup";

function AuthRouter() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default AuthRouter;
