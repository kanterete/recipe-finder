import { Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import MenuBookIcon from "@mui/icons-material/MenuBook"

type SearchBarProps = {
    searchTerm: string
    setSearchTerm: (value: string) => void
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
                variant="contained"
                startIcon={<MenuBookIcon />}
                sx={{ bgcolor: "orange" }}
            >
                Search
            </Button>
        </div>
    )
}

export default SearchBar
