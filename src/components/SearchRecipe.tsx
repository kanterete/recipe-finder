import { useState } from "react"
import Cards from "./Cards"
import SearchBar from "./SearchBar"

const SearchRecipe = () => {
    const [searchTerm, setSearchTerm] = useState("")

    return (
        <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Cards searchTerm={searchTerm} />
        </>
    )
}

export default SearchRecipe
