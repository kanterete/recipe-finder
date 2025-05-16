import AccessTimeIcon from "@mui/icons-material/AccessTime"
import RestaurantIcon from "@mui/icons-material/Restaurant"
import StarIcon from "@mui/icons-material/Star"
import SpeedIcon from "@mui/icons-material/Speed"
import { Meals } from "../types/Meals"

interface CardProps {
    meals: Meals
}

const Card = ({ meals }: CardProps) => {
    return (
        <div className="flex h-full w-74 flex-col justify-center rounded-2xl text-center md:w-84">
            <img
                src={meals.image}
                alt={"chicken salad"}
                className="rounded-t-xl object-cover"
            />
            <h1 className="my-3 text-xl font-bold">{meals.name}</h1>
            <p className="text-gray-500">
                <SpeedIcon /> Difficulty: {meals.difficulty}
            </p>
            <p className="text-gray-500">
                <RestaurantIcon /> Servings: {meals.servings}
            </p>
            <p className="mb-4 text-gray-500">
                <StarIcon /> Rating: {meals.rating}
            </p>
            <p className="text-bold text-gray-500">
                <AccessTimeIcon /> Prep Time: {meals.prepTimeMinutes} minutes
            </p>
        </div>
    )
}

export default Card
