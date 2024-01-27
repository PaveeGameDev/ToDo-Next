export async function markToDoAs(toDoId:number, active: boolean = false) {
    try {

        const response = await fetch('api/todo/markas', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: toDoId, active: !active }),
        });
        const data = await response.json();
        console.log(data); // Handle the response data as needed
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}