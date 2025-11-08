export default function AddEditNotes() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="">Title</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Wake up at 5 o'clock"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="">Content</label>
        <input
          type="text"
          className="text-sm text-slate-950 outline-none rounded-2xl"
          placeholder="Content"
          rows={10}
        />
      </div>

      <div className="mt-3">
        <label className="">Tags</label>
      </div>

      <button className="font-medium mt-5 p-3" onClick={() => {}}>
        ADD
      </button>
    </div>
  );
}
