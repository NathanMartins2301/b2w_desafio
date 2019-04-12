import React, { Component } from 'react';

import  './styles.css';
import api from '../../services/api';






export default class Main extends Component {

   constructor(){
       super();
       this.state = {
           planet: [],
       }
   }

   next(){
       this.componentDidMount();
   }

    async componentDidMount(){
        const randon = Math.floor(Math.random() * (61 - 1)) +1;
        const response = await api.get('/' + randon);
        this.setState({
            planet: response.data,
            qtd_films: response.data.films.length
        });
        console.log(randon);
        
    }    
    

  render() {
    return (
        <div id="main-container">
            <div className="box-title">
                <h1>Hora do Desafio</h1>
            </div>            
            <div className="box">
                <header>Nome: {this.state.planet.name}</header>
                <div className="info">Population: {this.state.planet.population}</div>
                <div className="info">Climate: {this.state.planet.climate}</div>
                <div className="info">Terrain: {this.state.planet.terrain}</div>
                <div className="info">Featured in nFilms: {this.state.qtd_films}</div>
            </div>
            <button class="next" onClick={()=> this.next()}>Next</button>
        </div>
    );
  }
}
