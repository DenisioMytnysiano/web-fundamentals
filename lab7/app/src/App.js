import {Routes, Route } from 'react-router-dom'
import Profile from './pages/profile/profile'
import Catalogue from './pages/catalogue/catalogue'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </div>
  );
}

export default App;
