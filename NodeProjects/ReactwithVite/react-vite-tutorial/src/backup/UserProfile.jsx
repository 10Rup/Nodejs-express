import { UserFavfood } from "./UserFavfood"
import { UserUsername } from "./UserUsername"

export function UserProfile(){
    const callme = ()=>{
        console.log("Hello")
    }
    return (
        <div>
            <div>
            {/* <b><UserUsername username ="Rony" age={30} favfood={{
                name:'shusi',
                age:25
            }}/></b> */}
            <b><UserUsername username ="Rup" isloggedIn={true} age={55} CallMe={callme}/></b>
            <span>Email:</span><span>user@gmail.com</span>
            </div>
            <br/>
            
            <UserFavfood/>
        </div>
    )
}