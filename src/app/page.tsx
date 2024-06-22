'use client'

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { ContentTask } from "@/components/Task";
import { TotalContent } from "@/components/Total";
import { EmptyContent } from "@/components/Empty";
import { HeaderContent } from "@/components/Header";

export default function Home() {
  const [tasks, setTasks] = useState<TTask[]>([])
  const [description, setDescription] = useState('')

  const addTask = () => {
    if (!description)
      return

    setTasks([...tasks, {
      id: new Date().getTime(),
      description,
      isFinished: false
    }])
    setDescription('')
  }

  const handleUpdateTask = useCallback((id: number) => {
    const filteredTasks = tasks.map(task => ({
      ...task,
      isFinished: (task.id === id ? !task.isFinished : task.isFinished)
    }))
    setTasks(filteredTasks)
  }, [setTasks, tasks])

  const handleDeleteTask = useCallback((id: number) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }, [setTasks, tasks])

  const { totalFinished, totalCreated } = useMemo(() => {
    const totalFinished = tasks.filter(task => task.isFinished).length
    const totalCreated = tasks.filter(task => !task.isFinished).length

    return { totalFinished, totalCreated }
  }, [tasks])

  return (
    <main className="flex flex-col items-center min-h-screen bg-white">
      <HeaderContent />
      <div className="fixed max-sm:px-4 top-40 max-w-5xl w-full flex gap-2">
        <Input
          maxLength={64}
          name='description'
          placeholder='Adicione uma nova tarefa'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button name="addHandler" onClick={addTask} disabled={!description}>
          <span className="mr-2">Criar</span>
          <Image
            src="/PlusCircleRegular.svg"
            alt="Plus icon"
            className="dark:invert"
            width={20}
            height={20}
            priority
            color="white"
          />
        </Button>
      </div>
      <TotalContent 
          totalCreated={totalCreated}
          totalFinished={totalFinished}
        /> 
      {!tasks.length ? (
        <EmptyContent />
      ) : (
        <div className="max-w-5xl max-lg:px-4 w-full h-full gap-3 items-center text-center justify-center flex flex-col">
          {tasks.map(task => (
            <ContentTask 
              id={task.id}
              key={task.id}
              description={task.description}
              isFinished={task.isFinished}
              handleUpdate={() => handleUpdateTask(task.id)}
              handleDelete={() => handleDeleteTask(task.id)}
            />
          ))}
        </div>
      )}
    </main>
  );
}
