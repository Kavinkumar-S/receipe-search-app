import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
   
   
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


    // let datazzzz =hits.map(data=> data.recipe.label);

    // console.log(" datazzzz", datazzzz);

   
    return (
        <>
       <section> 
    

        <div className='container'>

       
        <h2>receipe app</h2>
     <form onSubmit={getSearch} className="search-container">
      <input type="text" value={searchterm} onChange={(e)=>{setSearchterm(e.target.value)}} />   
      <button type="submit">search</button>
</form>

                <div>
        <h4>searchresult: {query}</h4>

                </div>

          <div className='product-container'>

           {
            hits?.map(data=>
            
            <div className='product-card'>
            <img src={data.recipe.image} alt="img" className='product-image'  />

                <h4>{data.recipe.label}</h4>
                    
            </div>

)
         } 
          </div>  


        </div>

            </section>
        </>
    );
};

export default Home;