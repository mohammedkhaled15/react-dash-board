const Divider = ({ index, array }) => {
    // const { index = 2, array = [2, 3, 4, 5] } = props
    return (
        <span className={`${index === array.length - 1 ? "hidden" : "inline-block"} w-[100%] bg-shadow-gray h-[2px]`}>
        </span>
    )
}

export default Divider