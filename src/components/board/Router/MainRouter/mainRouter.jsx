import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Write from "../../Pages/write/write";
import Board from "../../Pages/board/board";
import AuthRouter from "../AuthRouter/AuthRouter";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/write" element={<Write />} />
        <Route path="/auth/*" element={<AuthRouter />} />
      </Routes>
    </>
  );
}

export default MainRouter;
