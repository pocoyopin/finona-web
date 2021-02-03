import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import ProductCard from './ProductCard'

import './Product.css'

const cookie_list = [{
    image_name: 'cookie-test',
    name: 'Kastengel',
    ingredients: 'Lorem ipsum dolor sit amet'
},
{
    image_name: 'cookie-test',
    name: 'Nastar',
    ingredients: 'Lorem ipsum dolor sit amet'
},
{
    image_name: 'cookie-test',
    name: 'Putri Salju',
    ingredients: 'Lorem ipsum dolor sit amet'
},
{
    image_name: 'cookie-test',
    name: 'Sagu Keju',
    ingredients: 'Lorem ipsum dolor sit amet'
},
{
    image_name: 'cookie-test',
    name: 'Lidah Kucing',
    ingredients: 'Lorem ipsum dolor sit amet'
},
{
    image_name: 'cookie-test',
    name: 'Semprit Coklat',
    ingredients: 'Lorem ipsum dolor sit amet'
},
{
    image_name: 'cookie-test',
    name: 'Kastengel',
    ingredients: 'Lorem ipsum dolor sit amet'
},
{
    image_name: 'cookie-test',
    name: 'Nastar',
    ingredients: 'Lorem ipsum dolor sit amet'
},
{
    image_name: 'cookie-test',
    name: 'Nastar',
    ingredients: 'Lorem ipsum dolor sit amet'
},
{
    image_name: 'cookie-test',
    name: 'Nastar',
    ingredients: 'Lorem ipsum dolor sit amet'
},]

const Product = () => {
    return (
        <div>
            <Typography variant='h4' component='h1' className='title'>Our Products</Typography>
            <Typography variant='h6' component='h2' className='subtitle'>This is a list of our products. Price indicated for each product is for 1 box (250gr).</Typography>
            <Grid container className='grid-container' spacing={5}>
                {cookie_list.map(cookie => 
                    <Grid item xs sm md lg>
                        <ProductCard image_name={cookie.image_name} name={cookie.name} ingredients={cookie.ingredients} />
                    </Grid>
                )}
            </Grid>
        </div>
    );
};

export default Product;