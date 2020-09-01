import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import { Menu } from "./MenuPreview.styles";

const MenuPreview = ({ selectedItems, onItemRemove }) => {
  return (
    <div>
      <h2>Menu preview</h2>
      <Menu>
        {selectedItems.map((selectedItem) => (
          <Card name={selectedItem.name} dietaries={selectedItem.dietaries} key={selectedItem.id} onCloseClick = {() => onItemRemove(selectedItem)}/>
        ))}
      </Menu>
    </div>
  );
};

Card.propTypes = {
  selectedItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      dietaries: PropTypes.arrayOf(PropTypes.string).isRequired,
      id: PropTypes.number.isRequired
    })
  ),
  onItemRemove: PropTypes.func
};

export default MenuPreview;
