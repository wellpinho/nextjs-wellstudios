import Image from "next/image"

interface ISocial {
    link: string
    path: string
}

const Social = ({ link, path}: ISocial) => {
    return (
        <a href={link}>
            <Image
                className="h-8 w-8 bg-white"
                src={path}
                width={50}
                height={50}
                alt=""
            />
        </a>
    )
}

export default Social