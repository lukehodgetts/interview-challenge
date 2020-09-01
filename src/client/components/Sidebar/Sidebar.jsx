import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import { Filters, Input, ItemList } from "./Sidebar.styles";

const Sidebar = ({ items, onItemClick }) => {
  const [search, setSearch] = useState("");
  const filteredItems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <Filters>
        <Input placeholder="Name" onChange = {(e)=>{setSearch(e.target.value)}} value = {search} />
      </Filters>
      <ItemList>
        {filteredItems.map((item) => (
          <Card name={item.name} dietaries={item.dietaries} key={item.id} onClick={() => onItemClick(item)}/>
        ))}
      </ItemList>
    </div>
  );
};

Card.propTypes = {
  onItemClick: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      dietaries: PropTypes.arrayOf(PropTypes.string).isRequired,
      id: PropTypes.number.isRequired,
    })
  )
};

export default Sidebar;
