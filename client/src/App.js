import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import PostList from './components/PostList';
import Post from './components/Post';
import NewPost from './components/NewPost';
import About from './components/About';

function App() {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                        Пысларь inc.
                    </Typography>
                    <Button component={Link} to="/about" color="inherit">
                        Обо мне
                    </Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/new" element={<NewPost />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
