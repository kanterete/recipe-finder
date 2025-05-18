import { Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import React, { useState } from "react"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ClearIcon from "@mui/icons-material/Clear"

type SearchBarProps = {
    onSearch: (term: string) => void
    onToggleFavorite: () => void
}

const SearchBar = ({ onSearch, onToggleFavorite }: SearchBarProps) => {
    const [inputValue, setInputValue] = useState("")

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }

    const handleSearch = () => {
        if (inputValue.trim()) {
            onSearch(inputValue)
            setInputValue("")
        }
    }

    return (
        <div
            id="SearchRecipes"
            className="mx-auto mt-12 flex max-w-[1240px] flex-col items-center justify-center gap-10 p-4"
        >
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                Search for recipes...
            </h1>
            <TextField
                id="outlined-basic"
                variant="outlined"
                label="Recipe..."
                className="w-64"
                onKeyDown={handleKeyDown}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="flex flex-col items-center gap-14 md:flex-row">
                <Button
                    variant="contained"
                    startIcon={<MenuBookIcon />}
                    sx={{ bgcolor: "orange" }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
                <Button
                    variant="contained"
                    startIcon={<ClearIcon />}
                    sx={{ bgcolor: "orange" }}
                    onClick={() => {
                        setInputValue("")
                        onSearch("")
                    }}
                >
                    Clear Search
                </Button>
                <Button
                    variant="contained"
                    startIcon={<FavoriteIcon />}
                    sx={{ bgcolor: "orange" }}
                    onClick={onToggleFavorite}
                >
                    Toggle Favorites
                </Button>
            </div>
        </div>
    )
}

export default SearchBar
