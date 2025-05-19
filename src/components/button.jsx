export default function Button({color, children}){
    return(
        <button className="btn" style={{backgroundColor: color}}>{children}</button>
    )
}