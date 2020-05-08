import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SimpleCard from '../components/exampleCard';
import { Container } from '@material-ui/core';
import GoatCard from '../components/goatCard';

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  }
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
        <SimpleCard/>
        <GoatCard/>
    </Container>
  );
}

export default HomePage;