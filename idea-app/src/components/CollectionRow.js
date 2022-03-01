import React from 'react';
import { GoMarkGithub } from "react-icons/go";

const callMicroService = () => {
    fetch('/micro')
}

function CollectionRow({ element }) {
    return (
        <tr>
            <td>{element.idea}</td>
            <td>{element.creator}</td>
            <td style={{ textAlign: "center" }}><GoMarkGithub onClick={callMicroService} id='icon'/></td>
        </tr>
    )
}

export default CollectionRow