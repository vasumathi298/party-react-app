import React from 'react';
import NavigationSidebar from './Spotify/navigation';
import Spotify from "./Spotify";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppMainPage from './AppRouter';
import AdminApp from './admin/App';
import Profile from './admin/scenes/dashboard';
import Contacts from './admin/scenes/contacts';

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
                            <Route path="/maintenance/"> //no element attribute here
                              <Route index={true} element={<AdminApp />}></Route>
                                <Route path="/maintenance/admin/profile" element={<Profile />} />
                                <Route path="/maintenance/contacts" element={<Contacts />} />
                                
                          </Route>
                            
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
