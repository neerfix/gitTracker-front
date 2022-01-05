import React, {useState} from 'react';
import {Button, TextInput, toaster} from "evergreen-ui";
import * as Fetch from '../../tools/Fetch';
import {useNavigate} from "react-router-dom";

export default function FormAddIssues({projectId, authorId}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [criticity, setCriticity] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);

        Fetch.addIssue(title, content, criticity, authorId, projectId, new Date.now(), new Date.now())
            .then(issue => {
                console.log(issue)
                toaster.success('Your issue have been created');
                navigate("/projects/" + projectId.toString());
            })
            .catch(e => {
                console.error(e)
                toaster.danger('An error has occurred.')
            })
        setIsLoading(false);

    };

    return (
        <>
            <form className={'d-flex justify-content-center align-items-center flex-column'} onSubmit={handleSubmit}>
                <TextInput type='text' name="title" placeholder="gitTracker issue" value={title}
                           onChange={(e) => setTitle(e.target.value)}/>
                <TextInput type='text' name="content" placeholder="content..." value={content}
                           onChange={(e) => setContent(e.target.value)}/>
                <TextInput type='text' name="criticity" placeholder="criticity" value={criticity}
                           onChange={(e) => setCriticity(e.target.value)}/>
                <Button type="submit" marginRight={16} marginTop={16} appearance="primary" isLoading={isLoading}
                        className='m-1'>
                    Add issue
                </Button>
            </form>
        </>
    );
}
