import { Routes } from 'react-router';
import { Route } from 'react-router';
import Index from './pages/Index';
import Landing from './pages/Landing.js'
import Treatments from './pages/Treatments'
import Staff from './pages/Staff'
import Contact from './pages/Contact'
import './App.css';
import TreatmentList from './components/TreatmentList';
import Form from './components/Form';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/Inicio" element={<Index />} />
      <Route path="/Tratamientos" element={<Treatments />} />
      <Route path="/:Nombre" element={<TreatmentList />} />
      <Route path="/Mail" element={<Form />} />
      <Route path="/Equipo" element={<Staff/>} />
      <Route path="/Contacto" element={<Contact/>} />
    </Routes>
  );
}

export default App;
