import { useEffect } from 'react'
import { connect } from 'react-redux'
// import { useParams } from 'react-router'

function DetailTodo(props){

    // let params = useParams()

    useEffect(()=>{
        console.log(props.id)
        console.log(props.state)
    })

    return(
        <div>
            {
                // props.state ? props.state.filter( el => el.id === parseInt(params.id)).map( e 
                props.state ? props.state.filter( el => el.id === parseInt(props.id)).map( e => <div>
                    <h1>{e.title}</h1>
                    <p>{e.description}</p>
                </div>) : <h1>cargando</h1>
            }
        </div>
    )
}

function mapStateToProps(state){
    return {
        state: state,
    }
}



export default connect(mapStateToProps)(DetailTodo)
