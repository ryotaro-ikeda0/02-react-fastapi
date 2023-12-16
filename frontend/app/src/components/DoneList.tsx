import styled from "styled-components";
import { Task } from "../types/tasks";
import { DoneItem } from "./DoneItem";

interface DoneListProps {
    doneList: Task[];
    setTaskList: Function;
    setDoneList: Function;
}

export const DoneList: React.FC<DoneListProps> = ({
    doneList,
    setTaskList,
    setDoneList,
}) => {
    return (
        <SDoneContainer>
            <h2>完了したタスク</h2>
            <ul>
                {doneList?.map((task: Task, index: number) => {
                    return (
                        <DoneItem
                            key={index}
                            done={task}
                            setTaskList={setTaskList}
                            setDoneList={setDoneList}
                        />
                    );
                })}
            </ul>
        </SDoneContainer>
    );
};

const SDoneContainer = styled.div`
    width: 500px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
`;
