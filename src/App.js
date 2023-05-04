import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => setCoins(json));
    setLoading(false);
  }, []);

  const onChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      {loading ? <strong> Loading...</strong> : null}

      <input
        onChange={onChange}
        value={value}
        type="text"
        placeholder="how much?"
      />
      <select>
        {coins.map((coin) => (
          <option>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}USD
          </option>
        ))}
      </select>
      <button> Submit </button>
      <h3>You can buy </h3>
    </div>
  );
}

export default App;
