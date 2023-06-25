import React from 'react';
import NavigationSidebar from './Spotify/navigation';
import Spotify from "./Spotify";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppMainPage from './AppRouter';
import AdminApp from './admin/App';

const App = () => {
    return (
        <Router>
            <div>
                <div className="row">
                    <div className="col-2">
                        <NavigationSidebar />
                    </div>
                    <div className="col-7">
                        <Routes>
                            <Route path="/Spotify/*"element={<Spotify/>}/>
                            <Route path="/callback" element={<AppMainPage/>}/>
                            <Route path="/maintenance/" element={<AdminApp/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
