import React from "react";
import classNames from "classnames";
import "./Actions.scss";

const Actions = ({ G, ctx, playerID, moves }) => {
  const yourPlayer = G.players[playerID];
  const isYourTurn = ctx.currentPlayer === playerID;

  // game specifications for actions
  const canCoup = yourPlayer.coins >= 7;
  const mustCoup = yourPlayer.coins >= 10;
  const canAssassinate = yourPlayer.coins >= 3;
  const done = ctx.currentPlayer === G.turnLog.player.id || G.winner.id !== "-1"; // cannot select actions

  const income = () => {
    moves.income();
  };

  const prepAction = (action) => {
    moves.prepAction(action);
  };

  return (
    <div
      hidden={
        G.turnLog.action === "exchange" &&
        G.turnLog.successful &&
        ctx.activePlayers[playerID] === "action" &&
        isYourTurn
      }
    >
      <div className={classNames("general-actions", { "actions-active-enter": isYourTurn })}>
        <div className="btn-wrapper">
          <button className="action-btn" onClick={income} disabled={!isYourTurn || mustCoup || done}>
            Renda
          </button>
        </div>
        <div className="btn-wrapper">
          <button
            className="action-btn"
            onClick={() => prepAction("foreign aid")}
            disabled={!isYourTurn || mustCoup || done}
          >
            Ajuda Externa
          </button>
        </div>
        <div className="btn-wrapper">
          <button className="action-btn" onClick={() => prepAction("coup")} disabled={!isYourTurn || !canCoup || done}>
            Golpe de Estado
          </button>
        </div>
      </div>
      <div className={classNames("character-actions", { "actions-active-enter": isYourTurn })}>
        <div className="btn-wrapper">
          <button className="action-btn" onClick={() => prepAction("tax")} disabled={!isYourTurn || mustCoup || done}>
           <span style={{color:"#d91378"}}> Taxar</span>
          </button>
        </div>
        <div className="btn-wrapper">
          <button
            className="action-btn"
            onClick={() => prepAction("assassinate")}
            disabled={!isYourTurn || !canAssassinate || mustCoup || done}
          >
            Assassinar
          </button>
        </div>
        <div className="btn-wrapper">
          <button className="action-btn" onClick={() => prepAction("steal")} disabled={!isYourTurn || mustCoup || done}>
          <span style={{color:"#2094c0"}}> Extorquir </span>
          </button>
        </div>
        <div className="btn-wrapper">
          <button
            className="action-btn"
            onClick={() => prepAction("exchange")}
            disabled={!isYourTurn || mustCoup || done}
          >
            <span style={{color:"#65bc46"}}>Trocar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Actions;
