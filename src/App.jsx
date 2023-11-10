import data from "./data";
import List from "./Components/List";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={setPeople([])}>Clear The List!</button>
      </section>
      ;
    </main>
  );
};
export default App;
