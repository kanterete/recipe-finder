import Card from "../components/Card"
import { fetchRecipes } from "../api/fetchRecipes"
import { useEffect, useState } from "react"
import { Meals } from "../types/Meals"

const Cards = () => {
    const [recipes, setRecipes] = useState<Meals[]>([])

    useEffect(() => {
        fetchRecipes().then(setRecipes)
    }, [])

    return (
        <div className="mx-auto my-12 flex w-full max-w-[1240px] flex-col items-center justify-center gap-8 px-4 sm:flex-row sm:flex-wrap sm:gap-4">
            {recipes.map((recipe) => (
                <Card key={recipe.id} meals={recipe} />
            ))}
        </div>
    )
}

export default Cards
