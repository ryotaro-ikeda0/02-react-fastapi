import { Task } from "../../types/tasks";
import client from "./client";

// task一覧を取得
export const getTasks = () => {
    return client.get("/tasks");
};

// taskを新規作成
export const createTask = (task: Task) => {
    return client.post("/tasks", task);
};

// taskを更新
export const updateTask = (task: Task) => {
    return client.put(`/tasks/${task.id}`, task.title);
};

// taskを削除
export const deleteTask = (id: number) => {
    return client.delete(`/tasks/${id}`);
};
