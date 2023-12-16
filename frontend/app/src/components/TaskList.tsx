import React from "react";
import styled from "styled-components";
import { Task } from "../types/tasks";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
    taskList: Task[];
    setTaskList: Function;
    setDoneList: Function;
}

export const TaskList: React.FC<TaskListProps> = ({
    taskList,
    setTaskList,
    setDoneList,
}) => {
    return (
        <STaskContainer>
            <h2>未完了のタスク</h2>
            <ul>
                {taskList?.map((task: Task, index: number) => {
                    return (
                        <TaskItem
                            key={index}
                            task={task}
                            setTaskList={setTaskList}
                            setDoneList={setDoneList}
                        />
                    );
                })}
            </ul>
        </STaskContainer>
    );
};

const STaskContainer = styled.div`
    width: 500px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
`;
