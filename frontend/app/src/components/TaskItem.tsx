import React from "react";
import styled from "styled-components";
import { updateDone } from "../lib/api/done";
import { deleteTask } from "../lib/api/task";
import { Task } from "../types/tasks";

interface TaskItemProps {
    task: Task;
    setTaskList: Function;
    setDoneList: Function;
}

export const TaskItem: React.FC<TaskItemProps> = ({
    task,
    setTaskList,
    setDoneList,
}) => {
    const handleDoneTask = async (task: Task) => {
        try {
            const res = await updateDone(task.id || 0);

            if (res?.status === 200) {
                setTaskList((prev: Task[]) =>
                    prev.filter((t: Task) => t.id !== task.id)
                );
                setDoneList((prev: Task[]) => [...prev, task]);
                console.log(task.title);
            } else {
                console.log(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleDeleteTask = async (id: number) => {
        try {
            const res = await deleteTask(id);

            if (res?.status === 200) {
                setTaskList((prev: Task[]) =>
                    prev.filter((task: Task) => task.id !== id)
                );
            } else {
                console.log(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <li>
            <STaskWrapper>
                <STitle>{task.title}</STitle>
                <SButton
                    onClick={() => handleDoneTask(task || null)}
                    backgroundColor="#3cd07f"
                >
                    完了
                </SButton>
                <SButton
                    onClick={() => handleDeleteTask(task.id || 0)}
                    backgroundColor="#fa5555"
                >
                    削除
                </SButton>
            </STaskWrapper>
        </li>
    );
};

const STaskWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const STitle = styled.p`
    margin: 12px 0px;
    flex-grow: 1;
`;

const SButton = styled.button<{ backgroundColor: string }>`
    margin-left: 10px;
    background-color: ${(props) => props.backgroundColor};
    color: #fff;
    border-radius: 6px;
    border: 2px solid #fff;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #000;
        color: #fff;
    }
    min-width: 60px;
`;
