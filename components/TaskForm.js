import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

export default function TaskForm({ onAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="New Task"
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
}

