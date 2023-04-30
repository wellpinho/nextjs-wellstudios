import { GithubLogo, LinkedinLogo, MicrosoftOutlookLogo } from "@phosphor-icons/react"
import Social from "../social"

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="container max-w-6xl py-10 mx-auto">
                <div className="
                    flex 
                    flex-col 
                    items-center 
                    mb-8 
                    space-y-6 
                    md:flex-row 
                    md:space-y-0 
                    md:justify-between 
                    md:items-start
                ">
                    <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                        <div className="h-8">
                            <h2 className="
                                w-44 
                                md:ml-3
                                text-white
                                font-bold
                                text-xl
                            ">
                                Wellpinho Studios
                            </h2>
                        </div>

                        <div className="
                            flex 
                            flex-col 
                            items-center 
                            space-y-4 
                            font-bold 
                            text-white 
                            md:flex-row 
                            md:space-y-0 
                            md:space-x-6 
                            md:ml-3
                        ">
                            <div className="h-10 group">
                                <a href="#">About</a>
                                <div className="link"></div>
                            </div>
                            <div className="h-10 group">
                                <a href="#">Careers</a>
                                <div className="link"></div>
                            </div>
                            <div className="h-10 group">
                                <a href="#">Events</a>
                                <div className="link"></div>
                            </div>
                            <div className="h-10 group">
                                <a href="#">Products</a>
                                <div className="link"></div>
                            </div>
                            <div className="h-10 group">
                                <a href="#">Support</a>
                                <div className="link"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mx-auto space-x-2 md:justify-end md:mx-0">
                        <Social 
                            path="/images/linkedin-logo-fill.svg" 
                            link="https://www.linkedin.com/in/wellpinho/" 
                        />
                        <Social 
                            path="/images/github-logo-fill.svg" 
                            link="https://github.com/wellpinho/" 
                        />
                    </div>
                </div>

                <div className="flex justify-center font-bold text-gray-400">
                    &copy; 2023 Wellpinho Studios. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer