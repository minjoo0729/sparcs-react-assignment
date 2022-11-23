import React from 'react';
import './AddTodo.css';

function AddTodo({title, content, due, importance, writeHandler, saveHandler,dueHandler}) {
  
  return (
      <div className="AddTodo">
        <p>Title: <input name="title" onChange={writeHandler} value={title}/></p>
        <p>Content: <input name="content" onChange={writeHandler} value={content}/></p>
        <p>Due Date: <input type="date" name="due" value={due} onChange={writeHandler}/></p>
        <p>Importance: 
        <select onChange={writeHandler} name="importance" value={importance}>
          <option value="선택">선택하세요</option>
          <option value="높음">높음</option>
          <option value="중간">중간</option>
          <option value="낮음">낮음</option>
        </select>
        </p>
        <button onClick={saveHandler} >Add Todo</button>
      </div>
  );
}

export default AddTodo;