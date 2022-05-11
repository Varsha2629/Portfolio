const Projects = ({projects}) => {
    return (
        <>
            {projects.map((ele) => {
                <h3 key={ele.id}>{ele.title}</h3>
            })}       
        </>
      )
  
  
}
export default Projects;