interface IButton {
    text: string
    hidden?: string
    mdHidden?: string
    width?: string
}

export const ButtonWhite = ({ text, hidden = '', mdHidden = '', width = '' }: IButton) => {
    return (
        <button className={`
            ${hidden}
            md:block
            px-10 
            py-2 
            my-0 
            font-bold 
            tracking-widest 
            uppercase 
            boder-2
            border-black 
            font-alata 
            hover:bg-black 
            hover:text-white
            md:${mdHidden}
            ${width}
        `}>
            { text }
        </button>
    )
}