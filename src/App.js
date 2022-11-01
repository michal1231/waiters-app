import { fetchTables } from "./Redux/subreducers/tablesReducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <div>
      Hello world
    </div>
  );
}

export default App;
