import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPageArabic from './components/LandingPageArabic';
import LandingPageEnglish from './components/LandingPageEnglish';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageArabic />} />
        <Route path="/Menu-En" element={<LandingPageEnglish />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
