import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Grid } from '@mui/material';

const cardsData = [
  {
    title: 'open source',
    subtitle: 'Why do you need to contribute to open source projects?',
    description: 'open source projects is the best way of you software developer...',
    imageUrl: 'https://media.giphy.com/media/LESpNIDaNBUcRIPzng/giphy.gif', 
    linkUrl: 'https://medium.com/@marcusssbrune/why-do-you-need-to-contribute-to-open-source-projects-51c9c33fa192',
  },
  {
    title: 'free certificates',
    subtitle: 'Get free certificates for Software Developer skills',
    description: 'Same that you be better software developer the world...',
    imageUrl: 'https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif', 
    linkUrl: 'https://medium.com/@marcusssbrune/get-it-free-certificates-to-skills-from-software-developer-c2db5d10541e',
  },
  {
    title: 'TDD and BDD',
    subtitle: 'What is TDD and BDD and why need know about it?',
    description: 'implant this practices in your projects, well we go work...',
    imageUrl: 'https://media.giphy.com/media/i1JHRZSXO9LZZDHqii/giphy.gif', 
    linkUrl: 'https://medium.com/@marcusssbrune/what-is-tdd-and-bdd-and-why-need-know-about-it-7dcb436b887',
  },
  {
    title: 'Log Mastery',
    subtitle: 'What is better way to deal error the my code?',
    description: 'Mosts developers learn write codes but forget...',
    imageUrl: 'https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif', 
    linkUrl: 'https://medium.com/@marcusssbrune/what-is-better-way-to-deal-error-the-my-code-f8ed9541979',
  },
];

const CustomComponent = () => {
  return (
    <div style={{ margin: '50px' }}>
      <Grid container justifyContent="center" spacing={0}>
        {cardsData.map((card, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={3} style={{ margin: '0px 25px 17px' }}>
            <Card style={{ width: 300 }}>
              <CardMedia
                component="img"
                height="140"
                image={card.imageUrl}
                alt={`Imagem do Card ${index + 1}`}
              />
              <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography 
                  variant="h5" 
                  component="div" 
                  gutterBottom
                  style={{ textTransform: 'uppercase' }}>
                  {card.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  {card.subtitle}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
                <Button 
                  variant="text" 
                  color="primary" 
                  href={card.linkUrl} 
                  target="_blank"
                  style={{ marginTop: '20px' }}>
                  Visit
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CustomComponent;
