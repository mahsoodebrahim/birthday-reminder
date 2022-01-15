import React from "react";

const List = ({ people, handleRemoveBtn }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className="person" key={id}>
            <img src={image} alt={name} />
            <div className="two-col">
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => handleRemoveBtn(id)}
              >
                x
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
