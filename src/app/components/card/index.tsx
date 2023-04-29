import Image from "next/image"

interface ICard {
    imgDesk: string
    imgMob: string
    imgAlt: string
    description: string
}

const Card = ({ imgDesk, imgMob, imgAlt, description }: ICard) => {
    return (
        <div className="group relative overflow-hidden md:w-1/4">
            <Image
                className="
                    hidden 
                    w-full 
                    duration-200
                    md:block 
                    group-hover:scale-110
                "
                width={256} 
                height={256} 
                src={imgDesk}
                alt={description} />

            <Image
                className="w-full md:hidden"
                width={320} 
                height={240} 
                src={imgMob}
                alt={imgAlt} />

            <div className="
                absolute top-0 
                bottom-0 
                right-0 
                left-0 
                bg-gradient-to-b 
                from-transparent 
                to-gray-900
                group-hover:from-gray-900
                group-hover:to-white
                group-hover:opacity-70
            "></div>

            <h5 className="
                absolute 
                px-6 
                duration-200 
                w-52 bottom-4 
                md:bottom-8 
                md:px-10
                group-hover:scale-110
                group-hover:text-black
            ">
                { description }               
            </h5>
        </div>
    )
}

export default Card