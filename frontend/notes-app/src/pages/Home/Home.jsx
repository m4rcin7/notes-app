import { useState } from "react";
import NoteCard from "../../components/Cards/NoteCard";
import NavBar from "../../components/NavBar/NavBar";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";

export default function Home() {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <NavBar />

      <div className="max-w-6xl mx-auto px-4 pt-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NoteCard
            title="Task title"
            date="Task date"
            content="Task content"
            tags="#task #tags"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center bg-slate-900 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <span className="text-3xl leading-none">+</span>
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{ overlay: { background: "rgba(0,0,0,0.2)" } }}
        contentLabel=""
        className="outline-none"
      >
        <div className="flex justify-center items-center min-h-screen p-4">
          <AddEditNotes />
        </div>
      </Modal>
    </>
  );
}
