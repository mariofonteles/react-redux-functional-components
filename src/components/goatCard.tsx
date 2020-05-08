//This is an example component so you can get things going and take a look at some of Material-UIs features.
//You should probably delete or modify this to start your project! 
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 275,
    alignSelf: 'middle',
    justifySelf: 'end'
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5vh'
  },
  button: {
    height: '7vh'
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

export default function GoatCard() {
  const classes = useStyles();

  const header = <Typography variant="h5" component="h2">
  Click to get a dog
</Typography>

    const [dog, setDog] = useState('');

    useEffect( () => {
        fetch('https://dog.ceo/api/breed/pug/images/random').then( async (response: any) => {
        let result = await response.json()
        return setDog(result.message);
    })}, []);

  return (
    <Card className={classes.root}>
        <img src={dog}/>
    </Card>
  );
}