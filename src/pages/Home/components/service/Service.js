import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const cardsData = [
  {
    title: 'Card 1',
    subtitle: 'Subtítulo do Card 1',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    imageUrl: 'https://via.placeholder.com/150', 
  },
  {
    title: 'Card 2',
    subtitle: 'Subtítulo do Card 2',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    imageUrl: 'https://via.placeholder.com/150', 
  },
  {
    title: 'Card 3',
    subtitle: 'Subtítulo do Card 3',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    imageUrl: 'https://via.placeholder.com/150', 
  },
  {
    title: 'Card 4',
    subtitle: 'Subtítulo do Card 4',
    description: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
    imageUrl: 'https://via.placeholder.com/150', 
  },
];

const CustomComponent = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap',margin: '20px' }}>
          {cardsData.map((card, index) => (
            <Card key={index} style={{ margin: 10, width: 300 }}>
              <CardMedia
                component="img"
                height="140"
                image={card.imageUrl}
                alt={`Imagem do Card ${index + 1}`}
              />
              <CardContent style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" component="div" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  {card.subtitle}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
    );
};

export default CustomComponent;
