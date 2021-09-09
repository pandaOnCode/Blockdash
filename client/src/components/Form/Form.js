import React, { useState, useEffect } from 'react';

import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';



const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ name: '', description: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((description) => description._id === currentId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({ name: '', tags: '', selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
        } else {
            dispatch(updatePost(currentId, postData));
            clear();
        }
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate={classes.form} className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Collection'}</Typography>
                <TextField
                    name="name"
                    variant="outline"
                    label="Name"
                    fullWidth
                    value={postData.name}
                    onChange={(e) => setPostData({
                        ...postData, name: e.target.value
                    })}
                />
                <TextField
                    name="description"
                    variant="outline"
                    label="Description"
                    fullWidth
                    value={postData.description}
                    onChange={(e) => setPostData({
                        ...postData, description: e.target.value
                    })}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </div>
            </form>
        </Paper>
    )
}

export default Form;