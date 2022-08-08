import { Routes } from 'react-router';
import { Route } from 'react-router';
import Index from './pages/Index';
import Staff from './pages/Staff'
import Contact from './pages/Contact'
import './App.css';
import Form from './components/Form';
import SelectedTreatment from './pages/SelectedTreatment';
import Treatments from './pages/Treatments';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/Tratamientos" element={<Treatments />} />
      <Route path="/:Nombre" element={<SelectedTreatment />} />
      <Route path="/Mail" element={<Form />} />
      <Route path="/Equipo" element={<Staff/>} />
      <Route path="/Contacto" element={<Contact/>} />
    </Routes>
  );
}

export default App;
