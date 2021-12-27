import {Table} from "evergreen-ui";
import {Link} from "react-router-dom";
import projects from '../../Data/Project.json';

function ProjectList() {
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
        {projects.map((project) => (
          <Link to={'/project/' + project.id}>
            <Table.Row key={project.id} isSelectable>
              <Table.TextCell>{project.title}</Table.TextCell>
              <Table.TextCell>{project.description}</Table.TextCell>
              <Table.TextCell>{project.lastActivity}</Table.TextCell>
              <Table.TextCell isNumber>{project.comment}</Table.TextCell>
            </Table.Row>
          </Link>
        ))}
      </Table.Body>
    </Table>
    </section>
    );
  }

export default ProjectList;
