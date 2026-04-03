import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IUser } from "@/app/projects/sprint-board/types/interfaces";

interface AssigneeState {
  assignees: IUser[];
}

interface AssigneeActions {
  setAssignees: (assignees: IUser[]) => void;
}

const initialState: AssigneeState = {
  assignees: [],
};

export const useAssigneeStore = create<AssigneeState & AssigneeActions>()(
  devtools(
    (set) => ({
      ...initialState,

      setAssignees: (assignees) => set({ assignees }),
    }),
    { name: "assignee-store" },
  ),
);
