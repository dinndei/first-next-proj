import CardToDo from "@/app/components/CardToDo";
import { getToDoByID } from "@/app/services/todoActions";

const page = async ({ params }: pageProps) => {
    let { todoId } = params;
    console.log("iddddd ", todoId);

    let myTodo = await getToDoByID(todoId);
    console.log("todo ", myTodo);

    if (!myTodo) {
        return <div>Todo not found</div>;
    }
    return (
        <>
            <CardToDo item={myTodo} displayButton={false} />
        </>
    );
}

export default page;