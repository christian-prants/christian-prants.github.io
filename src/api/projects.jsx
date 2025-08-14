const fetchProject = async () => {
    const response = await fetch("/project.json");

    if (!response.ok) {
        throw new Error("Error loading project list.");
    }

    return await response.json();
}

export default fetchProject;