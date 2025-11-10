import React, { useState } from "react";
import API from "../api";

function PopupSell({ onClose, uid, perPrice }) {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(perPrice);

  const handleBuy = async () => {
    await API.post("/Orders", {
      name: uid,
      qty: qty,
      price: price,
      mode: "Sell",
    });

    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <div className="popup-header">
          <h2> &nbsp; {uid}</h2>
        </div>

        <div className="input-group">
          <label>Quantity:</label>
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <label>Price:</label>
          <input
            type="number"
            value={price * qty}
            onChange={(e) => setPrice(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="popup-buttons">
          <button
            className="popBtn cancel-btn"
            onClick={onClose}
            style={{
              width: "5rem",
            }}
          >
            Cancel
          </button>
          <button
            className="popBtn buy-btn"
            onClick={handleBuy}
            style={{
              width: "5rem",
            }}
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupSell;
