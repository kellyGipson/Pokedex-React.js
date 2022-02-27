import useIsMobile from "../hooks/getIsMobile"
import React, { useEffect, useState } from "react"

import "../styles/Screens/Screens.css"

type bottomScreenPropTypes = {
  offset: number,
  setOffset: React.Dispatch<React.SetStateAction<number>>,
  pokemonList: {
    "key": number,
    "pokemonName": string,
    "pokemonSpriteURL": string,
    "pokemonShinySpriteURL": string,
    "pokemonTypeOne": string,
    "pokemonTypeTwo": string,
    "pokemonAbilityOne": string,
    "pokemonAbilityOneIsHidden": boolean,
    "pokemonAbilityTwo": string | null,
    "pokemonAbilityTwoIsHidden": boolean | null,
    "pokemonAbilityThree": string | null,
    "pokemonAbilityThreeIsHidden": boolean | null,
    "pokemonHeight": 7,
    "pokemonWeight": 69,
    "pokemonStatHp": 45,
    "pokemonStatAtt": 49,
    "pokemonStatDef": 49,
    "pokemonStatSpA": 65,
    "pokemonStatSpD": 65,
    "pokemonStatSpd": 45
}[],
}

export default function BottomScreen({ offset, setOffset, pokemonList }: bottomScreenPropTypes) {
  
  const handleClickUp = (e) => {
    if (offset == 4) {
      setOffset(0)
    } else if (offset > 0) {
      setOffset(offset - 6)
    }
  }

  const handleClickDown = (e) => {
    //breaks at 876
    if (offset === 876) {
      setOffset(880)
    }
    if (offset >= 0 && offset < 876) {
      setOffset(offset + 6)
    }
  }
  
  return (
    <>
      <div className={`bottomScreen bottomScreen${useIsMobile()}`}>
        <div>{offset}</div>
        <div className="bottomScreenContents">
          <div className={`pokemonContainer pokemonContainer${useIsMobile()}`}>
            {
              pokemonList.map((pokemon, idx) => (
                (idx <= 17) ?
                  <img className={'pokemon'} src={pokemonList[idx + offset].pokemonSpriteURL} alt={pokemonList[idx + offset].pokemonName} key={pokemonList[idx + offset].key}/>
                  : null
              ))
            }
          </div>
          <div className={`btnContainer btnContainer${useIsMobile()}`}>
            <button onClick={handleClickUp} className={`btnUp btnUp${useIsMobile()}`}>↑</button>
            <button onClick={handleClickDown} className={`btnDown btnDown${useIsMobile()}`}>↓</button>
          </div>
        </div>
      </div>
    </>
  )
}

/* {pokemonList.map((p, idx) => (
              (idx <= 23) ? 
                <img className={'pokemon'} src={p.pokemonSpriteURL} alt={p.pokemonName} key={p.key}/> 
                : null
            ))} */