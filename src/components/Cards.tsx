import Card from "../components/Card"
import useFavorites from "../hooks/useFavorites"

type CardsProps = {
    searchTerm: string
    searchFavorite: boolean
}

const Cards = ({ searchTerm, searchFavorite }: CardsProps) => {
    const { filteredRecipes, favorites, toggleFavorite } = useFavorites({
        searchTerm,
        searchFavorite,
    })
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
