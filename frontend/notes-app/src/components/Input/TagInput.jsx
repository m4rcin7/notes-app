export default function TagInput({ tags, setTags }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div>
      {tags?.length > 0 && (
        <div>
          {tags.map((tag, index) => {
            <span key={index} className="">
              # {tag}{" "}
              <button
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              >
                x
              </button>
            </span>;
          })}
        </div>
      )}

      <div>
        <input
          type="text"
          placeholder="Add tags"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={() => {
            addNewTag();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
