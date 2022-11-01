import { fetchTables } from "./Redux/subreducers/tablesReducer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Home from "./components/Home/Home";

function App() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => dispatch(fetchTables(setLoaded)), [dispatch]);

  return (
    <div>
      {loaded ? <Home /> : null}
    </div>
  );
}

export default App;
