import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/api';
import { TextField, Button, Container, Paper } from '@mui/material';

function NewPost() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPost({ title, text });
            navigate('/');
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <Container>
            <Paper style={{ padding: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Title"
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Text"
                        fullWidth
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        margin="normal"
                        multiline
                        rows={4}
                    />
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
                        Add Post
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}

export default NewPost;
