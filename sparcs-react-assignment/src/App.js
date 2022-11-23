import React, {useState} from 'react';
import './App.css';
import TodoForm from './TodoForm';
import AddTodo from './AddTodo';

function App() {
  const [todolist,setTodolist]=useState([]);
  const [input, setInput]=useState({title: '', content: '', due:'', importance:'중요도'});
  const {title, content, due, importance}=input;
  const [check, setCheck]=useState(['전체','높음','중간','낮음']);
  const [id, setId]=useState(0);

  const writeHandler= (props)=>{
    const {name, value}= props.target;
    setInput({title, content, due, importance, [name]:value})
  };

  const deleteHandler = (props)=>{
    const id=props.target.id;
    setTodolist(todolist.filter((todo)=>(todo.id!==parseInt(id))));
  };

  const saveHandler =()=>{
    if(title===''){
      alert('Title을 작성해주세요');
    }
    else if(importance==='중요도'){
      alert('Importance를 선택해주세요');
    }
    else if(due===''){
      alert('Due Date를 선택해주세요');
    }
    else{
      setId(id+1);
      const todo={id, title, content, due, importance};
      setTodolist(todolist.concat(todo));
      setInput({title: '', content: '', due: '', importance:'중요도'});
    }
  };
  
  const filterHandler = (props)=>{
    const name=props.target.name;
    if(check.includes(name)){
      if(name==='전체'){
        setCheck([]);
      }
      else{
        if(!check.includes('전체')){setCheck(check.filter((fil)=>(fil!==name)));}
        
      }
    }
    else{
      if(name==='전체'){
        setCheck(['전체','높음','중간','낮음']);
      }
      else{
      setCheck(check.concat(name));
      }
    }
  }

  return (
      <>
        <div className="main"><b>Todo List</b></div>
        
        < AddTodo title={title} content={content} due={due} importance={importance} writeHandler={writeHandler} saveHandler={saveHandler} />
        <br/>
        <div className="impo_filter">
          <p>Importance Filter :
          <input type="radio" name="전체" checked={check.includes('전체')} onClick={filterHandler}/>
          <span>전체</span>
          <input type="radio" name="높음" checked={check.includes('높음')} onClick={filterHandler}/>
          <span>높음</span>
          <input type="radio" name="중간"  checked={check.includes('중간')} onClick={filterHandler}/>
          <span>중간</span>
          <input type="radio" name="낮음"  checked={check.includes('낮음')} onClick={filterHandler}/>
          <span>낮음</span>
          </p>
        </div>
        <br/>
        {todolist.filter((todo)=>check.includes(todo.importance)).map((todo)=>
          < TodoForm id={todo.id} title={todo.title} content={todo.content} due={todo.due} importance={todo.importance} key={todo.id} deleteHandler={deleteHandler}/>
        )}
      </>
  );
}

export default App;