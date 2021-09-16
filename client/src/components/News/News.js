import React, { useState, useEffect } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core/';

import axios from "axios";


import useStyles from './styles';
function News() {
    const [news, setNews] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        const loadNews = async () => {
            const response = await axios.get(
                "https://newsapi.org/v2/top-headlines?q=crypto&apiKey=6d71f1e8d08c495fa769ba13fcb61c4c"
            );
            setNews(response.data.articles);
        };
        loadNews();
    }, []);

    console.log("news", news);

    return (

        <div className="App">
            <Typography variant="h4" className={classes.newsHead} >Trending</Typography>
            {news &&
                news.map((item, index) => {

                    return (

                        <Grid key={item._id} item md={12}>

                            <Card className={classes.card} spacing={3}>
                                <CardMedia className={classes.media} image={item.urlToImage || 'https://picsum.photos/200/300'} />
                                <CardContent>
                                    <Typography className={classes.title} gutterBottom variant="h5" component="h2">{item.title}</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">{item.content}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" target="_blank" href={item.url}>Read More</Button>
                                </CardActions>
                            </Card>

                        </Grid>



                    );


                })}


        </div >
    );
}

export default News;