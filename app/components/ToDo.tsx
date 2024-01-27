import {Todo} from "@/app/components/types";
import MarkAsDone from "@/app/components/MarkAsDone";

type Props = {
    todo: Todo
    key: number
}
const ToDo = ({todo: {heading, text, id}}:Props) => {
    return <div className="card max-w-xl bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="card-title">{heading}</h2>
            <p>{text}</p>
            <div className="card-actions justify-center">
                <MarkAsDone id={id}/>
            </div>
        </div>
    </div>
};
export default ToDo;
