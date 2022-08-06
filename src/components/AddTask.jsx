import React from 'react';

import "./AddTask.css";
import Button from './Button';

const AddTask = () => {
    return (
        <div className="add-task-container">
            <input className="add-task-input" type="text" />
            <Button>
                Adicionar
            </Button>
        </div>
    );
};
 
export default AddTask;
