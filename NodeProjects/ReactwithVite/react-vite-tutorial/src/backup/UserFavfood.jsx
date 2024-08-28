import { createElement } from "react";

export function UserFavfood(){
    return createElement(
        "div",
        null,  
        <div><section>
        <span>Favorite Food:</span>
        <br />
        <ul>
            <li>Pizza</li>
            <li>Burger</li>
            <li>Pasta</li>
        </ul>
    </section></div>
    )
}