/* import { useEffect, useState } from "react";

export function App() {
    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/repos/EsmirnaM/Receita-style')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])
    
    return (
        <div>
            <ul>
                { repositories.map (repository => {
                 return (
                    <li>
                        <h3>{repository.description}</h3>
                        <p> {repository.description}</p>
                        <a href={repository.html_url} target="_blank">Saiba Mais</a>
                    </li>
                 )
                }) }
            </ul>
        
        </div>
    );
    



} */

export function App() {
    return (
        <div>
            olá mundo,s
        </div>
    )
}