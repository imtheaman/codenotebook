import "./styles.css";

const ShareFile = () => {
  const changeHandler = (e: any) => {
    console.log(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
  };
  return (
    <form className="save-file-container">
      <input
        type="text"
        className="input "
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
