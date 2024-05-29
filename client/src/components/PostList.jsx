import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, CardActions, TextField, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { getPosts } from '../services/api';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('title');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await getPosts();
            let filteredPosts = response.data;

            if (searchTerm) {
                filteredPosts = filteredPosts.filter(post =>
                    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    post.text.toLowerCase().includes(searchTerm.toLowerCase())
                );
            }

            filteredPosts.sort((a, b) => {
                return sortOrder === 'asc' ? a[sortBy].localeCompare(b[sortBy]) : b[sortBy].localeCompare(a[sortBy]);
            });

            setPosts(filteredPosts);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    const handleSearch = () => {
        fetchPosts();
    };

    const handleSortChange = (event) => {
        const value = event.target.value;
        const newSortBy = value.split('-')[0];
        const newSortOrder = value.split('-')[1];

        setSortBy(newSortBy);
        setSortOrder(newSortOrder);
        fetchPosts();
    };

    return (
        <div>
            <Box mb={2}>
                <TextField
                    label="Поиск"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    variant="outlined"
                    fullWidth
                    size="small"
                />
                <Button variant="contained" color="primary" onClick={handleSearch} style={{ marginLeft: '10px' }}>Искать</Button>
            </Box>
            <Box mb={2}>
                <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel>Сортир</InputLabel>
                    <Select value={`${sortBy}-${sortOrder}`} onChange={handleSortChange} label="Sort By">
                        <MenuItem value="title-desc">Заголовок от А до Я</MenuItem>
                        <MenuItem value="title-asc">Заголовок от Я до А</MenuItem>
                    </Select>
                </FormControl>
            </Box>
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
