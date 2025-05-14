import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import HomeIcon from "@mui/icons-material/Home"
import SearchIcon from "@mui/icons-material/Search"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ContactPageIcon from "@mui/icons-material/ContactPage"

const NavBar = () => {
    return (
        <nav className="mx-auto flex h-24 w-full max-w-[1440px] content-center items-center justify-between px-4">
            <img
                src="src/photos/logo.png"
                alt=""
                className="h-auto w-50 object-cover"
            />

            <ul className="flex gap-12 p-4 text-xl font-medium max-md:hidden">
                <li className="p-4">
                    Home <HomeIcon />
                </li>
                <li className="p-4">
                    Search Recipes <SearchIcon />
                </li>
                <li className="p-4">
                    Favorites <FavoriteIcon />
                </li>
                <li className="p-4">
                    Contact <ContactPageIcon />
                </li>
            </ul>

            <div className="md:hidden">
                <MenuOpenIcon fontSize="large" className="cursor-pointer" />
            </div>

            <div className="fixed top-0 left-0 hidden w-[60%]">
                <ul className="flex gap-12 p-4 text-xl font-medium max-md:hidden">
                    <li className="p-4">
                        Home <HomeIcon />
                    </li>
                    <li className="p-4">
                        Search Recipes <SearchIcon />
                    </li>
                    <li className="p-4">
                        Favorites <FavoriteIcon />
                    </li>
                    <li className="p-4">
                        Contact <ContactPageIcon />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
