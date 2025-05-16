import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import SearchRecipe from "./components/SearchRecipe"

function App() {
    return (
        <div className="h-screen w-screen overflow-x-hidden scroll-smooth">
            <NavBar />
            <main className="mx-auto flex flex-col items-center justify-center">
                <Hero />
                <SearchRecipe />
            </main>
            <Footer />
        </div>
    )
}

export default App
