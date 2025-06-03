import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const dummyProducts = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Research Area ${i + 1}`,
  description:
    "This is a description of the research area. It is concise and informative.",
  image: `https://source.unsplash.com/random/300x200?sig=${i + 1}`,
  // price is not needed for research page, you can remove if you want
}));

export default function Research() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 4, mt: 7 }}
      >
        Research Areas
      </Typography>
      <Grid container spacing={3}>
        {dummyProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {product.description}
                </Typography>
              </CardContent>
              {/* Optional actions for research page, can be removed */}
              {/* 
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
              */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
