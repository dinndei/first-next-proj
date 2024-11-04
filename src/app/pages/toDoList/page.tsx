import CardToDo from "@/app/components/CardToDo";
import { getToDos } from "@/app/services/todoActions";

const page = async () => {

    const todos: todo[] = await getToDos();
   
    return (
        <div>
            {todos.map((item: todo, index: number) => {
                return <CardToDo item={item} />
            })}
        </div>
    );
}

export default page;