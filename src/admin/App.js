import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./nav-bar-mt/top-bar";

import Sidebar from "./nav-bar-mt/side-bar";
import Profile from "./scenes/dashboard";

import Calendar from "./calendar/calendar";
import Comments from "./review-comments";

import Contacts from "./scenes/contacts";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";




function AdminApp() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="admin-app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
             <Route path="/maintenance/admin/profile" element={<Profile />} />
             <Route path="/maintenance/contacts" element={<Contacts />} />
             <Route path="/maintenance/calendar" element={<Calendar />} />
             <Route path="/maintenance/comments" element={<Comments />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AdminApp;
