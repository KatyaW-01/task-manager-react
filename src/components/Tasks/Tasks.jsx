import Card from "../Card/Card";
import "./Tasks.css"

function Tasks({ tasks }) {
  const taskCards = tasks.map((task)=>{
    return <Card title={task.title} description={task.description} id={task.id} key={task.id} />;
  });
  return <div className="tasks-container">{taskCards}</div>;
}

export default Tasks;