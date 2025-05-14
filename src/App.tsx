import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar"

function App() {
    return (
        <div className="h-screen w-screen overflow-hidden">
            <NavBar />
            <main className="mx-auto flex flex-col items-center justify-center">
                <Hero />
                <SearchBar />
            </main>
        </div>
    )
}

export default App
