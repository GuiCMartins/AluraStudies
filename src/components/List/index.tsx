import style from "./List.module.scss";
import Item from "./Item";
import ITask from "../../types/ITask";

interface Props {
  tasks: ITask[];
  selectTask: (Selectedtask: ITask) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map((item) => {
          return <Item selectTask={selectTask} key={item.id} {...item} />;
        })}
      </ul>
    </aside>
  );
}

export default List;
