import {Todo} from "@/app/components/types";
import ToDo from "@/app/components/ToDo";

type Props = {
    todos: Todo[]
}

const DisplayToDos = ({todos}:Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {todos.filter((todo) => !todo.isDone)
                .map(displayedTodo => <ToDo todo={displayedTodo} key={displayedTodo.id}/>)}
        </div>
    );
};

export default DisplayToDos;
