import { useActionState, useEffect, useTransition } from "react";
import {
  archiveTaskAction,
  createCommentAction,
  createTaskAction,
  updateTaskAction,
} from "../server-actions/board.actions";
import { toast } from "react-toastify";
import { IComment, ITask } from "../types/interfaces";

export const useCreateTaskAction = () => {
  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useActionState(createTaskAction, null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Task created successfully");
    } else {
      toast.error(state?.error);
    }
  }, [state]);

  const handleCreateTask = (data: ITask) => {
    startTransition(() => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      formAction(formData);
    });
  };
  return { state, handleCreateTask, isPending };
};

export const useUpdateTaskAction = (id: number) => {
  const updateTaskWithId = updateTaskAction.bind(null, id);

  const [isPending, startTransition] = useTransition();
  const [state, formAction] = useActionState(updateTaskWithId, null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Task updated successfully");
    } else {
      toast.error(state?.error);
    }
  }, [state]);

  const handleUpdateTask = (data: ITask) => {
    startTransition(() => {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      formAction(formData);
    });
  };
  return { state, handleUpdateTask, isPending };
};

export const useArchiveTaskAction = (id: number) => {
  const archiveTaskWithId = archiveTaskAction.bind(null, id);

  const [isPending, startTransition] = useTransition();
  const [state, dispatchAction] = useActionState(archiveTaskWithId, null);

  useEffect(() => {
    if (state?.success) {
      toast.success("Task archived successfully");
    } else {
      toast.error(state?.error);
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
    if (state?.success) {
      toast.success("Comment created successfully");
    } else {
      toast.error(state?.error);
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
