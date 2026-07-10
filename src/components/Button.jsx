export default function Button({
    children,
    onClick
}){

    return(

        <button
            onClick={onClick}
            className="
            px-8
            py-3
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            transition
            duration-300
            "
        >

            {children}

        </button>

    )

}