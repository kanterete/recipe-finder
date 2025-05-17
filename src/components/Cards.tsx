import Card from "../components/Card"
import { fetchRecipes } from "../api/fetchRecipes"
import { useEffect, useState } from "react"
import { Meals } from "../types/meals"

type CardsProps = {
    searchTerm: string
}

const Cards = ({ searchTerm }: CardsProps) => {
    const [recipes, setRecipes] = useState<Meals[]>([])

    useEffect(() => {
        fetchRecipes().then((data) =>
            setRecipes(
                data.map((recipe: Meals) => ({
                    ...recipe,
                    favorite: false,
                })),
            ),
        )
    }, [])

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
        <div className="mx-auto my-12 flex w-full max-w-[1240px] flex-col items-center justify-center gap-8 px-4 sm:flex-row sm:flex-wrap sm:gap-4">
            {filteredRecipes.map((recipe) => (
                <Card key={recipe.id} meal={recipe} />
            ))}
        </div>
    )
}

export default Cards
