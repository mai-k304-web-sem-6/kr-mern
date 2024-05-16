import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';

export const Home = () => {
  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {[...Array(5)].map(() => (
            <Post
              id={1}
              title="Post1"
              imageUrl=""
              user={{
                avatarUrl:
                  '',
                fullName: 'User',
              }}
              createdAt={'1984'}
              viewsCount={150}
              commentsCount={3}
              tags={['1', '2', '3']}
              isEditable
            />
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={['1', '2', '3']} isLoading={false} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Вася',
                  avatarUrl: '',
                },
                text: '',
              },
              {
                user: {
                  fullName: 'Валера',
                  avatarUrl: '',
                },
                text: '',
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};
