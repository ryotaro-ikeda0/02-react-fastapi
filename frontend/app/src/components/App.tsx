import { useEffect, useState } from "react";
import styled from "styled-components";
import { getTasks } from "../lib/api/task";
import { Task } from "../types/tasks";
import { DoneList } from "./DoneList";
import { TaskForm } from "./TaskForm";
import { TaskList } from "./TaskList";

export const App: React.FC = () => {
    const [taskList, setTaskList] = useState<Task[]>([]);
    const [doneList, setDoneList] = useState<Task[]>([]);

    const handleGetTaskList = async () => {
        try {
            const res = await getTasks();
            const notDone = res.data.filter((task: Task) => !task.done);
            const done = res.data.filter((task: Task) => task.done);

            if (res?.status === 200) {
                setTaskList(notDone);
                setDoneList(done);
            } else {
                console.log(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handleGetTaskList();
    }, []);

    return (
        <SContainer>
            <h1>Todo App</h1>
            <TaskForm taskList={taskList} setTaskList={setTaskList} />
            <TaskList
                taskList={taskList}
                setTaskList={setTaskList}
                setDoneList={setDoneList}
            />
            <DoneList
                doneList={doneList}
                setTaskList={setTaskList}
                setDoneList={setDoneList}
            />
        </SContainer>
    );
};

const SContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;
