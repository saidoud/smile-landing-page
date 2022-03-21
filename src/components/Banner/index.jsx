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
        <Container maxWidth="sm" sx={{ py: 20, height: "100%" }}>
          <Typography component="h1" variant="h4" align="center" sx={{ pb: 2 }}>
            Let Us Take Care Of Your Smile
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            paragraph
            sx={{ pb: 2 }}
          >
            With Latest Technology and best doctors in the Industry
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
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
              color="secondary"
              variant="outlined"
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
