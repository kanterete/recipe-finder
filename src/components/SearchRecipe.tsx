import { useState } from "react"
import Cards from "./Cards"
import SearchBar from "./SearchBar"

const SearchRecipe = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchFavorite, setSearchFavorite] = useState(false)

    const handleSearchFav = () => {
        setSearchFavorite((prev) => !prev)
    }
    return (
        <>
            <SearchBar
                onSearch={setSearchTerm}
                onToggleFavorite={handleSearchFav}
            />
            <Cards searchTerm={searchTerm} searchFavorite={searchFavorite} />
        </>
    )
}

export default SearchRecipe
