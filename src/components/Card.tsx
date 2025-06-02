import AccessTimeIcon from "@mui/icons-material/AccessTime"
import RestaurantIcon from "@mui/icons-material/Restaurant"
import StarIcon from "@mui/icons-material/Star"
import SpeedIcon from "@mui/icons-material/Speed"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { Meals } from "../types/Meals"

type CardProps = {
    meal: Meals
    toggleFavorite: (id: string) => void
    isFavorite: boolean
}

const Card = ({ meal, toggleFavorite, isFavorite }: CardProps) => {
    return (
        <div className="relative flex h-full w-74 flex-col justify-center rounded-2xl text-center md:w-84">
            <img
                src={meal.image}
                alt={"chicken salad"}
                className="rounded-t-xl object-cover"
            />
            <div
                onClick={() => toggleFavorite(meal.id)}
                className="absolute top-2 right-2 cursor-pointer text-white"
            >
                {!isFavorite ? (
                    <FavoriteBorderIcon
                        fontSize="large"
                        className="shadow-2xs"
                    />
                ) : (
                    <FavoriteIcon fontSize="large" className="shadow-2xs" />
                )}
            </div>

            <h1 className="my-3 text-xl font-bold">{meal.name}</h1>
            <p className="text-gray-500">
                <SpeedIcon /> Difficulty: {meal.difficulty}
            </p>
            <p className="text-gray-500">
                <RestaurantIcon /> Servings: {meal.servings}
            </p>
            <p className="mb-4 text-gray-500">
                <StarIcon /> Rating: {meal.rating}
            </p>
            <p className="text-bold text-gray-500">
                <AccessTimeIcon /> Prep Time: {meal.prepTimeMinutes} minutes
            </p>
        </div>
    )
}

export default Card
