import PropTypes from 'prop-types'
import { UserUserName } from './UserUsername'

export function UserProfile(props){
    console.log(props.favfoods[0])
    props.CallMe();
    return (
        <div>
            <div>
                <span>User Profile Name:</span>
                <span>{props.username}</span>
                
            </div>
            <div>
            <span>User Favorite Food - {props.favfoods[0].name}</span>
            </div>
            <div>
                <UserUserName username={props.username}/>
            </div>
        </div>
    )
}

UserProfile.propTypes ={
    username: PropTypes.string.isRequired,
    CallMe: PropTypes.func.isRequired,
    age: PropTypes.number.isRequired,
    favfoods: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    ),

}