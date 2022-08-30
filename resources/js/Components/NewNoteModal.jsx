import React, { useRef, useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Input from "./Input";
import Modal from "./Modal";

function NewNoteModal({setNewNoteModalOpen }) {
    const { data, setData, post } = useForm({
        title: "",
        body: "",
    });
    const submitNote = () => {
        if (data.title || data.body) {
            post(route("notes.create"), {
                onSuccess: (param) => {
                    console.log(param);
                },
                onError: () => {
                    console.log("error");
                },
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
                    handleChange={(e) => setData("title", e.target.value)}
                />
                <Input
                    placeholder={"Take a note ..."}
                    handleChange={(e) => setData("body", e.target.value)}
                />
            </div>
        </Modal>
    );
}

export default NewNoteModal;
