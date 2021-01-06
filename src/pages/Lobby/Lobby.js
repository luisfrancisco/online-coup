import React from "react";
import "./Lobby.scss";

// Lobby is the parent component. Home and Room are the children components.
const Lobby = (props) => {
  return (
    <div className="lobby-container">
      <div className="game-title"><img src="/images/Coup_logo-01.png"></img></div>
      {props.children}
      <div className="game-info">
        Desenvolvido por by vyang1222 -{" "}
        <a href="https://github.com/vyang1222/online-coup" rel="noopener noreferrer" target="_blank">
          Sobre o projeto.
        </a>
        {"\n"}
        Coup é marca registrada de Rikki Tahta, La Mame Games. Licenciado por <a href="https://grokgames.com.br" target="_blank">Grok Games</a>.
      </div>
    </div>
  );
};

export default Lobby;
