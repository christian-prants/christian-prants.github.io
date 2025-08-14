import { useEffect, useState } from "react";

import fetchProject from "../api/projects";
import Card from "../components/card";

import '../styles/main.scss';
import '../styles/components/card.scss';


const Project = () => {
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProject().then(data => {
            setProject(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Carregando...</p>;

    return (
        <div className="main">
            <section className="excerpt">   
                <h2>Christian Prants</h2>
                <span>Autistic, Developer, Designer</span>   
                <p>               
                    Coding to deliver secure, performant and user-friendly solutions.
                </p>
            </section>

            <section>
                {
                    project.map(info => (
                        <Card info={ info } />

                        /*
                        <li key={info.name}>
                            <img src={info.openGraphImageUrl} alt={info.name} width="300" />

                            <h3>{info.name}</h3>
                            <p>{info.description}</p>
                            <a href={info.url} target="_blank" rel="noopener noreferrer">
                                Ver no GitHub
                            </a>
                        </li>
                        */
                    ))
                }   
            </section>
        </div>
    )
}

export default Project;