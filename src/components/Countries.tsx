import React, {useState} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

import Country from "./Country";

import "../styles/Countries.css";

function Countries() {
    const [countries, setCountries] = useState([]);

    if(!countries.length) {
        axios.get("https://restcountries.com/v3.1/all").then(res => {
            console.log(res);
            setCountries(res.data);
        });
    }

    return (
        <Table striped bordered hover className={"countries"}>
            <thead><tr><th>Name</th><th>Capital</th><th>Action</th></tr></thead>
            <tbody>
                {countries.map(country => country.capital ? <Country key={country.cca3} 
                name = {country.name.common}
                capital = {country.capital}/> : <Country key={country.cca3} 
                                                name = {country.name.common}
                                                />)}
            </tbody>
        </Table>
    );
}

export default Countries;