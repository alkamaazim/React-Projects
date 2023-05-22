import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

const style = {
  color: "#999",
  marginTop: "8px",
};

const CoinsComp = ({ allCoins }) => {
  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2}>
          {allCoins.map((elem) => (
            <Grid
              item
              xs={12}
              md={3}
              key={elem.id}
              sx={{ border: "1px solid #f2f2f2", textAlign: "center" }}
            >
              <img src={elem.image} alt={elem.name} />
              <Box style={style}>
                <Typography variant="h5" component="div">
                  <strong>{elem.name}</strong>
                  <br />
                  <strong>Rs.</strong>{elem.current_price}
                </Typography>
                {elem.price_change_percentage_24h < 0 ? (
                  <Typography variant="h6" component="h6" sx={{color: "red"}}>
                    <strong>{`${elem.price_change_percentage_24h.toFixed(2)}%`}</strong>
                  </Typography>
                ) : (
                  <Typography variant="h6" component="h6" sx={{color: "green"}}>
                    <strong>{`${elem.price_change_percentage_24h.toFixed(2)}%`}</strong>
                  </Typography>
                )}
                <Typography variant="h5" component="h5">{`Mkt cap: Rs. ${elem.market_cap.toLocaleString()}`}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default CoinsComp;
