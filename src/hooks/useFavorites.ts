import { fetchRecipes } from "../api/fetchRecipes"
import { useEffect, useState } from "react"
import { Meals } from "../types/Meals"

type useFavoritesProps = {
    searchTerm: string
    searchFavorite: boolean
}

export default function useFavorites({
    searchTerm,
    searchFavorite,
}: useFavoritesProps) {
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

    return { filteredRecipes, favorites, toggleFavorite }
}
