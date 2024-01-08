import React, {useState} from "react";

function ListingCard({description,imagesrc,location,deleteHandler}) {
  const [favoriteButton, setFavoriteButton]=useState(true);

  function favoriteButtonHandler() {
    setFavoriteButton(!favoriteButton);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={imagesrc} alt={"description"} />
      </div>
      <div className="details">
        {favoriteButton ? (
          <button className="emoji-button favorite active" onClick={favoriteButtonHandler}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={favoriteButtonHandler}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={deleteHandler}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
