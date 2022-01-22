import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme';
import  './RecipeList.css'

export default function RecipeList({recipes}) {

  const {color,mode} = useTheme()


useEffect(() => {
   const element = document.querySelectorAll(".recipe-list .card a");

  for (let i = 0; i < element.length; i++) {
    
    element[i].addEventListener("mouseover", function() {
      element[i].style.backgroundColor = color
      element[i].style.color = 'white'
    });

    element[i].addEventListener("mouseout", function() {
      element[i].style.backgroundColor = '#e2e2e2'
      element[i].style.color = "#555"
    });
  }


}, [color]);

if(recipes.length === 0){
  return (<div className="error">No recipes to load...</div>)
}



  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>
        <h3>{recipe.title}</h3>
        <p>{recipe.cookingTime} to make.</p>
        <div>{recipe.method.substring(0,100)}...</div>
        <Link to={`/recipes/${recipe.id}`}>Cook This!</Link>
        </div>
      ))}
    </div>
  )
}
