import { Route } from 'react-router-dom';
import AddTodo from './components/addTodo';
import Home from './components/home';
import DetailTodo from './components/DetailTodo';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/addTodo" component={AddTodo}/>
      <Route path="/edit/:id" render={({match}) => <DetailTodo id={match.params.id}/>}/>
      {/* <Route path="/edit/:id" component={DetailTodo}/>  CON USE PARAMS*/} 
    </div>
  );
}

export default App;