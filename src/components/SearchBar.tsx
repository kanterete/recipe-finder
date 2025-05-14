import { Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import MenuBookIcon from "@mui/icons-material/MenuBook"

const SearchBar = () => {
    return (
        <div className="flex max-w-[1440px] flex-col items-center justify-center gap-10 p-4">
            <h1 className="text-4xl font-bold">Search for recipes...</h1>
            <TextField
                id="outlined-basic"
                variant="outlined"
                label="Recipe..."
                className="w-84"
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
