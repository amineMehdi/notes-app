import React, { useState } from "react";
import {useForm} from '@inertiajs/inertia-react'
import Modal from "./Modal";
import Input from "./Input";

export default function Note(props) {
    const [openNote, setOpenNote] = useState(false);

    const {data, setData, errors, post} = useForm({
        title: "",
        body: "",
    });

    return (
        <>
            <div
                className="p-4 rounded-lg border shadow-md hover:shadow-xl min-w-[10%] cursor-pointer px-4 py-3"
                onClick={() => setOpenNote(true)}
            >
                <h1 className="text-xl mb-4">{props.title}</h1>
                <p>{props.children}</p>
            </div>

            {openNote && (
                <Modal onClose={() => setOpenNote(false)}>
                    <div className="rounded-lg border shadow-md hover:shadow-xl min-w-[550px] min-h-[150px] bg-white cursor-pointer px-4 py-3">
                        <Input className=" mb-2 pb-2 " value={props.title} handleChange={(e) => setData({title: e.target.value})}></Input>
                        <Input value={props.children} handleChange={(e) => setData({body: e.target.value})}>{props.children}</Input>
                    </div>
                </Modal>
            )}
        </>
    );
}
