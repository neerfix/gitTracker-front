import { Paragraph } from "evergreen-ui";
import React from 'react';
import comments from '../../Data/Comments.json';

export default function Comment() {
  return (
    <>
      <Paragraph>
        {comments.map(({ id, title, description, comment, lastActivity}) => (
          <div id={id}>
            <h2>{title}</h2>
            <Paragraph>
              {description}
            </Paragraph>
          </div>
          )
        )}
      </Paragraph>
    </>
  );
}
