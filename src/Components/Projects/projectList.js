import {Alert, Button, Dialog, Pane, Spinner, Table, toaster} from "evergreen-ui";
import {Link, useNavigate} from "react-router-dom";
import * as Fetch from "../../tools/Fetch";
import {useState} from "react";

export default function ProjectList() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  let projects = [];

  function callProjects () {
    if (localStorage.getItem('projects') && !isLoading) {
      if (localStorage.getItem('project')) {
        projects = localStorage.getItem('projects');
      }
    } else {
      Fetch.getProjects()
        .then(data_projects => {
          if (data_projects !== undefined) {
            localStorage.setItem('projects', JSON.stringify(data_projects))
            projects = data_projects;
          }
        })
        .catch(e => {
          console.error(e)
          toaster.danger('Une erreur est survenue.')
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
    <section className={"container"}>
      <h1>Project List</h1>
      <section>
        <Button marginRight={16} appearance="secondary" intent="none" onClick={(e) => navigate('/settings')}>
          Paramètres
        </Button>
        <Button marginRight={16} appearance="primary" intent="success" onClick={(e) => navigate('/dashboard')}>
          Tableau de bord
        </Button>
      </section>
      <br/>
    <Table>
      <Table.Head>
        <Table.SearchHeaderCell />
        <Table.TextHeaderCell>Description</Table.TextHeaderCell>
        <Table.TextHeaderCell>Dernière activités</Table.TextHeaderCell>
        <Table.TextHeaderCell>commentaires</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={240}>
        { isLoading ? (
          <Spinner />
        ) : (
          projects.length > 0 ? (
            projects.map((project) => (
              <Link to={'/project/' + project.id}>
                <Table.Row key={project.id} isSelectable>
                  <Table.TextCell>{project.name}</Table.TextCell>
                  <Table.TextCell>{project.shortDescription}</Table.TextCell>
                  <Table.TextCell>{project.updatedAt}</Table.TextCell>
                  <Table.TextCell isNumber>{project.comment}</Table.TextCell>
                </Table.Row>
              </Link>
            ))
          ) : (
            <Alert
              intent="none"
              title="Pas encore de project créé. Soyez le premier."
              marginBottom={32}
            />
          )

        )}
      </Table.Body>
    </Table>
    </section>
    );
  }
