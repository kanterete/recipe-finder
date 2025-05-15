import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import { useState } from "react"
import CloseIcon from "@mui/icons-material/Close"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(true)

    const handleNav = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="mx-auto flex h-24 w-full max-w-[1240px] items-center justify-between px-4 font-bold">
            <img
                src="src/photos/logo.png"
                alt=""
                className="h-auto w-50 object-cover"
            />

            <ul className="hidden md:flex">
                <li className="cursor-pointer p-4">Home</li>
                <li className="cursor-pointer p-4 whitespace-nowrap">
                    Search Recipes
                </li>
                <li className="cursor-pointer p-4">Favorites</li>
                <li className="cursor-pointer p-4">Contact</li>
            </ul>

            <div onClick={handleNav} className="'block md:hidden">
                {!isOpen ? (
                    <CloseIcon fontSize="large" className="cursor-pointer" />
                ) : (
                    <MenuOpenIcon fontSize="large" className="cursor-pointer" />
                )}
            </div>

            <div
                className={
                    !isOpen
                        ? "fixed top-0 left-0 z-10 h-full w-[50%] border-r border-r-gray-900 bg-white p-4 duration-500 ease-in-out md:hidden"
                        : "fixed left-[-100%]"
                }
            >
                <img
                    src="src/photos/logo.png"
                    alt=""
                    className="h-auto w-50 object-cover"
                />

                <ul className="flex flex-col items-center p-4 text-center text-xl font-medium uppercase">
                    <li className="cursor-pointer border-b border-gray-600 p-4">
                        Home
                    </li>
                    <li className="cursor-pointer border-b border-gray-600 p-4">
                        Search Recipes
                    </li>
                    <li className="cursor-pointer border-b border-gray-600 p-4">
                        Favorites
                    </li>
                    <li className="cursor-pointer p-4">Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
