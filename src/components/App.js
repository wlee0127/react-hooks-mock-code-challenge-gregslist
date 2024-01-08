
import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [listings,setListings]=useState(null);

useEffect(()=>{
  fetch("http://localhost:6001/listings")
  .then((response)=>response.json())
  .then((data)=>{console.log(data)
    setListings(data);
  })
})

  return (
    <div className="app">
      <Header />
      {listings ? (<ListingsContainer listing={listings}/>):(<p>Loading...</p>)}
    </div>
  );
}

export default App;
