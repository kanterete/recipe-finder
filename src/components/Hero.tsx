import { Button } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const Hero = () => {
    return (
        <div className="mx-auto flex h-[800px] max-w-[1440px] flex-col items-center justify-center gap-8 bg-[url(/src/photos/hero.png)] bg-cover bg-center bg-no-repeat p-4 text-center text-white lg:px-32">
            <h1 className="text-6xl font-bold text-shadow-md lg:text-8xl">
                Find the perfect recipe for every moment
            </h1>
            <h2 className="text-2xl text-shadow-md md:text-3xl lg:text-4xl">
                Search thousands of recipes in seconds!
            </h2>
            <Button
                startIcon={<SearchIcon />}
                variant="contained"
                sx={{ bgcolor: "#f39c12" }}
            >
                Start Searching
            </Button>
        </div>
    )
}

export default Hero
