import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

function Banner() {
  return (
    <section>
      <Box
        sx={{
          backgroundImage: "url(/assets/carousel3-min.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          height: "75vh",
        }}
      >
        <Container maxWidth="sm" sx={{ py: 12, height: "75vh" }}>
          <Typography
            component="h1"
            variant="h3"
            align="center"
            fontWeight={600}
            color="secondary"
            gutterBottom
          >
            Let Us Take Care Of Your Smile
          </Typography>
          <Typography variant="h5" align="center" paragraph color="secondary">
            Let Us Take Care Of Your Smile
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              color="secondary"
              size="large"
              sx={{
                fontWeight: 600,
                backgroundColor: "#26ade4",
                "&:hover": { backgroundColor: "#26ade4" },
              }}
            >
              More Service
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ fontWeight: 600 }}
            >
              Learn More
            </Button>
          </Stack>
        </Container>
      </Box>
    </section>
  );
}

export default Banner;
