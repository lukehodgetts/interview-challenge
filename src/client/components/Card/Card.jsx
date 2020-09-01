import React from "react";
import PropTypes from "prop-types";
import { Item, Header, Dietaries, Dietary, Button } from "./Card.styles";

const Card = ({ name, dietaries, onClick, onCloseClick }) => {
  return (
    <Item onClick={onClick}>
      <Header>{name}</Header>
      <Dietaries>
        {dietaries.map((dietary) => (
          <Dietary key={`${name}-${dietary}`}>{dietary}</Dietary>
        ))}
      </Dietaries>
      {onCloseClick && <Button onClick={onCloseClick}>x</Button>}
    </Item>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  dietaries: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
  onCloseClick: PropTypes.func
};
export default Card;
