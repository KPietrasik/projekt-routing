import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "../styles/Header.css";

import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import img4 from '../images/header4.jpg';

const Header = () => {
    // const images = [img1, img2, img3];
    // const index = Math.floor(Math.random() * 3)
    // losowanie od 0 do 3 i zapisywanie wylosowanego obrazka do zmiennej
    // const img = images[index]

    return (
        <>
            <Switch>
                {/* w srodku mozna przekazać komponent zrobiony w katalogu components, ale tez komponent bezstanowy czyli funkcję jak poniżej  */}
                <Route path="/" exact render={() => (
                    <img src={img1} alt="nature" />
                )} />
                <Route path="/products" render={() => (
                    <img src={img2} alt="nature" />
                )} />
                <Route path="/contact" render={() => (
                    <img src={img3} alt="nature" />
                )} />
                <Route path="/admin" render={() => (
                    <img src={img4} alt="nature" />
                )} />
                <Route render={() => (
                    <img src={img4} alt="nature" />
                )} />
            </Switch>
            {/* <img src={img} alt="header" />  alternatywnie losowanie obrazka*/}
        </>
    );
}

export default Header;