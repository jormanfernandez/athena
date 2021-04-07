import React from "react";
import { LocalItem } from "views/components/Locals/LocalItem";

export const LocalList = ({ locals, onChoose }) => !locals ? <></> : (
  <ul className="collection">
    {locals.map(local => <LocalItem key={local.id} onChoose={onChoose} local={local}/>)}
  </ul>
);