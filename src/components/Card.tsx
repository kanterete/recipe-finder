import AccessTimeIcon from "@mui/icons-material/AccessTime"
import RestaurantIcon from "@mui/icons-material/Restaurant"
import StarIcon from "@mui/icons-material/Star"
import SpeedIcon from "@mui/icons-material/Speed"
import { Meals } from "../types/Meals"

type CardProps = {
    meal: Meals
}

const Card = ({ meal }: CardProps) => {
    return (
        <div className="flex h-full w-74 flex-col justify-center rounded-2xl text-center md:w-84">
            <img
                src={meal.image}
                alt={"chicken salad"}
                className="rounded-t-xl object-cover"
            />
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
