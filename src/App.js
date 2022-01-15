import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const handleRemoveBtn = (id) => {
    const newPeople = people.filter((person) => {
      return id !== person.id;
    });
    setPeople(newPeople);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} handleRemoveBtn={handleRemoveBtn} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
