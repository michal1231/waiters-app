import { fetchTables } from "./Redux/subreducers/tablesReducer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Home from "./components/Home/Home";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Container from 'react-bootstrap/Container';
import ValidityCheck from "./components/ValidityCheck/ValidityCheck";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";



function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => dispatch(fetchTables(setLoaded)), [dispatch]);

  return (
    <main>
      <Container>
        <NavBar />
        {loaded ?
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/table/:tableId" element={<ValidityCheck />} />
            <Route path="*" element={<Home />} />

          </Routes>
          : <LoadingSpinner />}
        <Footer />
      </Container>
    </main>
  );
}

export default App;
