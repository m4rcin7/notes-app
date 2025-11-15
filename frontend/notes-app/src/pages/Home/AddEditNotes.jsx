import TagInput from "../../components/Input/TagInput";

export default function AddEditNotes({ noteData, type, onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);

  const [error, setError] = useState(null);

  const handleAddNot = () => {
    if (!title) {
      setError("Please enter the title");
    }
  };

  return (
    <div className="p-6 rounded-2xl border border-slate-200 shadow-sm bg-white w-[380px] space-y-5">
      <button className="" onClick={onClose}>
        x
      </button>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-slate-600">Title</label>
        <input
          type="text"
          className="text-lg rounded-xl border border-slate-300 p-3 text-slate-900 focus:border-slate-500 focus:ring-2 focus:ring-slate-400 outline-none transition"
          placeholder="Wake up at 5 o'clock"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-slate-600">Content</label>
        <textarea
          className="rounded-xl border border-slate-300 p-3 text-slate-900 focus:border-slate-500 focus:ring-2 focus:ring-slate-400 outline-none transition resize-none"
          placeholder="Write your note here..."
          rows={5}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-slate-600">Tags</label>
        <TagInput tags={tags} setTags={setTags()} />
      </div>

      <button
        className="bg-slate-900 text-white font-medium py-3 rounded-xl hover:bg-slate-800 transition"
        onClick={() => {}}
      >
        ADD
      </button>
    </div>
  );
}
