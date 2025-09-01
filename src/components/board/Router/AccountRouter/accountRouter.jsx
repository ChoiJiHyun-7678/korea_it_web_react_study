import { Route, Routes } from "react-router-dom";
import Profile from "../../Pages/profile/profile";

function AccountRouter() {
	return (
		<>
			<Routes>
				<Route path="/profile/:username" element={<Profile />} />
			</Routes>
		</>
	);
}

export default AccountRouter;