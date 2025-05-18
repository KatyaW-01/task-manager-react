import Card from "../Card/Card";
import "./Tasks.css"

function Tasks(props) {
  const { name } = props;
  return (
    <div className="tasks-container">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Tasks;