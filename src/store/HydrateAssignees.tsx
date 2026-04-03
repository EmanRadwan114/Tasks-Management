"use client";

import { useEffect } from "react";
import { useAssigneeStore } from "@/store/useAssigneeStore";
import { IUser } from "@/app/projects/sprint-board/types/interfaces";

export default function HydrateAssignees({ assignees }: { assignees: IUser[] }) {
  useEffect(() => {
    useAssigneeStore.getState().setAssignees(assignees);
  }, [assignees]);

  return null;
}
