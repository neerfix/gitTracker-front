import React, {useState} from "react";
import Logo from "../assets/img/logo.png";
import {ArrowLeftIcon, Button, Pane, TextInput} from "evergreen-ui";
import {Link} from "react-router-dom";
import {GithubLoginButton} from "react-social-login-buttons";

export function Settings () {
  const [githubToken, setGithubToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    alert('hello');
    localStorage.setItem("github_token", 'ght_fake-token')
  };

  return (
  <>
    <div className={'container d-flex justify-content-center'}>
      <img src={Logo} alt="" height={100}/>
    </div>
    <Link to={'/projects'}>
      <Button marginTop={16} marginRight={16} appearance="secondary">
        <ArrowLeftIcon />&nbsp;Retour
      </Button>
    </Link>

    <section className={'container'}>
      <h1>Paramètres</h1>
      <Pane background="tint1" padding={24} marginBottom={16}>
        {(localStorage.getItem('github_token')) ? (
            <TextInput type='text' name="github_token" placeholder="ght_***********" value={githubToken} onChange={(e) => setGithubToken(e.target.value)} disabled={true}/>
        ) : (
          <>
            <p>Pour profiter pleinement de l'application et des avantages du GitTrackerIssues, nous vous recommandons de vous connectez avec github.</p>
            <GithubLoginButton
            onClick={handleSubmit}
            text={"se connecter avec github"} />
          </>
          )
        }
        {/*TODO github Login*/}
      </Pane>
    </section>

  </>
)
}
