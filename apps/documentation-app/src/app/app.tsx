import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ButtonPage } from '../components/ButtonPage';
import { FooterPage } from '../components/FooterPage';
import { FormPage } from '../components/FormPage';
import { HeaderPage } from '../components/HeaderPage';
import { GridPage } from '../components/GridPage';
import { SearchBarPage} from '../components/SearchbarPage';
import Homepage from '../components/Homepage'; // Importa la homepage
import Navbar from '../components/NavbarPage';
import { Footer } from '@tomaciello-ui/footer';




export function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/header" element={<HeaderPage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/grid" element={<GridPage />} />
        <Route path="/searchbar" element={<SearchBarPage />} />
        <Route path="/footer" element={<FooterPage />} />

        <Route
          path="/dashboard"
          element={
            <div>
              <HeaderPage />
              <SearchBarPage />
              <FormPage />
              <ButtonPage />
              <GridPage />
              <FooterPage />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
