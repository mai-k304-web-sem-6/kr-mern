import React from 'react';
import { Typography, Container, Paper, Box, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function About() {
    return (
        <Container maxWidth="md" style={{ marginTop: '40px' }}>
            <Paper style={{ padding: '20px' }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Avatar style={{ width: '100px', height: '100px', marginBottom: '20px' }}>
                        <PersonIcon style={{ fontSize: '50px' }} />
                    </Avatar>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Обо мне
                    </Typography>
                    <Typography variant="body1" align="center" paragraph>
                        Привет! Я страстный веб-разработчик, глубоко заинтересованный в создании динамичных и привлекательных веб-приложений. Имея опыт разработки как интерфейсов, так и серверной части, я оттачивал свои навыки в различных технологиях и фреймворках.                    </Typography>
                    <Typography variant="body1" align="center" paragraph>
                        Это приложение для ведения блога - один из моих последних проектов, разработанный для обеспечения простого и интуитивно понятного интерфейса пользователя при создании, просмотре, редактировании и удалении записей. Построен с помощью React и материал-интерфейс на сайте, и Node.js бэкэнд MongoDB для хранения данных, это приложение демонстрирует свою способность к интеграции современных веб-технологий в сплоченную и работоспособную систему.                    </Typography>
                    <Typography variant="body1" align="center" paragraph>
                        Моя цель - постоянно учиться и расти как разработчика, берясь за сложные проекты, которые расширяют границы возможного с помощью веб-технологий. Спасибо, что посетили мой блог, и я надеюсь, что вы найдете его содержание информативным и вдохновляющим.                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}

export default About;
