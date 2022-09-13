import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        
    }
    body{
      background-color:#FFD700;
    }

`;

export const Foto = styled.img`
  width: 40vw;
  height: 40vh;
  border: solid 10px transparent;
  border-image: url("https://i.pinimg.com/236x/34/a1/97/34a19754c0fff84976929d0c431b8ac5.jpg")
    30 round;
`;

export const H1 = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 60%;
  color: red;
  li {
    font-size: 1.3rem;
    text-decoration: none;
  }
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  height: 10vh;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
`;

export const Button = styled.button`
  width: 10%;
  height: 5vh;
  font-size: 1.5rem;
`;
