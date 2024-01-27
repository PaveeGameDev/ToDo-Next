'use client'

type Props = {
    id: number
}

const MarkAsDone = ({id}: Props) => {
    return <button onClick={()=>console.log(`Number ${id} done`)} className="btn btn-primary">Mark as done</button>
};
export default MarkAsDone;
