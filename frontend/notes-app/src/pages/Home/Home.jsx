import NoteCard from "../../components/Cards/NoteCard";
import NavBar from "../../components/NavBar/NavBar";
import AddEditNotes from "./AddEditNotes";

export default function Home() {
  return (
    <>
      <NavBar />

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="task title"
            date="task date"
            content="task content"
            tags="#task tags"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button className="w-16 h-16 flex items-center justify-center rounded-2xl">
        <span className="text-[32px]">+</span>
      </button>

      <AddEditNotes />
    </>
  );
}
