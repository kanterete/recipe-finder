import Cards from "./components/Cards"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar"

function App() {
    return (
        <div className="h-screen w-screen overflow-x-hidden">
            <NavBar />
            <main className="mx-auto flex flex-col items-center justify-center">
                <Hero />
                <SearchBar />
                <Cards />
            </main>
        </div>
    )
}

export default App
