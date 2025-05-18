import Card from "../components/Card"
import { fetchRecipes } from "../api/fetchRecipes"
import { useEffect, useState } from "react"
import { Meals } from "../types/meals"

type CardsProps = {
    searchTerm: string
    searchFavorite: boolean
}

const Cards = ({ searchTerm, searchFavorite }: CardsProps) => {
    const [recipes, setRecipes] = useState<Meals[]>([])
    const [favorites, setFavorites] = useState<string[]>(() => {
        const storedFavorites = localStorage.getItem("favorites")
        return storedFavorites ? JSON.parse(storedFavorites) : []
    })

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

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

    const addFavorite = (prevFavorites: string[], mealId: string) =>
        prevFavorites.includes(mealId)
            ? prevFavorites
            : [...prevFavorites, mealId]

    const removeFavorite = (prevFavorites: string[], mealId: string) =>
        prevFavorites.filter((id) => id !== mealId)

    const toggleFavorite = (mealId: string) => {
        setFavorites((prev) =>
            prev.includes(mealId)
                ? removeFavorite(prev, mealId)
                : addFavorite(prev, mealId),
        )
    }

    const filteredRecipes = recipes.filter(
        (recipe) =>
            recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (!searchFavorite || favorites.includes(recipe.id)),
    )

    return (
        <>
            <div>
                <h1 className="text-xl font-bold">
                    Ilość{searchFavorite ? " ulubionych" : ""} przepisów:{" "}
                    {filteredRecipes.length}
                </h1>
            </div>
            <div className="mx-auto my-12 flex w-full max-w-[1240px] flex-col items-center justify-center gap-8 px-4 text-center sm:flex-row sm:flex-wrap sm:gap-4">
                {filteredRecipes.map((recipe) => (
                    <Card
                        key={recipe.id}
                        meal={recipe}
                        toggleFavorite={toggleFavorite}
                        isFavorite={favorites.includes(recipe.id)}
                    />
                ))}
            </div>
        </>
    )
}

export default Cards
