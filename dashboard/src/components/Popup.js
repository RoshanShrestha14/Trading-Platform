import React, { useState, useContext } from "react";
import axios from "axios";
import { RefreshContext } from "./RefreshContext";

function Popup({ onClose, uid, perPrice, percent }) {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(perPrice);

  const { fetchHoldings } = useContext(RefreshContext);

  const handleBuy = async () => {
    await axios.post("http://localhost:3002/Orders", {
      name: uid,
      qty: qty,
      price: price,
      mode: "Buy",
    });
   
    // Remove % sign and convert to number
    const number = parseFloat(percent);
    // Add the increment
    const result = number + 5;
    // Format back to percentage string
    let net = `${result >= 0 ? "+" : ""}${result}%`;
    let day = percent;

    await axios.post("http://localhost:3002/Holdings/new", {
      name: uid,
      qty: qty,
      avg: price,
      price: price,
      net: net,
      day: day,
    });
 fetchHoldings();
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
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
