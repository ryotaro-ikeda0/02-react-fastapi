import React from "react";
import styled from "styled-components";
import { deleteDone } from "../lib/api/done";
import { Task } from "../types/tasks";

interface DoneItemProps {
    done: Task;
    setTaskList: Function;
    setDoneList: Function;
}

export const DoneItem: React.FC<DoneItemProps> = ({
    done: task,
    setTaskList,
    setDoneList,
}) => {
    const handleReturnTask = async (id: number) => {
        try {
            const res = await deleteDone(id);

            if (res?.status === 200) {
                setDoneList((prev: Task[]) =>
                    prev.filter((t: Task) => t.id !== task.id)
                );
                setTaskList((prev: Task[]) => [...prev, task]);
            } else {
                console.log(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <SLi>
            <STaskWrapper>
                <STitle>{task.title}</STitle>
                <SButton
                    onClick={() => handleReturnTask(task.id || 0)}
                    backgroundColor="#1895bc"
                >
                    戻す
                </SButton>
            </STaskWrapper>
        </SLi>
    );
};

const SLi = styled.li`
    /* list-style-position: inside; */
`;

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
