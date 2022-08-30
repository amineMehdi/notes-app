import React, { useState, useEffect } from "react";
import {useForm, usePage} from '@inertiajs/inertia-react'
import Modal from "./Modal";
import Input from "./Input";

export default function Note({note}) {
    const [openNote, setOpenNote] = useState(false);
    const { dataTest } = usePage().props;
    const {data, setData, put} = useForm({
        title: note.title,
        body: note.body,
    });

    const submitNote = () => {
        put(route('notes.update', note.id), {
            onSuccess : (param) => {
                console.log(dataTest);
            }
        });
    }
    const onCloseModal = () => {
        setOpenNote(false);
        submitNote();
    }

    return (
        <>
            <div
                className="p-4 rounded-lg border shadow-md hover:shadow-xl min-w-[10%] cursor-pointer px-4 py-3"
                onClick={() => setOpenNote(true)}
            >
                <h1 className="text-xl mb-4">{note.title}</h1>
                <p>{note.body}</p>
            </div>

            {openNote && (
                <Modal onClose={() => onCloseModal()}>
                    <div className="rounded-lg border shadow-md hover:shadow-xl min-w-[550px] min-h-[150px] bg-white cursor-pointer px-4 py-3">
                        <Input className=" mb-2 pb-2 " value={data.title} handleChange={(e) => setData('title', e.target.value)}></Input>
                        <Input value={data.body} handleChange={(e) => setData('body', e.target.value)}></Input>
                    </div>
                </Modal>
            )}

        </>
    );
}
