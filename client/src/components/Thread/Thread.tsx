import TextInput from "../TextInput/TextInput";
import "./Thread.css";

function Thread() {
  const handleSubmit = (text) => {
    console.log(text);
  };

  return (
    <div className="thread">
      <TextInput onSubmit={handleSubmit} />
    </div>
  );
}

export default Thread;
