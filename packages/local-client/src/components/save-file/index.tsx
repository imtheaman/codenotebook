import { useState } from "react";
import "./styles.css";
import { useTypedSelector } from "../../hooks/use-typed-selector";

const ShareFile = () => {
  const [filename, setFilename] = useState("");
  const cellsData = useTypedSelector(({ cells }) => cells);
  const changeHandler = (e: any) => {
    setFilename(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    fetch(`/notebook/${filename}`, {
      method: "POST",
      body: JSON.stringify({
        _id: filename,
        ...cellsData,
      }),
    }).then((res) => console.log(`File is available at ${res}`));
  };
  return (
    <form className="save-file-container">
      <input
        type="text"
        className="input"
        value={filename}
        onChange={changeHandler}
        placeholder="your filename will be url of the file"
      />
      <button className="button" type="submit" onClick={submitHandler}>
        Save & Share this file
      </button>
    </form>
  );
};

export default ShareFile;
