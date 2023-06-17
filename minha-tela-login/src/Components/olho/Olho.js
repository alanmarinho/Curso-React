import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import styles from './Olho.module.css'
function Olho({id}) {
  const [valor, setValor] = useState(true);
  let Icon = valor ? AiFillEyeInvisible : AiFillEye;
  
  const clicado = () => {
    setValor(!valor);
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.type = valor ? 'text' : 'password';
    }
  };

  return (
    <>
      <Icon className={styles.icon} onClick={clicado} />
    </>
  );
}

export default Olho;
