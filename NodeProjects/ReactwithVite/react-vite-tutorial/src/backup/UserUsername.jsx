

export function UserUsername(props){
    props.CallMe();
    console.log(props)
    return (
        <div>
        <div>
            <span>UserName :</span><span>{props.username}</span>
        </div>
        <div>
            <span>Age: </span><span>{props.age}</span>
        </div>
        <div>
            <span>User logIn Status: </span><span>{String(props.isloggedIn)}</span>
        </div>
        {/* <div>
            <span>Favorite Food: </span><span>{props.favfood[]}</span>
        </div> */}
        </div>
    )
}