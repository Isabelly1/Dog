import React, { useState } from "react";
import axios from "axios";
import * as S from "./Style/Styles";

const Dogs = () => {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);

  const API = "https://dog.ceo/api/breeds/image/random";

  const DogsApi = () => {
    axios
      .get(API)
      .then((resposta) => {
        setData(resposta.data.message);
        console.log(data);
      })
      .catch((error) => {
        console.log("Desculpe aconteceu um erro na requisição", error);
      });
  };

  /* const Mostrar = () => {
        setOpen(!open)
    }
 */
  return (
    <S.Container>
      <h2>Clique no botão para gerar um Amigão</h2>
      <S.Foto src={data} alt="nome" />
      <S.Button
        onClick={() => {
          DogsApi();
        }}
      >
        Adote
      </S.Button>
    </S.Container>
  );
};

export default Dogs;
