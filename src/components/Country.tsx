import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

import "../styles/Country.css";

function Country(props:{capital:string, name:string}) {

    const [selected, changeSelected] = useState(false);

    return (
        <tr className={selected ? "selected-country" : ""}>
            <td>{props.name}</td>
            <td>{props.capital}</td>
            <td>
                {!selected ?
                <Button variant="success" className={"buttonAddRemove"} onClick={() => changeSelected(true)}>Add</Button> :
                <Button variant="danger" className={"buttonAddRemove"} onClick={() => changeSelected(false)}>Remove</Button>
                }
            </td>
        </tr>
    )
}

Country.propTypes = {
    country: PropTypes.object
};


Country.defaultProps = {
    capital: "xxxNONExxx",
}


export default Country;