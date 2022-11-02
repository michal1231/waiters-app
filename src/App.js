import { fetchTables } from "./Redux/subreducers/tablesReducer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Home from "./components/Home/Home";
import { Routes, Route } from 'react-router-dom';
import TableDetails from "./components/TableDetails/TableDetails";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => dispatch(fetchTables(setLoaded)), [dispatch]);

  return (
    <main>
      {loaded ?
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:tableId" element={<TableDetails />} />
        </Routes>
        : null}
    </main>
  );
}

export default App;
