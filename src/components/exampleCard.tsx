//This is an example component so you can get things going and take a look at some of Material-UIs features.
//You should probably delete or modify this to start your project! 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { DogActionTypes, RandomDogAction } from '../actions/dogActions';

const useStyles = makeStyles({
  root: {
    width: 275,
    height: 275,
    alignSelf: 'middle',
    justifySelf: 'start'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2vh'
  },
  button: {
    marginTop: '10px',
    height: '7vh',
    width: '90%'
  },
  input: {
    width: '90%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const header = <Typography variant="h5" component="h2">Find Doggo</Typography>;
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardHeader title={header}>
      </CardHeader>
      <CardContent className={classes.content}>
        <TextField className={classes.input} label="Type a dog breed..." variant="outlined"></TextField>
        <Button onClick={() => { debugger; dispatch(RandomDogAction())}} className={classes.button} variant="contained" size="large" color="primary"> 
          get random dog
        </Button>
      </CardContent>
    </Card>
  );
}