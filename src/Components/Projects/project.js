import {Link, useParams} from "react-router-dom";
import {ArrowLeftIcon, Avatar, Button, Pane, StatusIndicator, Tab, Tablist, toaster} from "evergreen-ui";
import React, {useState} from 'react';
import Issue from './issues';
import Comment from './comment';
import Information from './informations';
import projects from '../../Data/Project.json';
import users from '../../Data/Users.json';
import Logo from "../../assets/img/logo.png";
import getStatusColor from "../../utils/getStatusColor";
import * as Fetch from "../../tools/Fetch";
import * as fake_projects from "../../Data/Project.json";

export default function Project() {
  const {id} = useParams();
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [tabs] = React.useState(['Informations', 'Issues', 'Comments'])
  const [isLoading, setIsLoading] = useState(true);

  function callProjects () {
    if (localStorage.getItem('projects') && !isLoading) {
      projects = JSON.parse(localStorage.getItem('projects')).default;
    } else {
      Fetch.getProjects()
        .then(data_projects => {
          //       TODO REPLACE fake-user by user after fetch working
          localStorage.setItem('projects', JSON.stringify(fake_projects))
        })
        .catch(e => {
          console.error(e)
          toaster.danger('An error has occurred.')
        })
      setIsLoading(false);
    }
  }

  function checkDom () {
    if (document.readyState === "complete") {
      callProjects();
    } else {
      setTimeout(checkDom, 1000)
    }
  }
  checkDom();

  return (
    <>
      <div className={'container d-flex justify-content-center'}>
        <img src={Logo} alt="" height={50}/>
      </div>
      <Link to={'/projects'}>
        <Button marginTop={16} marginRight={16} appearance="secondary">
          <ArrowLeftIcon />&nbsp;Retour
        </Button>
      </Link>
      <br/>
      <section className={'card'}>
        <div className={'d-flex justify-content-between'}>
          <StatusIndicator color={getStatusColor(projects[id-1].status)}>{projects[id-1].status}</StatusIndicator>
          <span className={'color-grey-500'}>Publié le {projects[id-1].createdAt} par {users[projects[id-1].author].username}
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
              name="Alan Turing"
              size={40}
            />
          </span>
        </div>
        <h2>#{id} {projects[id-1].title}</h2>
        <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
          {tabs.map((tab, index) => (
            <Tab
              key={tab}
              id={tab}
              onSelect={() => setSelectedIndex(index)}
              isSelected={index === selectedIndex}
              aria-controls={`panel-${tab}`}
            >
              {tab}
            </Tab>
          ))}
        </Tablist>
        {tabs.map((tab, index) => (
          <Pane
            key={tab}
            id={`panel-${tab}`}
            role="tabpanel"
            aria-labelledby={tab}
            aria-hidden={index !== selectedIndex}
            display={index === selectedIndex ? 'block' : 'none'}
          >
            {(tab === 'Informations') ? (
              <Information
                title={projects[id-1].name}
                descritpion={projects[id-1].shortDescription}
                createdAt={projects[id-1].createdAt}
                content={projects[id-1].content}
              />
            ) : ""}
            {(tab === 'Issues') ? (
              <Issue projectId={id}/>
            ) : ""}
            {(tab === 'Comments') ? (
              <Comment projectId={id}/>
            ) : ""}
          </Pane>
        ))}
      </section>
    </>
  );
}
