import React from 'react';
import NavigationSidebar from './Spotify/navigation';
import Spotify from "./Spotify";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppMainPage from './AppRouter';
import AdminApp from './admin/App';
import Profile from './admin/scenes/dashboard';
import Contacts from './admin/scenes/contacts';
import Calendar from './admin/calendar/calendar';
import Comments from './admin/review-comments';

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
  <Route path="/Spotify/*" element={<Spotify />} />
  <Route path="/callback" element={<AppMainPage />} />
  <Route path="/maintenance/*">
    <Route index={true} element={<AdminApp />} />
    <Route path="admin/profile" element={<Profile />} />
    <Route path="admin/contacts" element={<Contacts />} />
    <Route path="admin/calendar" element={<Calendar />} />
    <Route path="admin/comments" element={<Comments />} />
  </Route>
</Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
