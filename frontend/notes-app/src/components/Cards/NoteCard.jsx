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
    <div className="border border-slate-200 rounded-lg p-4 bg-white hover:shadow-lg transition-all duration-300 ease-in-out hover:border-slate-300">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0 pr-2">
          <h6 className="text-base font-semibold text-slate-800 truncate mb-1">
            {title}
          </h6>
          <span className="text-xs text-slate-500">{date}</span>
        </div>
        <button
          className={`${isPinned ? "text-primary" : "text-slate-300"}`}
          onClick={onPinNote}
        >
          📌
        </button>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-2">
        {content?.slice(0, 60)}
      </p>

      <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
        <div className="flex flex-wrap gap-1.5 text-xs text-slate-500 flex-1 min-w-0">
          {tags}
        </div>

        <div className="flex items-center gap-3 ml-3">
          <button
            className="text-lg transition-all duration-200 hover:scale-110 hover:text-green-600 cursor-pointer"
            onClick={onEdit}
          >
            ✏️
          </button>
          <button
            className="text-lg transition-all duration-200 hover:scale-110 hover:text-red-500 cursor-pointer"
            onClick={onDelete}
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}
