import React from 'react'
import styles from './Button.module.css';
export default function Button(props) {

  const{text,icon,isOutline,...rest }=props; //destructuring
  
  return (
    <button {...rest} className={isOutline?styles.outline_button:styles.primary_button}>
      {icon}
      {text}  
    </button>
  )
}
