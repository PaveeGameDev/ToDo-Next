'use client'

import {markToDoAs} from '@/functions/markToDoAs'
import {useRouter} from "next/navigation";

type Props = {
    id: number,
    active?: boolean
}
const MarkAsDone = ({id, active = false}: Props) => {

    const router = useRouter();
    const refreshPage = () => {
        router.refresh();
    };
    const click = async ()=> {
        await markToDoAs(id, active);
        refreshPage()
    }
    if(active) return <button onClick={click} className="btn btn-primary">Mark as undone</button>
    return <button onClick={click} className="btn btn-primary">Mark as done</button>
};
export default MarkAsDone;
