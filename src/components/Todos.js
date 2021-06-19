import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Todo from './Todo';


export function Todos(props) {

  useEffect(() => {

  })

  return (
    <div>
      <span>{props.status}</span>
      {props.estado ? props.estado.filter(el => el.status.toLowerCase() === props.status.toLowerCase()).map(e =>
      <Link to={`/edit/${e.id}`}>
        <Todo title={e.title} />
      </Link>
      ):<h1>cargando</h1>}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {estado:state};
}

export default connect(mapStateToProps)(Todos);