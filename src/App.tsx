import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

//import {render} from "react-dom";


interface IPersonsList {
    count: number
    next: string
    previous: null
    results: Array<IPersonData>
}

interface IPersonData {
    name: string
    height: number
    mass: number
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    gender: string
    homeworld: string
    films: string[]
    species: string[]
    vehicles: string[]
    starships: string[]
    created: string,
    edited: string,
    url: string
}

const App: React.FC = () => {

    const personList: IPersonsList = {
        count: 1,
        next: 'something',
        previous: null,
        results: []
    }

    const [persons, setPersons] = useState<IPersonsList>(personList);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(res => {
                setPersons(res.data);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <div>
            {persons.results}
        </div>
    )
}


export default App;
