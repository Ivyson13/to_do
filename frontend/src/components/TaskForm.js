import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ addTask }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(process.env.REACT_APP_API_URL + '/tasks', {
      description,
      completed: false
    });
    addTask(response.data);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
