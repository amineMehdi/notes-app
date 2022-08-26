import React, { useRef, useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Input from "./Input";
import Modal from "./Modal";

function NewNoteModal({ newNoteModalOpen, setNewNoteModalOpen, addNote }) {
    const { data, setData, errors, post } = useForm({
        title: "",
        body: "",
    });

    const title = useRef();
    const body = useRef();

    useEffect(() => {
        if (!newNoteModalOpen) {
            submitNote();
        }
    }, [newNoteModalOpen]);

    // const NewNoteContainer = styled.div`
    //     z-index: 2;
    //     background-color: #fff;
    //     padding: 1em;
    //     border-radius: 0.5rem;
    //     min-width: 550px;
    //     min-height: 150px;
    // `;

    const getNote = () => {
        const note = {};

        note.title = title.current.value.trim();
        note.body = body.current.value.trim();

        return note;
    };

    const submitNote = () => {
        const note = getNote();
        if (note.title || note.body) {
            addNote(note);
            post(route("notes.create"), {
                onSuccess: (param) => {
                    console.log(param);
                },
                onError: () => {
                    console.log("error");
                }
            });
        }
    };

    const closeModal = () => {
        setNewNoteModalOpen(false);
        submitNote();
    };

    return (
        <Modal onClose={() => closeModal()}>
            <div className="z-[2] bg-white rounded-[0.35rem] p-4 min-w-[550px] min-h-[150px]">
                <Input
                    placeholder={"Title"}
                    className="border-b"
                    selector={title}
                    handleChange={(e) => setData('title', e.target.value)}
                />
                <Input
                    placeholder={"Take a note ..."}
                    selector={body}
                    handleChange={(e) => setData('body', e.target.value)}
                />
            </div>
        </Modal>
    );
}

export default NewNoteModal;
