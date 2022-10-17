const Divider = ({ index, array }) => {
    return (
        <span className={`${index === array.length - 1 ? "hidden" : "inline-block"} w-[100%] bg-shadow-gray h-[2px]`}></span>
    )
}

export default Divider