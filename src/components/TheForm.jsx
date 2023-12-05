import React, { useState } from "react";
import style from "../css/modules/TheForm.module.css";

export default function TheForm() {
  return (
    <div className={style.ContainerForm}>
      <form className={style.StyleForm}>
        <label htmlFor=""> Inserisci Titolo Post</label>
        <input type="text" placeholder="Inserisci Titolo Post" />

        <label htmlFor=""> Inserisci Descrizione </label>
        <input type="text" placeholder="Inserisci Descrizione" />
        <button className={style.buttonSub} type="submit">
          Aggiungi
        </button>
      </form>
      <div></div>
    </div>
  );
}
