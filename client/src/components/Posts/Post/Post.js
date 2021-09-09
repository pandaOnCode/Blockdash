import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';


const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <div class="card">
            <CardMedia className={classes.media} image={post.selectedFile || 'https://picsum.photos/200/300'} title={post.name} />



            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
                    {/* <MoreHorizIcon fontSize="default" /> */}
                </Button>
            </div>

            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
                    {/* <MoreHorizIcon fontSize="default" /> */}
                </Button>
            </div>

            <Typography className={classes.name} gutterBottom variant="h5" component="h2">{post.name}</Typography>
            <CardContent>

                <Typography variant="body2" color="textSecondary" component="p">{post.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    {/* <DeleteIcon fontSize="small" />  */}
                    Delete
                </Button>
            </CardActions>
        </div>
    )
}

export default Post;