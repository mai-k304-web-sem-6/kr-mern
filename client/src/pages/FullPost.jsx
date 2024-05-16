import React from "react";

import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";

export const FullPost = () => {
  return (
    <>
      <Post
        id={1}
        title="Post 1"
        imageUrl=""
        user={{
          avatarUrl:
            "",
          fullName: "User",
        }}
        createdAt={"1984"}
        viewsCount={150}
        commentsCount={3}
        tags={["1", "2", "3"]}
        isFullPost
      >
        <p>

        </p>
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Вася",
              avatarUrl: "",
            },
            text: "",
          },
          {
            user: {
              fullName: "Иван Иванов",
              avatarUrl: "",
            },
            text: "",
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};
