import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../reducer/actions";
import { Link } from 'react-router-dom'


function AddTodo({ addTodo }) {
    const [todo, setTodo] = React.useState({
        title: "",
        description: "",
    })
    function handleSubmit(e) {
        e.preventDefault();
        addTodo(todo)
        // setTodo({
        //     title: "",
        //     description: "",
        // })
    }


    function handleChange(e) {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }
    return (<div>
        <Link to="/">Home</Link>
        <form type="submit" onSubmit={handleSubmit}>
            {/* <label>Title</label> */}
            <input name="title" onChange={handleChange} placeholder="Title" value={todo.title} />
            <textarea name="description" onChange={handleChange} placeholder="Description" value={todo.description} />
            <input type="submit" name="agregar todo" />
        </form>
    </div>);
}
function mapDispatchToProps(dispatch) {
    return {
        addTodo: todo => dispatch(addTodo(todo)),
    };
}
export default connect(null, mapDispatchToProps)(AddTodo)