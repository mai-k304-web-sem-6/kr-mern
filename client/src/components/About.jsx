import React from 'react';
import { Typography, Box } from '@mui/material';

function About() {
    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>
                Обо мне
            </Typography>
            <Typography variant="body1" paragraph>
                Здравствуйте! Меня зовут Александр Пысларь я студент МАИ группы М3О-310Б-21 и я разработчик программного обеспечения с опытом работы в области веб-разработки.
            </Typography>
            <Typography variant="body1" paragraph>
                Этот проект - моя попытка создать сервис для публикации и управления постами. Он создан с использованием технологий JavaScript (ReactJS для фронтенда и Node.js с фреймворком Express.js для бэкенда), а база данных MongoDB используется для хранения постов.
            </Typography>
            <Typography variant="body1" paragraph>
                Сервис позволяет пользователям создавать, просматривать, обновлять и удалять посты, а также осуществлять поиск постов по заголовку и тексту. Мы также добавили возможность сортировки постов по алфавиту.
            </Typography>
            <Typography variant="body1" paragraph>
                Мы стараемся делать этот сервис максимально удобным и функциональным для пользователей, и мы надеемся, что он будет полезен для вас!
            </Typography>
        </Box>
    );
}

export default About;
