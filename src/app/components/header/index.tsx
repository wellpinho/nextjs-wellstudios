import Banner from "../banner"
import Navbar from "../navbar"

const Header = () => {
    return (
        <section id="hero">
            <div className="container max-w-6xl mx-auto px-6 py-12">
                <Navbar />
                <Banner />
            </div>
        </section>
    )
}

export default Header