import React from "react"
import '../style/styles.css'

export const Textearia = () => {

    const [textarea , setextaria] = React.useState('');

  const handleChange = (e) =>{
      setextaria(e.target.value)
      e.target.style.height = 'auto'
      e.target.style.height = e.target.scrollHeight + "px";
      }
      

    return(
        <>
         <textarea cols="50"  maxLength={148} onChange={(e) => handleChange(e)} />
         {`votre message (${textarea.length} / 148)`}
         {textarea.length === 148 ? <p className="erreur">"limite à 148 carateres"</p> : ""}
        </>
    )
}