
import "./ThemeSelector.css"
import { useTheme } from "../hooks/useTheme"
import modeIcon from "../assets/mode-icon.svg"

import React from 'react';

export default function ThemeSelector() {

 const {changeColor,changeMode,mode} = useTheme()
 const themeColors = (mode === 'light')?["green","pink","red","#58249c","black","#FFD700","silver"]:["black","#5c5c5c","#8c8c8c","silver"]

 const toggleMode = () =>{
    changeMode(mode==='dark'?'light':'dark')
 }

  return (
    <div className = "theme-selector">
       <div className="mode-toggle">
          <img 
          onClick = {toggleMode}
          src={modeIcon}
          alt = "mode-icon"
          style = {{filter:mode === 'dark'? 'invert(100%)':'invert(40%)'}}
          />
       </div>
       <div className="theme-buttons">
          {themeColors.map(color => (<div key={color} onClick={()=>changeColor(color)} style={{background:color}}/>))}
       </div>
    </div>
  )
}
