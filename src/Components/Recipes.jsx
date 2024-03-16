import { useEffect } from "react";
import { useState } from "react";
import ShowCard from "./ShowCard";


const Recipes = ({handleBookMark}) => {
const[recipes,setRecipes]=useState([])

useEffect(()=>{
    fetch('recipe.json')
    .then(res=>res.json())
    .then(data=>setRecipes(data))
},[])

    return (
        <div>
            
           
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
{
    recipes.map(recipe=><ShowCard handleBookMark={handleBookMark} recipe={recipe}></ShowCard>)
}
            </div>
        </div>
    );
};

export default Recipes;