import React, {useState} from "react";
import Logo from "../assets/img/logo.png";
import {ArrowLeftIcon, Button, Dialog, Pane} from "evergreen-ui";
import {Link, useNavigate} from "react-router-dom";
import FormAddProject from '../Components/form/FormAddProject'

export function ProjectDashboard () {
  const navigate = useNavigate();
  const [isShown, setIsShown] = React.useState(false)

  return (
    <>
      <div className={'container d-flex justify-content-center'}>
        <img src={Logo} alt="" height={100}/>
      </div>
      <Link to={'/projects'}>
        <Button marginTop={16} marginRight={16} appearance="secondary">
          <ArrowLeftIcon/>&nbsp;Retour
        </Button>
      </Link>

      <section className={'container'}>
        <h1>Tableau de bord</h1>
        <Pane background="tint1" padding={24} marginBottom={16}>
          {(localStorage.getItem('github_token')) ? (
            <>
              <Button marginTop={16} marginRight={16} appearance="secondary" onClick={() => setIsShown(true)}>
                <ArrowLeftIcon />&nbsp;Ajouter un projet
              </Button>
            </>
          ) : (
            <>
              <p>Pour profiter pleinement de l'application et des avantages du GitTrackerIssues, nous vous recommandons
                de vous connectez avec github.</p>
              <Button
                appearance="primary"
                onClick={() => navigate('/settings')}
              >se connecter avec github</Button>
            </>
          )
          }
        </Pane>
        <Dialog
          isShown={isShown}
          title="Create Project"
          onCloseComplete={() => setIsShown(false)}
          confirmLabel="Custom Label"
        >
          <FormAddProject/>
        </Dialog>
      </section>

    </>
  )
}
