import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000', // Укажите ваш базовый URL API
});

export const getPosts = () => api.get(`/posts`);
export const getPostById = (id) => api.get(`/post/${id}`);
export const createPost = (post) => api.post('/post', post);
export const updatePost = (id, post) => api.patch(`/post/${id}`, post);
export const deletePost = (id) => api.delete(`/post/${id}`);

export default api;
