import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listing}) {

function deleteFunction(itemid) {
  fetch(`http://localhost:6001/listings/${itemid}`,{
    method: "DELETE"
  })
  .then((response)=>response.json())
  .then((data)=>{console.log(data)})
}

  return (
    <main>
      <ul className="cards">
        {listing.map((item)=>(<ListingCard description={item.description} imagesrc={item.image} location={item.location} deleteHandler={()=>deleteFunction(item.id)}/>))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
