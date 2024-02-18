import { useState } from "react";
import Item from "./Item";
import { IoMdAdd } from "react-icons/io";

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      text: "با دکمه دانلود میتونید از یادداشت اسکرین شات بگیرید و با دکمه حذف میتونید یادداشت رو پاک کنید.",
      completed: false,
    },
    {
      id: 2,
      text: "روی متن کلیک کنید تا به وضعیت انجام شده تغییر پیدا کنه",
      completed: true,
    },
    {
      id: 3,
      text: "وبسایت هنوز توی مرحله آزمایشه و با ریفرش کردن صفحه یادداشت ها پاک میشن!",
      completed: false,
    },
    {
      id: 4,
      text: "این یادداشت ها آموزشی بودن.. میتونی حذفشون کنی و به کارت ادامه بدی 3>",
      completed: false,
    },
  ]);

  const [text, setText] = useState("");

  function addTask(text) {
    if (text != "") {
      const newTask = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTask([...task, newTask]);
      setText("");
    }
  }
  function deleteTask(id) {
    setTask(task.filter((aaa) => aaa.id !== id));
  }
  function toggleCompleted(id) {
    setTask(
      task.map((atask) => {
        if (atask.id === id) {
          return { ...atask, completed: !atask.completed };
        } else {
          return atask;
        }
      })
    );
  }

  return (
    <>
      <div className="rtl fixed bottom-0 px-4 sm:px-24 md:px-48 flex flex-row w-full justify-between pb-4">
        <input
          className="bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur-md bg border-2 dark:border-neutral-800 border-neutral-200 px-3 h-12 w-full rounded-r-xl outline-none"
          type="text"
          value={text}
          placeholder="یادداشت جدید"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="justify-center flex items-center w-12 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-l-xl"
          onClick={() => addTask(text)}
        >
          <IoMdAdd size={25} />
        </button>
      </div>
      <div className="w-full px-4 sm:px-24 md:px-48 pt-4 h-16 mb-4">
        <div className="h-full w-full bg-neutral-200 dark:bg-neutral-800 flex justify-between items-center py-2 px-4 rounded-3xl">
          <a className="h-full" href="https://instagram.com/cwpslxck">
            <img
              className="h-full dark:invert"
              src="assets/cwpslxck.png"
              alt="Logo"
            />
          </a>
          <h2 className="text-xl">لیست کارهای روزانه</h2>
        </div>
      </div>
      <div>
        <div className="rtl w-full">
          <div
            className="w-full grid grid-cols-1 sm:grid-cols-2 sm:px-20 md:px-44 pb-20"
            id="list"
          >
            {task.map((atask) => (
              <Item
                key={atask.id}
                task={atask}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
