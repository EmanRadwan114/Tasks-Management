import { useAssigneeStore } from "@/store/useAssigneeStore";

export const useAssigneeOptions = () => {
  const assignees = useAssigneeStore((state) => state.assignees);
  return assignees.map((user) => ({
    label: user.name,
    value: user.id ? user.id.toString() : "",
  }));
};
