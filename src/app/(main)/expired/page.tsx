import TaskCard from '@/components/SideMenu/TaskCard/TaskCard'
import { TaskDocument } from '@/models/task';
import Link from 'next/link'
import React from 'react'

const getExpiredTasks = async (): Promise<TaskDocument[]> => {
  // API_URLは.env.localに定義されている.見れないようにするため。
  const response = await fetch(`${process.env.API_URL}/tasks/expired`, {
    cache: "no-store",
  });
  if (response.status !== 200) {
    throw new Error("Failed to fetch tasks");
  }
  const data = await response.json();
  return data.tasks as TaskDocument[];
};

const ExpiredTaskPage = async () => {
  const expiredTasks = await getExpiredTasks();
  return (
    <div>
      <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">Expired Tasks</h1>
        
      </header>
      {/* flex wrapは、子要素が親要素の幅を超えた場合に、自動的に次の行に折り返す */}
      <div className="mt-8 flex flex-wrap gap-4">
        {expiredTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default ExpiredTaskPage
