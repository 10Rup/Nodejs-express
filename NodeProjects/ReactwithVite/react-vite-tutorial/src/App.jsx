import { UserProfile } from "./components/UserProfile"

export default function App(){
    const callme = ()=>{
        console.log("Hello")
    }
    return(
        <div>
            <h1>MY APP</h1>
            <UserProfile username="rup" favfoods={[
                {name: "Pizza", price: 10},
                {name: "Burger", price: 15}
                
            ]} age={25} CallMe={callme}/>
        </div>
    )
}