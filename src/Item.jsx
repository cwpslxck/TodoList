import { toPng } from "html-to-image";

import { IoMdDownload } from "react-icons/io";
import { RiDeleteBinFill } from "react-icons/ri";

export default function Item({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  function onScreenshot() {
    toPng(document.getElementById(task.id), { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "MyToDoList.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div id={task.id} className="flex justify-between px-4 sm:px-2 py-2">
      <div className="flex justify-between border-2 dark:border-neutral-800 border-neutral-200 min-h-20 w-full rounded-xl transition-colors bg-neutral-100 dark:bg-neutral-900 active:dark:bg-neutral-800 active:bg-neutral-200">
        <div
          onClick={handleChange}
          className="w-full h-full flex justify-center flex-col py-3 px-4"
        >
          <p
            className={task.completed == true ? "line-through opacity-60" : ""}
          >
            {task.text}
          </p>
        </div>
        <div className="w-12 h-full flex flex-col items-center justify-center gap-4 border-r-2 dark:border-neutral-800 border-neutral-200">
          <button onClick={onScreenshot}>
            <IoMdDownload size={20} />
          </button>
          <button onClick={() => deleteTask(task.id)}>
            <RiDeleteBinFill size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
