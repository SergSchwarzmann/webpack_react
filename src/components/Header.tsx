import * as React from "react";

import "../styles/Header.css";



function Header(props) {
    let [count, setNewCount] = React.useState(0);

    const handleClick = e /* event*/ => {
        setNewCount(count + 1);
    }

    return (
        <header>This is header
            <button className={ "some-button" } onClick={handleClick}>
                {props.buttonName}, clicks: {count}
            </button>
        </header>
    )
}



export default Header;