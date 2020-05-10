//This is an example component so you can get things going and take a look at some of Material-UIs features.
//You should probably delete or modify this to start your project! 
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader, CardMedia, LinearProgress, CircularProgress } from '@material-ui/core';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { IAppState } from '../store/store';
import { loadDogAction } from '../actions/dogActions';

const useStyles = makeStyles({
  root: {
    minWidth: 500,
    minHeight: 500,
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40%'
  },
  image: {
    height: 0,
    paddingTop: '0%'
  },
  img: {
    width: 500,
    height: 500
  }
});

export default function DogCard() {
  const classes = useStyles();
  const dogTest = useSelector((state: IAppState) => state.dogState.image);
  const loading = useSelector((state: IAppState) => state.dogState.loading);
  const dispatch = useDispatch();

  const cardImage = (src: string) => 
    <CardMedia className={classes.image}>
      <img className={classes.img} onLoad={() => dispatch(loadDogAction(false))} src={src}></img>
    </CardMedia>

  return (
    <Card className={classes.root}>
        {dogTest? cardImage(dogTest) : ''}
        <CardContent className={classes.cardContent}>
        {!loading && !dogTest? <p>test</p> : ''}
        {loading? <CircularProgress size="80px" color="primary"></CircularProgress> : ''}
        </CardContent>
    </Card>
  );
}