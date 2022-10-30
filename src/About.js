import React from 'react'

export default function About(props) {
  return (
    <div style={{color: props.mode==='light'?'black':'white'}}>
        <h1>About Text-Utility</h1>
        <p>
        This App allows you to specify a Text style from the list of text styles installed on that machine and update entire projects text note style, including all the families loaded on project.
        By updating the required font just once to the Text utility form, the whole projects text note style will be updated.
        </p>
      
    </div>
  )
}
