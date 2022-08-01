import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home"


function App() {


  const [recipes, setRecipes] = useState([]);

  const [query,setQuery]=useState("chicken");

  const [searchterm,setSearchterm] =useState("");






 
let getsearchData=async()=>{
  let response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=f32de960&app_key=21d2365533466592961b2eca0476e624&calories=591-722&health=alcohol-free`)
  setRecipes(response.data);
}
console.log("data",recipes);
 
 
useEffect(()=>{
  getsearchData();
  
  },[query])


  const getSearch =(e)=>{
    e.preventDefault(); 
    setQuery(searchterm);
     setSearchterm("");
  }


    const {hits} = recipes;
  
    console.log("hits",hits);


    let datazzzz =hits.map(data=> data.recipe.label);

    console.log(" datazzzz", datazzzz);

  return (
    <>
 <div className="App">

{/* <h2>receipe app</h2>
     <form onSubmit={getSearch}>
      <input type="text" value={searchterm} onChange={(e)=>{setSearchterm(e.target.value)}} />   
      <button type="submit">search</button>
</form>
   <div>
          {
hits.map(data => <p>{data.recipe.label}</p>)

          }
        </div> */}

         </div> 
         <Home />
         </>
    );
}

export default App;
