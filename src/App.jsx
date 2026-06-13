import { useState } from "react";
import { Plus, Trash2, ListTodo } from "lucide-react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    const text = input.trim();
    if (!text) return;
    setTasks([...tasks, { id: Date.now(), text }]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-10">
        <div className="flex items-center gap-2 mb-6">
          <ListTodo className="text-indigo-600" size={24} />
          <h1 className="text-xl font-semibold text-gray-800">TaskSwift</h1>
        </div>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={addTask}
            className="bg-indigo-600 text-white rounded-lg px-3 py-2 flex items-center justify-center hover:bg-indigo-700 transition"
          >
            <Plus size={18} />
          </button>
        </div>

        {tasks.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-6">
            No tasks yet. Add one above!
          </p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2"
              >
                <span className="text-sm text-gray-800 break-words">{task.text}</span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-gray-400 hover:text-red-500 transition ml-2"
                >
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}

        {tasks.length > 0 && (
          <p className="text-xs text-gray-400 mt-4 text-center">
            {tasks.length} task{tasks.length > 1 ? "s" : ""} remaining
          </p>
        )}
      </div>
    </div>
  );
}
