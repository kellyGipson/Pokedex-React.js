import useIsMobile from "../hooks/getIsMobile"
import React, { useEffect, useState } from "react"
import axios from "axios"

import "../styles/Screens/Screens.css"
import { render } from "@testing-library/react"

type bottomScreenPropTypes = {
  pokemonList: {name: string, url: string,}[],
  pokemonInfo: {
    key: number,
    pokemonSpriteURL: string,
    pokemonShinySpriteURL: string,
    pokemonName: string,
    pokemonTypes: {
      slot: number,
      type: {
        name: string,
        url: string,
      }
    }[],
    pokemonAbilities: {
      ability: {
        name: string,
        url: string,
      },
      is_hidden: boolean,
      slot: number,
    }[],
    pokemonHeight: number,
    pokemonWeight: number,
    pokemonStats: {
      base_stat: number,
      effort: number,
      stat: {
        name: string,
        url: string,
      }
    }[],
  }[],
  fetchPokemonList: (index: number) => void,
  offset: number,
  setOffset: React.Dispatch<React.SetStateAction<number>>,
}

type pokemonInfo = {
}

function BottomScreen({ offset, setOffset, pokemonInfo, fetchPokemonList }: bottomScreenPropTypes) {

  
  return (
    <>
      <div className={"bottomScreen bottomScreen" + (useIsMobile() ? "Vert" : "Hori")}>
        <div className="bottomScreenContents">
          <div className="pokemonContainer">
            {pokemonInfo.map((p, idx) => (
              <img className="pokemon" src={p.pokemonSpriteURL} key={p.key}/>
            ))}
          </div>
          <div className="btnContainer">
            <button onClick={(e) => {(offset >= 0) && setOffset(offset - 6)}} className="btnUp">↑</button>
            <button onClick={(e) => {(offset >= 0) && setOffset(offset + 6)}} className="btnDown">↓</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BottomScreen