import { api } from '~/utils/api';
import Todo from './Todo';

const Todos = () => {
  const { data: todos, isLoading, isError } = api.todo.all.useQuery()

  if (isLoading) return <div>Loading Todos</div>
  if (isError) return <div>Error fetching Todos</div>

  return ( 
  <>
    {todos.length ? todos.map((todo) => {
      return <Todo key={todo.id} todo={todo} />
    }): 'create your first todo'
    }
  </> );
}
 
export default Todos;