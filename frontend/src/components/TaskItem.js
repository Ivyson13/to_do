import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const handleCompleteChange = async () => {
    const response = await axios.put(process.env.REACT_APP_API_URL + `/tasks/${task.id}`, {
      ...task,
      completed: !task.completed
    });
    updateTask(response.data);
  };

  const handleDelete = async () => {
    await axios.delete(process.env.REACT_APP_API_URL + `/tasks/${task.id}`);
    deleteTask(task.id);
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCompleteChange}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
