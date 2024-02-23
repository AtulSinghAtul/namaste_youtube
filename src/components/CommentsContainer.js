import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit awet, consectur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit awet, consectur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit awet, consectur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit awet, consectur adip",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum dolor sit awet, consectur adip",
                replies: [
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit awet, consectur adip",
                    replies: [],
                  },
                  {
                    name: "Akshay Saini",
                    text: "Lorem ipsum dolor sit awet, consectur adip",
                    replies: [
                      {
                        name: "Akshay Saini",
                        text: "Lorem ipsum dolor sit awet, consectur adip",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit awet, consectur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit awet, consectur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit awet, consectur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit awet, consectur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit awet, consectur adip",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit awet, consectur adip",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit awet, consectur adip",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum dolor sit awet, consectur adip",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum dolor sit awet, consectur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit awet, consectur adip",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="text-lg font-bold m-5 p-2">
      <h1>Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
