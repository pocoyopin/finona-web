import React from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core'

import './ProductCard.css'

const requestImageFile = require.context('../images', true, /.jpg$/)

const ProductCard = (props) => {
    return (
        <Card className='card'>
            <CardMedia className='media' image={requestImageFile(`./${props.image_name}.jpg`)} title={props.name} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.ingredients}
                </Typography>
            </CardContent>

            {props.canOrder &&
            <CardActions>
                <Button size="small" color="primary">
                    Order
                </Button>
            </CardActions>
            }
        </Card>
    );
};

export default ProductCard;