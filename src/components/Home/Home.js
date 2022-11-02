import { getAllTables } from "../../Redux/subreducers/tablesReducer"
import { useSelector } from "react-redux"
import Header from "../Header/Header";
import Table from "../Table/Table";
import Container from 'react-bootstrap/Container';

const Home = (test) => {
  const tables = useSelector(getAllTables);

  return (
    <Container>
      <section>
        <Header>All tables</Header>
        {tables.map(table => <Table key={table.id} name={table.name} status={table.status} id={table.id} />)}
      </section>
    </Container>
  );
};

export default Home;