import Card from "../components/Card";
import projectData from "../assets/data/data";

const ListProjects = () => {
    return (
        <>
            {
                projectData.slice(0).reverse().map((index) => (
                    <Card key = { index.id } items = { index } />
                ))
            }             
        </>
    )
}

export default ListProjects;