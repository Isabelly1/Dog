import React from "react";
import { Link } from "react-router-dom";
import * as S from "../Components/Style/Styles.js";

const Header = ({ rota, rota2, rota3 }) => {
  return (
    <div>
      <S.Nav>
        <S.Ul>
          <li>
            <Link to="/">{rota}</Link>
          </li>
          <li>
            <Link to="/dog">{rota2}</Link>
          </li>
          <li>
            <Link to="/cat">{rota3}</Link>
          </li>
        </S.Ul>
      </S.Nav>
    </div>
  );
};

export default Header;
