import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DBMSPage from './pages/DBMS/DBMSPage'
import COAPage from './pages/COA/COAPage'
import DSPage from './pages/DS/DSPage'
import OOPSPage from './pages/OOPS/OOPSPage'
import OSPage from './pages/OS/OSPage'
import DAAPage from './pages/DAA/DAAPage'
import FEEEPage from './pages/FEEE/FEEEPage'
import PHYPage from './pages/PHY/PHYPage'

// ─────────────────────────────────────────────────────────────
// HOW TO ADD MORE SUBJECTS:
// 1. Create a new folder: src/pages/YourSubject/
// 2. Create YourSubjectPage.jsx inside it (copy DBMSPage as template)
// 3. Add a new entry in src/data/subjects.js
// 4. Import the page here and add a new <Route> below
// ─────────────────────────────────────────────────────────────

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dbms" element={<DBMSPage />} />
      <Route path="/coa" element={<COAPage />} />
      <Route path="/ds" element={<DSPage />} />
      <Route path="/oops" element={<OOPSPage />} />
      <Route path="/os" element={<OSPage />} />
      <Route path="/daa" element={<DAAPage />} />
      <Route path="/feee" element={<FEEEPage />} />
      <Route path="/phy" element={<PHYPage />} />
      {/* ADD NEW SUBJECT ROUTES HERE */}
      {/* Example: <Route path="/os" element={<OSPage />} /> */}
    </Routes>
  )
}

export default App
