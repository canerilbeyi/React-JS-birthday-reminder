import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, image: img, age, name } = person;
        return (
          <article key={id} className="person">
            <img src={img} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
