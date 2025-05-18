import { Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import { useState } from "react"

type SearchBarProps = {
    onSearch: (value: string) => void
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [inputValue, setInputValue] = useState("")

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
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
                variant="contained"
                startIcon={<MenuBookIcon />}
                sx={{ bgcolor: "orange" }}
                onClick={() => onSearch(inputValue)}
            >
                Search
            </Button>
        </div>
    )
}

export default SearchBar
