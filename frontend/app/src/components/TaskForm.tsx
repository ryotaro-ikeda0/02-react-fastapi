import React, { useState } from "react";
import styled from "styled-components";
import { createTask } from "../lib/api/task";
import { Task } from "../types/tasks";

interface TaskFormProps {
    taskList: Task[];
    setTaskList: Function;
}

export const TaskForm: React.FC<TaskFormProps> = ({
    taskList,
    setTaskList,
}) => {
    const [title, setTitle] = useState<string>("");

    const handleCreateTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data: Task = {
            title: title,
        };

        try {
            const res = await createTask(data);

            if (res.status === 200) {
                setTaskList([...taskList, res.data]);
            } else {
                console.log(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }

        setTitle("");
    };

    return (
        <form onSubmit={handleCreateTask}>
            <SInput
                type="text"
                value={title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setTitle(e.target.value);
                }}
                placeholder="タスクを入力してください"
            />
            <SButton type="submit">追加</SButton>
        </form>
    );
};

const SInput = styled.input`
    border-radius: 3px;
    border: 2px solid #000;
    padding: 5px 10px;
    width: 200px;
`;

const SButton = styled.button`
    margin-left: 10px;
    background-color: #fff;
    color: #000;
    border-radius: 3px;
    border: 2px solid #000;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #000;
        color: #fff;
    }
`;
