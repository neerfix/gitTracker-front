import {Spinner, Table, toaster} from "evergreen-ui";
import {Link} from "react-router-dom";
import * as fake_projects from '../../Data/Project.json';
import * as Fetch from "../../tools/Fetch";
import {useState} from "react";

export default function ProjectList() {
  let projects = JSON.parse(localStorage.getItem('projects')).default ?? [];
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
    <section className={"container"}>
      <h1>Project List</h1>
    <Table>
      <Table.Head>
        <Table.SearchHeaderCell />
        <Table.TextHeaderCell>Description</Table.TextHeaderCell>
        <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
        <Table.TextHeaderCell>comment</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={240}>
        { isLoading ? (
          <Spinner />
        ) : (
          projects.length > 1 ? (
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
            <Spinner />
          )

        )}
      </Table.Body>
    </Table>
    </section>
    );
  }
