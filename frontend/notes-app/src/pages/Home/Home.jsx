import NoteCard from "../../components/Cards/NoteCard";
import NavBar from "../../components/NavBar/NavBar";

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
    </>
  );
}
