import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { getPosts } from '../services/api';

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await getPosts();
            setPosts(response.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    return (
        <div>
            <h1>Посты</h1>
            <Grid container spacing={4}>
                {posts.map(post => (
                    <Grid item key={post._id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.text}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button component={Link} to={`/post/${post._id}`} size="small">Подробнее</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button component={Link} to="/new" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                Добавить новый пост
            </Button>
        </div>
    );
}

export default PostList;
