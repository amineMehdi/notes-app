import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Note from "@/Components/Note";
import NewNoteModal from "@/Components/NewNoteModal";
import Layout from "@/Layouts/Layout";

function Notes(props) {
    const [newNoteModalOpen, setNewNoteModalOpen] = React.useState(false);
    return (
        <>
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
                    />
                )}
                <div className="flex flex-wrap gap-6">
                    {
                        props.isLoggedIn ?
                        props.notes.map((note) => {
                            return (
                                <Note
                                key={note.id}
                                note={note}/>
                            );
                        } ) :
                        <div className="flex justify-center gap-4 flex-col items-center mx-auto text-center">
                            <h1 className="text-3xl  text-gray-800">You must be logged in to view notes.</h1>
                            <Link href="/login" className="inline-flex items-center px-4 py-2 bg-pal-gray-dark hover:bg-pal-yellow-light hover:text-pal-gray hover:shadow-md transition duration-300 ease border border-transparent rounded-full text-xl text-white">
                                    Login
                            </Link>
                            <Link href="/register" className="inline-flex items-center px-4 py-2 bg-pal-gray-dark hover:bg-pal-yellow-light hover:text-pal-gray hover:shadow-md transition duration-300 ease border border-transparent rounded-full text-xl text-white">
                                    Register
                            </Link>
                        </div>
                    }

                </div>
            </div>
        </>
    );
}

Notes.layout = page => <Layout title={"Notes"} children={page}/>
export default Notes;
