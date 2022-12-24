import React, { useContext } from "react";
import { Context } from "../context/Context";

export const Home = () => {
  const { data, isLoading } = useContext(Context);

  if (isLoading) {
    return (
      <h3>
        <i>Loading...</i>
      </h3>
    );
  }

  return (
    <div>
      <header>
        <h2>Users</h2>
      </header>

      <main>
        {data
          ? data.data.results.map((person, index) => (
              <section id="card" key={index}>
                <img
                  src={person.picture.large}
                  alt={person.name.first + " " + person.name.last}
                />
                <h3>
                  {person.name.title +
                    " " +
                    person.name.first +
                    " " +
                    person.name.last}
                </h3>
                <p>{person.gender}</p>
                <p>{person.phone}</p>
                <p>{person.email}</p>
              </section>
            ))
          : "No result"}
      </main>
    </div>
  );
};
