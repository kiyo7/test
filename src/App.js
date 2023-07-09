import { useState } from "react";
import "./styles.css";

export default function App() {
  const [check, setCheck] = useState(false);
  const [kingaku, setKingaku] = useState(0);
  const [tax, setTax] = useState(0);

  const [items, setItems] = useState([]);

  function clickEvent() {
    if (check) {
      const array = { check, kingaku, tax };
      setItems((prevItems) => [...prevItems, array]);
    }
  }

  function Table({ kingaku, tax }) {
    return (
      <tr>
        <td>{kingaku}</td>
        <td>{tax}</td>
      </tr>
    );
  }

  return (
    <div className="App">
      {check ? <p>{"true"}</p> : <p>{"false"}</p>}
      <table border="1">
        <tr>
          <th>追加</th>
          <th>金額</th>
          <th>消費税</th>
        </tr>
        <tr>
          <td>
            <input
              type={"checkBox"}
              onChange={() => {
                setCheck(!check);
              }}
              value={check}
            />
          </td>
          <td>
            <input
              type={"number"}
              onChange={(e) => {
                setKingaku(e.target.value);
                setTax((e.target.value * 8) / 108);
              }}
              value={kingaku}
            />
          </td>
          <td>
            <input
              type={"number"}
              onChange={(e) => setTax(e.target.value)}
              value={tax}
            />
          </td>
        </tr>
      </table>
      <div>
        <button onClick={() => clickEvent()}>追加</button>
      </div>
      <table border="1">
        <tr>
          <th>金額</th>
          <th>消費税</th>
        </tr>
        {items.map((item, index) => {
          return <Table key={index} kingaku={item.kingaku} tax={item.tax} />;
        })}
      </table>
    </div>
  );
}
