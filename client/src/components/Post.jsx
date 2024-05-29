import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, updatePost, deletePost } from '../services/api';
import { Typography, TextField, Button, Container, Paper } from '@mui/material';

function Post() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const fetchPost = useCallback(async () => {
        try {
            const response = await getPostById(id);
            setPost(response.data);
            setTitle(response.data.title || '');
            setText(response.data.text || '');
        } catch (error) {
            console.error("Error fetching post:", error);
        }
    }, [id]);

    useEffect(() => {
        fetchPost();
    }, [fetchPost]);

    const handleUpdate = async () => {
        try {
            const updatedPost = await updatePost(id, { title, text });
            setPost(updatedPost.data);
            setEditMode(false);
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    const handleDelete = async () => {
        try {
            await deletePost(id);
            navigate('/');
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    if (!post) return <div>Обождите...</div>;

    return (
        <Container>
            {editMode ? (
                <Paper style={{ padding: '20px' }}>
                    <TextField
                        label="Заголовок"
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Текст"
                        fullWidth
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        margin="normal"
                        multiline
                        rows={4}
                    />
                    <Button onClick={handleUpdate} variant="contained" color="primary" style={{ marginTop: '10px' }}>
                        Сохранить
                    </Button>
                </Paper>
            ) : (
                <Paper style={{ padding: '20px' }}>
                    <Typography variant="h4" component="h1">
                        {post.title}
                    </Typography>
                    <Typography variant="body1" component="p" style={{ marginTop: '10px' }}>
                        {post.text}
                    </Typography>
                    <Button onClick={() => setEditMode(true)} variant="contained" color="primary" style={{ marginTop: '10px' }}>
                        Изменить
                    </Button>
                    <Button onClick={handleDelete} variant="contained" color="secondary" style={{ marginTop: '10px', marginLeft: '10px' }}>
                        Удалить
                    </Button>
                </Paper>
            )}
        </Container>
    );
}

export default Post;
