'use client'
import { FormEvent, useState, useRef } from "react";
import {useRouter} from "next/navigation";

const AddToDo = () => {
    const [isSuccess, setSuccess] = useState<boolean | undefined>();
    const formRef = useRef<HTMLFormElement>(null); // Create a ref for the form

    const router = useRouter();
    const refreshPage = () => {
        router.refresh();
    };

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            const jsonBody = {
                title: formData.get('title'),
                text: formData.get('text')
            };

            const response = await fetch('api/todo/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonBody),
            });

            const data = await response.json();
            if (Object.keys(data).length === 0) {
                setSuccess(true);
            } else {
                setSuccess(false);
            }
        } catch (error) {
            console.error(error);
            setSuccess(false);
        } finally {
            if (formRef.current) {
                formRef.current.reset(); // Clear the form
                router.refresh()
            }
        }
    }

    return (
        <div className="flex justify-center">
            <div className="card max-w-96 bg-primary-content/80 shadow-xl">
                <form ref={formRef} onSubmit={onSubmit} className="card-body items-center text-center">
                    <h2 className="card-title">Title</h2>
                    <input type="text" name="title"/>
                    <h2 className="card-title">Text</h2>
                    <textarea className="textarea" name="text"></textarea>
                    <div className="card-actions">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                    {isSuccess === false && <p>There was a problem with uploading, try longer text</p>}
                    {isSuccess === true && <p>Todo successfully added</p>}
                </form>
            </div>
        </div>
    );
};

export default AddToDo;
