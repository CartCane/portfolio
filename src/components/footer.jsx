import Button from "./Button"
export default function Footer({data}){
    return(
        <div className="footer" id="Contacts">
            <MyInfo data={data}/>
            <Contacts />
        </div>
    )
}

function MyInfo({data}){
    return(
        <div className="info">
            <h2>{data.title}</h2>
            <p>{data.content}</p>
            <div>
                <p>📧 Email: {data.email}</p>
                <p>LinkedIn: {data.linkedIn}</p>
                <p>GitHub: {data.gitHub}</p>
            </div>
        </div>
    )
}

function Contacts(){
    return(
        <div className="contact">
            <h2>Contact</h2>
            <form>
                <label>Name</label>
                <input></input>
                <label>Email</label>
                <input></input>
                <label>Message</label>
                <textarea rows="5"></textarea>
                <Button bgColor= "#007BFF" color="white">Send</Button>
            </form>  
            <a class="btn-whatsapp" href="https://wa.me/917507571653?text=Hi%20Karthikeyan,%20I%20visited%20your%20website!" target="_blank">WhatsApp</a>
        </div>
    )
}