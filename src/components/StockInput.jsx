import { useState, useEffect } from "react"

export function StockInput() {
  const [result, setResult] = useState("")

  const [stockSymbol, setStockSymbol] = useState(0);
  const [stockQuantity, setStockQuantity] = useState(0);
  const [purchasePrice, setPurchasePrice] = useState(0);

useEffect(()=> {
  fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo")
    .then((res) => res.json())
    .then((data) => setStockSymbol(data["supported_symbols"]));
}, []);

  return (
  <form>
    <div>
      <input type="text" placeholder="Stock Symbol" className="box-1"></input>
      <input type="text" placeholder="Quantity" className="box-2"></input>
      <input type="text" placeholder="Purchase Price" className="box-3"></input>
      <button type="submit" className="add-btn">Add Stock</button>
    </div>
  </form>
  )  
}