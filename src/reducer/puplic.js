import {API_SELLER_LIST} from './../constants/api'

const INITIAL_STATE = {
    homeInfo: {},
    searchCount: 0,
    pin: [],
    recommend: []
  }

export default function puplic(state = INITIAL_STATE, action) {
  console.log(state);
  console.log(action);
    switch(action.type) {
      case API_SELLER_LIST: {
        return {
          ...state,
          homeInfo: action.payload
        }
      }
      default:
        return state
    }
}
// const puplic = (state = INITIAL_STATE, action) =>{
//     switch(action.type) {
//       case API_SELLER_LIST: {
//         return {
//           ...state,
//           homeInfo: action.payload
//         }
//       }
//       default:
//         return state
//     }
// }
// const mapStateToProps = state => ({
//     todos: puplic(state.todos, state.visibilityFilter)
// })
// const getVisibleTodos = (todos, filter) => {
//     switch (filter) {
//       case 'SHOW_COMPLETED':
//         return todos.filter(t => t.completed)
//       case 'SHOW_ACTIVE':
//         return todos.filter(t => !t.completed)
//       case 'SHOW_ALL':
//       default:
//         return todos
//     }
//   }
  
//   const mapStateToProps = state => ({
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   })
  
//   const mapDispatchToProps = dispatch => ({
//     toggleTodo: id => dispatch(toggleTodo(id))
//   })
  
//   export default connect(mapStateToProps,{ ...actions})(TodoList)