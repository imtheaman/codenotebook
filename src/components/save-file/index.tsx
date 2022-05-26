import { useCallback, useState, useEffect } from "react";
import "./styles.css";
import { useTypedSelector } from "../../hooks/use-typed-selector";
import { useParams } from 'react-router-dom';

const ShareFile = () => {
  const [filename, setFilename] = useState("");
  const [message, setMessage] = useState("");
  const params = useParams()
  
  useEffect(() => {
    setFilename(params?.name || '')
  },[])
  
  const cellsData = useTypedSelector(({ cells }) => cells);
  const changeHandler = (e: any) => {
    setMessage("");
    setFilename(e.target.value);
  };

  const saveFile = useCallback((notebookName: string, cellsData) => {
    if (cellsData) {
      fetch(`https://js-notebook-urtheaman.herokuapp.com/notebook/${notebookName}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",	        
        },
        body: JSON.stringify({
          _id: notebookName,
          cells: cellsData,
        }),
      }).then((res) => {
        const temp = res.url.split("/").slice(-1);
        const url = `https://js-notebook-urtheaman.vercel.app/${temp}`
        setMessage(
          `File saved. You can access it at <a href=${url}>${url}</a>`
        );
      });
    } else setMessage("Content can't be empty");
  }, []);

  const submitHandler = async (e: any) => {
    const notebookName = filename.trim().toLowerCase().replaceAll(" ", "-");

    e.preventDefault();
    await fetch(`https://js-notebook-urtheaman.herokuapp.com/check/${notebookName}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.toString() === "0") {
          return true;
        } else {
          setMessage("filename exists! please change the filename.");
          return false;
        }
      })
      .then((res) => (res ? saveFile(notebookName, cellsData) : null));
  };
  return (
    <form className="save-file-container">
      <div style={{ width: "100%" }}>
        <input
          type="text"
          className="input"
          value={filename}
          onChange={changeHandler}
          placeholder="your filename will be url of the file"
        />
        <p>{message}</p>
      </div>
      <button className="button" type="submit" onClick={submitHandler}>
        Save & Share this file
      </button>
    </form>
  );
};

export default ShareFile;
