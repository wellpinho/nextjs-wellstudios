import Image from "next/image"

const Features = () => {
    return (
        <section id="feature">
            <div className="
                relative 
                container 
                flex 
                flex-col 
                max-w-6xl 
                mx-auto 
                my-32 px-6 
                text-gray-900 
                md:flex-row
                md:px-0
            ">
                <Image 
                    className="border-gray-400 border-4 p-1"
                    width={731}
                    height={500}
                    src="/images/desktop/image-interactive.jpg" 
                    alt="" />
                <div className="
                    top-48 pr-0 
                    bg-white 
                    md:absolute 
                    md:right-0 
                    md:py-20 
                    md:pl-20
                    border-b-4
                    border-r-4
                    border-gray-400
                ">
                    <h2 className="
                        max-w-lg 
                        mt-10 
                        mb-6 
                        font-sans 
                        text-4xl 
                        text-center 
                        text-gray-900 
                        uppercase 
                        md:text-5xl 
                        md:mt-0 
                        md:text-left
                    ">
                        the leader in interactive vr
                    </h2>
                    <p className="max-w-md text-center md:text-left">
                        Founded in 2011, Wellpinho Studios has been producing world-class virtual
                        reality projects for some of the best companies around the globe.
                        Our award-winning creations have transformed businesses through digital experiences that bind their brand.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Features