import { useActionState, useEffect, useTransition } from "react";
import {
  archiveTaskAction,
  createCommentAction,
  createTaskAction,
  updateTaskAction,
} from "../server-actions/board.actions";
import { toast } from "react-toastify";
import { IComment } from "../types/interfaces";
import { TaskSchemaType } from "../validation/board.validation";

export const useHandleTaskSubmitAction = (
  id: number | undefined,
  onModalClose: () => void,
) => {
  const updateTaskWithId = updateTaskAction.bind(null, id || 0);

  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useActionState(
    id ? updateTaskWithId : createTaskAction,
    null,
  );

  useEffect(() => {
    if (state?.success) {
      toast.success("Success");
      onModalClose();
    } else {
      toast.error(state?.error?.toString());
    }
  }, [state, onModalClose]);

  const handleSubmitTask = (data: TaskSchemaType) => {
    startTransition(() => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      formAction(formData);
    });
  };
  return { state, handleSubmitTask, isPending };
};

export const useArchiveTaskAction = (id: number | undefined) => {
  const archiveTaskWithId = archiveTaskAction.bind(null, id);

  const [isPending, startTransition] = useTransition();
  const [state, dispatchAction] = useActionState(archiveTaskWithId, null);

  useEffect(() => {
    if (state == null) return;
    if (state.success) {
      toast.success("Task archived successfully");
    } else if (state.error) {
      toast.error(state.error.toString());
    }
  }, [state]);

  const handleArchiveTask = () => {
    startTransition(() => {
      dispatchAction(new FormData());
    });
  };
  return { state, handleArchiveTask, isPending };
};

export const useCreateCommentAction = (taskId: number) => {
  const createCommentWithTaskId = createCommentAction.bind(null, taskId);

  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useActionState(createCommentWithTaskId, null);

  useEffect(() => {
    if (state == null) return;
    if (state.success) {
      toast.success("Comment created successfully");
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  const handleCreateComment = (data: IComment) => {
    startTransition(() => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      formAction(formData);
    });
  };
  return { state, handleCreateComment, isPending };
};
