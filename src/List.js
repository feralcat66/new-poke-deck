import React, { Component } from 'react';

export default class List extends Component {
    render() {
        const { pokemonObj } = this.props;
        const {
            pokemon,
            url_image,
            type_1,
            hp,
            speed
        } = pokemonObj;

        return(
            <>
            <div>
            <img src={ url_image } alt={url_image}></img>
            <p>name: { pokemon }</p>
            <p>type: { type_1 }</p>
            <p>hp: { hp }</p>
            <p>speed: { speed }</p>
            </div>
            </>
        )
    }
}