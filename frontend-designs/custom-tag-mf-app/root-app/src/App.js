import './App.css';
import LoginComponent from './routes/LoginComponent';
import InternalUserComponent from './routes/InternalUserComponent';
import ExternalUserComponent from './routes/ExternalUserComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/internal" element={<InternalUserComponent />} />
        <Route path="/external" element={<ExternalUserComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
