import React from "react";
import "../styles/card.css"

function Card2({ characters }) {
  return (
    <section className="character-list">
      {characters.map((character) => (
        <div className="card" key={character.id}>
        <button className="mail"></button>
        <div className="profile-pic">
          <img src={character.image} alt={character.amiiboSeries} />
        </div>
        <div className="bottom">
          <div className="content">
            <span className="name">{character.name}</span>
            <span className="about-me">{character.gameSeries} </span>
          </div>
          <div className="bottom-bottom">
            <div className="social-links-container">
              <h2>15.99€</h2>
            </div>
            <button className="button">Buy me</button>
          </div>
        </div>
      </div>
      ))}
    </section>
  );
}

export default Card2;