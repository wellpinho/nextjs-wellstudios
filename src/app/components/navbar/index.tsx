const Navbar = () => {
    return (
        <nav className="flex items-center justify-between font-bold text-white">
            <h2 className="text-white">Wellpinho Studios</h2>

            <div className="hidden h-10 md:flex md:space-x-8">
                <div className="group">
                    <a href="#">About</a>
                    <div className="link">

                    </div>
                </div>

                <div className="group">
                    <a href="#">Creers</a>
                    <div className="link">
                        
                    </div>
                </div>

                <div className="group">
                    <a href="#">Events</a>
                    <div className="link">
                        
                    </div>
                </div>

                <div className="group">
                    <a href="#">Produtcts</a>
                    <div className="link">
                        
                    </div>
                </div>

                <div className="group">
                    <a href="#">Support</a>
                    <div className="link">
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar