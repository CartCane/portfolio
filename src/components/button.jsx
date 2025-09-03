export default function Button({bgColor, color, fontSize, children, onClick}){
    const style = {
        backgroundColor: bgColor,
        color,
        fontSize: fontSize,
    }
    return(
        <button className="btn" style={style} onClick={onClick}>{children}</button>
    )
}