import React, {useEffect} from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Note from "@/Components/Note";
import NewNoteModal from "@/Components/NewNoteModal";
import Header from "@/Layouts/Header";

function Notes(props) {
    const [newNoteModalOpen, setNewNoteModalOpen] = React.useState(false);

    const [notes, setNotes] = React.useState([
        {
            title: "Example",
            body: "This is an example note.",
        },
    ]);

    const addNote = (note) => {
        setNotes([...notes, note]);
    };

    useEffect(() => {
        console.log(props);
    }, []);
    return (
        <>
            <Head title="Notes" />
            <Header
                canLogin={props.canLogin}
                canRegister={props.canRegister}
                isLoggedIn={props.isLoggedIn}
                />
            <div className="px-36 py-8">
                <div className="flex items-center mb-12 gap-8">
                    <h1 className="text-3xl  text-gray-800">Notes</h1>
                    <button
                        onClick={() => setNewNoteModalOpen(true)}
                        className="inline-flex items-center px-4 py-2 bg-pal-gray-dark hover:bg-pal-yellow-light hover:text-pal-gray hover:shadow-md transition duration-300 ease border border-transparent rounded-full text-xl text-white"
                    >
                        +
                    </button>
                </div>
                {newNoteModalOpen && (
                    <NewNoteModal
                        newNoteModalOpen={newNoteModalOpen}
                        setNewNoteModalOpen={setNewNoteModalOpen}
                        addNote={addNote}
                    />
                )}
                <div className="flex flex-wrap gap-6">
                    {notes.map((note, index) => {
                        return (
                            <Note
                                key={index}
                                title={note.title}
                                >
                                    {note.body}
                            </Note>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Notes;
