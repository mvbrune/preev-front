import React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(to right bottom, #1c2025, #283c48, #2b5c6b, #2b7e89, #35a29f)',
  color: 'white',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(2),
  //marginBottom: '20px',
  borderRadius: '0 !important',
}));

const StyledSection = styled('div')({
  marginBottom: '16px',
});

const CustomCard = () => {
  return (
    <StyledCard>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <StyledSection>
                <Typography variant="h6" style={{textTransform: 'uppercase', }}>
                    anything
                </Typography>
                <Typography variant="subtitle1">fascinating world of artificial intelligence</Typography>
                <Typography variant="body2">
                    Explore the fascinating world of artificial intelligence (AI) 
                    and discover how it is revolutionizing various industries. 
                    Learn about the latest advancements in AI and its applications, 
                    including in the field of React development.
                </Typography>
            </StyledSection>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledSection>
                <Typography variant="h6" style={{textTransform: 'uppercase', }}>
                    Swimming Pools
                </Typography>
                <Typography variant="subtitle1">The different swimming strokes</Typography>
                <Typography variant="body2">
                Swimming is a popular water sport that offers numerous health benefits. 
                Discover the essentials of swimming, different swimming strokes, and the 
                importance of swimming pools in this comprehensive guide.
                </Typography>
            </StyledSection>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledSection>
                <Typography variant="h6" style={{textTransform: 'uppercase', }}>
                    Running
                </Typography>
                <Typography variant="subtitle1">Popular and effective form of exercise</Typography>
                <Typography variant="body2">
                    Running is a popular and effective form of exercise that offers numerous 
                    health benefits. Whether you're a beginner or a seasoned runner, this page
                    provides tips, training plans, and motivation to help you get started or improve 
                    your running routine.
                </Typography>
            </StyledSection>
          </Grid>
        </Grid>
      </Container>
    </StyledCard>
  );
};

export default CustomCard;
