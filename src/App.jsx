import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Career from "./pages/Career";
import Finance from "./pages/Finance";
import Skills from "./pages/Skills";
import Journal from "./pages/Journal";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/career"
          element={
            <MainLayout>
              <Career />
            </MainLayout>
          }
        />

        <Route
          path="/finance"
          element={
            <MainLayout>
              <Finance />
            </MainLayout>
          }
        />

        <Route
          path="/skills"
          element={
            <MainLayout>
              <Skills />
            </MainLayout>
          }
        />

        <Route
          path="/journal"
          element={
            <MainLayout>
              <Journal />
            </MainLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;