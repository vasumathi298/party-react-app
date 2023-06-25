import { Routes, Route } from "react-router";
import NavigationSidebar from "./navigation";
import Login from "./login";
import CreateParty from "./create-party";
import Join from "./join";
import Register from "./register";


function Spotify() {
    return (
        <div>
            <div className="row">
                <div className="col-7">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/create-party" element={<CreateParty />} />
                        <Route path="/join" element={<Join />} />
                    </Routes>


                </div>

            </div>
        </div>
    );
}
export default Spotify;

