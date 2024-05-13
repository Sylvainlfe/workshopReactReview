import React from "react";

function Card2({ characters }) {
  return (
    <section className="character-list">
      {characters.map((character) => (
        <article key={character.id} className="characterCard">
          <figure className="containImg">
            <img
              src={character.image}
              alt={character.name}
              className="characterImg"
            />
          </figure>
          <figcaption className="containDescription">
            <h2 className="titleCard">{character.name}</h2>
            <p>
              <strong>Game series:</strong> {character.gameSeries}
            </p>
            <p>
              <strong>Amiibo series:</strong> {character.amiiboSeries}
            </p>
          </figcaption>
        </article>
      ))}
    </section>
  );
}

export default Card2;