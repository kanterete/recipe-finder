import { Button } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const Hero = () => {
    return (
        <div className="mx-auto flex h-[800px] w-full max-w-[1440px] flex-col items-center justify-center gap-8 bg-[url(/src/photos/hero.png)] bg-no-repeat p-4 text-center text-white">
            <h1 className="text-6xl">
                Find the perfect recipe for every moment
            </h1>
            <h2 className="text-2xl">
                Search thousands of recipes in seconds!
            </h2>
            <Button
                startIcon={<SearchIcon />}
                variant="contained"
                sx={{ bgcolor: "orange" }}
                className=""
            >
                Start Searching
            </Button>
        </div>
    )
}

export default Hero
