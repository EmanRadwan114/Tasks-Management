"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/textarea";
import { useCreateCommentAction } from "../../hooks/useHandleActions";
import { IComment } from "../../types/interfaces";

interface IProps {
  taskId: number;
  composerInitials?: string;
  composerColorClass?: string;
}

const TaskCommentForm: React.FC<IProps> = ({
  taskId,
  composerInitials = "?",
  composerColorClass = "bg-primary",
}) => {
  const [message, setMessage] = useState("");
  const { state, handleCreateComment, isPending } =
    useCreateCommentAction(taskId);

  useEffect(() => {
    if (state == null) return;
    if (state.success) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMessage("");
    }
  }, [state]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;

    const payload: IComment = {
      taskId,
      message: trimmed,
      createdAt: new Date().toISOString(),
    };
    handleCreateComment(payload);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex gap-3 pt-2">
        <div
          className={`shrink-0 rounded-full size-7 flex items-center justify-center text-white text-size-xs  ${composerColorClass}`}
          aria-hidden
        >
          {composerInitials}
        </div>
        <div className="min-w-0 flex-1 flex flex-col gap-3">
          <Textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a comment..."
            rows={4}
            className="min-h-32 resize-y rounded-[10px] border border-secondary-background bg-muted-background/50 px-3.5 py-3 text-size-sm text-secondary-foreground placeholder:text-muted-foreground shadow-none focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/20"
            disabled={isPending}
          />
          <div className="flex justify-end pt-0.5">
            <Button
              type="submit"
              size="sm"
              className="h-9 px-5 rounded-lg font-medium shadow-sm"
              disabled={isPending || !message.trim()}
            >
              {isPending ? "Sending…" : "Comment"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TaskCommentForm;
