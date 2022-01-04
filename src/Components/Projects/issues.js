import {Badge, Pane, Paragraph, StatusIndicator} from "evergreen-ui";
import React from 'react';
import issues from '../../Data/Issues.json';
import getStatusColor from "../../utils/getStatusColor";
import getTypeColor from "../../utils/getTypeColor";
import getSeverityColor from "../../utils/getSeverityColor";

export default function Issue() {
  return (
    <section className={'w-100'}>
      <Paragraph>
        {issues.map(({ id, title, description, author, status, type, severity}) => (
          <Pane
            id={id}
            elevation={2}
            width="93%"
            minHeight={120}
            margin={24}
            padding={15}
          >
            <StatusIndicator color={getStatusColor(status)}>{status}</StatusIndicator>
            &nbsp;
            &nbsp;
            <Badge color={getTypeColor(type)} marginRight={8}>
              {type}
            </Badge>
            {severity ? (
              <Badge color={getSeverityColor(severity)} marginRight={8}>
                {severity}
              </Badge>
            ) : ""}
            <h6>{title}</h6>
            <Paragraph>
              {description}
            </Paragraph>
          </Pane>
          )
        )}
      </Paragraph>
    </section>
  );
}
