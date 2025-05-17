export interface Meals {
    id: string
    name: string
    ingredients: string[]
    instructions: string[]
    prepTimeMinutes: string
    cookTimeMinutes: string
    servings: string
    difficulty: string
    cuisine: string
    caloriesPerServing: string
    tags: string[]
    userId: string
    image: string
    rating: string
    reviewCount: string
    mealType: string[]
    favorite: boolean
}
