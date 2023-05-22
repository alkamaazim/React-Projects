import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinsComp from "./components/CoinsComp";
import { Typography, Box } from "@mui/material";

function App() {
  const [allCoins, setAllCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        if (res.data !== "" && res.status === 200) {
          console.log(res);
          setAllCoins(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography variant="h3" component="h3">
          Crypto App
        </Typography>
      </Box>
      <CoinsComp allCoins={allCoins} />
    </React.Fragment>
  );
}

export default App;
