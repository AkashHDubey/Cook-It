import { useParams } from "react-router-dom"
import {useFetch} from '../../hooks/useFetch'
import { useTheme } from "../../hooks/useTheme"

import "./Recipe.css"

export default function Recipe() {

  const {id} = useParams()
  const url = "http://localhost:3000/recipes/"+id
  const {error,isPending,data:recipe} = useFetch(url)
  const {mode} = useTheme()

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
        <h2 className="page-title">{recipe.title}</h2>
        <h4>Duration:</h4>
        <p>{recipe.cookingTime}</p>
        <h4>Ingredients:</h4>
        <ul>
          {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
        </ul>
        <p className="method">{recipe.method} </p>
        </>
      )}
    </div>
  )
}
