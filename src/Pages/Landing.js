import React from 'react';
import home from "../assets/img/home.png";
import {Button, Dialog, Pane, Tab, Tablist} from "evergreen-ui";
import {GithubLoginButton} from "react-social-login-buttons";
import FormLogin from "../Components/FormLogin";
import FormRegister from "../Components/FormRegister";
const features = [
  {
    title: "Projet Github",
    description: "Connectez votre repository github.",
    id: "github"
  },
  {
    title: "Suggestions",
    description: "Récupérez les suggestions sur GitTacker, acceptez-les, recevez-les sur votre repository github privée.",
    id: "issues"
  },
  {
    title: "Commentaires",
    description: "Récoltez des commentaires pour partager les retours d'expérience et les avis.",
    id: "comments"
  }
];

export default function Landing () {
  const [isShown, setIsShown] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [tabs] = React.useState(['Se connecter', 'S\'inscrire'])
  return (
    <>
      <Dialog
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        confirmLabel={tabs[selectedIndex]}
      >
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
            <Pane>
              <h3>{tab} par email</h3>
              {tab === 'Se connecter' ? (
                <FormLogin />
              ) : (
                <FormRegister />
              )}
            </Pane>
            <Pane>
              <h3>{tab} par Github</h3>
              <p></p>
              <GithubLoginButton
                onClick={() => alert("Hello")}
                text={tab + " avec github"} />
            </Pane>
          </Pane>
        ))}
      </Dialog>
      <div className={'landing-page'}>
        <img src={home} alt="" className={'logo-homepage'}/>
      </div>
      {features.map((feature) => (
        <div className={'landing-paraph'} id={feature.id}>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </div>
      ))}
      <div className={'landing-button-action'}>
        <Button onClick={ function() {
          setIsShown(true)
          setSelectedIndex(0)
        }
        }>Se connecter</Button>
        <Button onClick={ function() {
          setIsShown(true)
          setSelectedIndex(1)
        }} appearance="primary">S'inscrire</Button>
      </div>
    </>
  );

}
