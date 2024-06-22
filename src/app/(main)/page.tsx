import TaskCard from "@/components/SideMenu/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";
import Link from "next/link";
import { MdAddTask } from "react-icons/md";

const getAllTasks = async (): Promise<TaskDocument[]> => {
  // API_URLは.env.localに定義されている.見れないようにするため。
  const response = await fetch(`${process.env.API_URL}/tasks`, {
    cache: "no-store",
  });
  if (response.status !== 200) {
    throw new Error("Failed to fetch tasks");
  }
  const data = await response.json();
  return data.tasks as TaskDocument[];
};

export default async function MainPage() {
  const allTasks = await getAllTasks();
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">All Tasks</h1>
        <Link
          href="/new"
          className="flex item-center gap-1 font-semibold border px-4 py-2 rounded-full shadow-sm text-white bg-gray-800 hover:bg-gray-700"
        >
          <MdAddTask className="size-5" />
          <div>Add Task</div>
        </Link>
      </header>
      {/* flex wrapは、子要素が親要素の幅を超えた場合に、自動的に次の行に折り返す */}
      <div className="mt-8 flex flex-wrap gap-4">
        
        {allTasks.map((task) => (
          console.log(task),
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}
