import { Routes, Route } from "react-router";
import NavigationSidebar from "./navigation";
import Login from "./login";
import SignUp from "./signup";
import CreateParty from "./create-party";
import Join from "./join";


function Spotify() {
    return (
        <div>
            <div className="row">
                <div className="col-7">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/create-party" element={<CreateParty />} />
                        <Route path="/join" element={<Join />} />
                    </Routes>


                </div>

            </div>
        </div>
    );
}
export default Spotify;

