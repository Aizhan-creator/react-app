import React from 'react';
import { Title } from './components/Title'
import { ListItem } from './components/ListItem';
import { TaskField } from './components/TaskField';
import {Button} from './components/Button';

function App() {
  const [tasks, setTasks] = React.useState([
    {
      text: 'Milestone 1',
      completed: false,
    },
    {
      text: 'Milestone 2',
      completed: false,
    }
  ]);

  const onToggleCompleted = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, curIdx) =>
        index === curIdx
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  const onRemoveTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, curIdx) => index !== curIdx));
  };

  const onAddTask = (text) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        text,
        completed: false,
      },
    ]);
  };

  return (
    <div className="todo">
      <div className="todo__header">
        <h4>Planner</h4>
      </div>
      <button name="xbutton"/>
      <TaskField onAddTask={onAddTask} />
      <div className="todo__list">
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            index={index}
            text={task.text}
            completed={task.completed}
            onToggleCompleted={onToggleCompleted}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;