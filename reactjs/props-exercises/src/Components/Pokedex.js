import React, { Component } from 'react';
import Pokemon from "./Pokecard"


class Pokedex extends Component {
    render() {
        let pokeList = this.props.pokemonArr.map(pokeitem => {
            return <Pokemon
              key={pokeitem.id}
              name={pokeitem.name}
              image={pokeitem.image}
              type={pokeitem.type}
            />
          })
            return (
              <div className="">
                <h2 className="title">Pokedex</h2>
                <div className="pokeitem">{pokeList}</div>
              </div>
            );
          }
}

export default Pokedex;





Pokedex.defaultProps = {
    pokemonArr: [
        {
          id: 1,
          name: "Charmander",
          type: "fire",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
          id: 2,
          name: "Squirtle",
          type: "water",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        {
          id: 3,
          name: "Butterfree",
          type: "flying",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
        },
        {
          id: 4,
          name: "Rattata",
          type: "normal",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
        },
        {
          id: 5,
          name: "Metapod",
          type: "bug",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
        }
      ]
    
    }