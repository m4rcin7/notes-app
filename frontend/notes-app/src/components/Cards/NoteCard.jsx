export default function NoteCard({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out ">
      <div className="flex items-center justify-bettwen">
        <div>
          <h6 className="text-sm text-slate-500 font-medium">{title}</h6>
          <span className="text-xs text-slate-500">{date}</span>
        </div>

        <span
          className={`${isPinned ? "text-primary" : "text-slate-300"}`}
          onClick={onPinNote}
        >
          📌
        </span>
      </div>

      <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500">{tags}</div>

        <div className="flex items-cente gap-2">
          <span
            className="hover:text-green-600 cursor-pointer"
            onClick={onEdit}
          >
            ➕
          </span>
          <span
            className="hover:text-red-500 cursor-pointer"
            onClick={onDelete}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}
