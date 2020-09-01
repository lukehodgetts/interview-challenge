import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import MenuPreview from "./components/MenuPreview/MenuPreview";

export default () => {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    axios.get("/api/items").then((response) => {
      setItems(response.data.items);
    });
  }, []);

  const onItemClick = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const onItemRemove = (item) => {
    const index = selectedItems.indexOf(item)
    selectedItems.splice(index, 1)
    setSelectedItems([...selectedItems])
  }

  return (
    <div className="wrapper">
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
              <span>6 items</span>
            </div>
            <div className="col-6 menu-summary-right">
              6x <span className="dietary">ve</span>
              4x <span className="dietary">v</span>
              12x <span className="dietary">n!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <Sidebar items={items} onItemClick={onItemClick} />
          </div>
          <div className="col-8">
            <MenuPreview selectedItems={selectedItems} onItemRemove={onItemRemove}/>
          </div>
        </div>
      </div>
    </div>
  );
};
