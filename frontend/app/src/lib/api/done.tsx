import client from "./client";

// taskを更新
export const updateDone = (id: number) => {
    return client.put(`/tasks/${id}/done`);
};

// taskを削除
export const deleteDone = (id: number) => {
    return client.delete(`/tasks/${id}/done`);
};
