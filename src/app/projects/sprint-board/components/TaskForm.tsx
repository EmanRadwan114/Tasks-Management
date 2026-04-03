"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormField from "@/components/ui/FormField";
import SelectFormField from "@/components/ui/SelectFormField";
import DateField from "@/components/ui/DateField";
import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

import {
  TaskCategoryOptions,
  TaskPriorityOptions,
  TaskStatusOptions,
} from "../data/data";
import { TaskSchema, TaskSchemaType } from "../validation/board.validation";
import { useAssigneeOptions } from "../hooks/useAssigneeOptions";
import { ITask } from "../types/interfaces";
import { useHandleTaskSubmitAction } from "../hooks/useHandleActions";

interface IProps {
  title?: string;
  type?: "add" | "edit";
  task?: ITask;
  handleModalClose: () => void;
}

const TaskForm: React.FC<IProps> = ({
  title = "Create New Task",
  type = "add",
  task,
  handleModalClose,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<TaskSchemaType>({
    resolver: zodResolver(TaskSchema),
    mode: "onChange",
    defaultValues: {
      title: task?.title || "",
      description: task?.description || "",
      status: task?.status || "",
      priority: task?.priority || "",
      assignee: task?.assigneeId?.toString() || "",
      category: task?.category || "",
      startDate: task?.startDate || "",
      dueDate: task?.dueDate || "",
    },
  });

  const { handleSubmitTask, isPending } = useHandleTaskSubmitAction(
    task?.id,
    handleModalClose,
  );
  const assigneeOptions = useAssigneeOptions();

  const onSubmit = (data: TaskSchemaType) => {
    handleSubmitTask(data);
  };

  return (
    <Modal title={title} onClose={handleModalClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5 p-7">
          {/* Title and Description */}
          <FormField
            {...register("title")}
            label="Title"
            placeholder="Enter task title..."
            error={errors.title?.message}
          />

          <FormField
            {...register("description")}
            label="Description"
            placeholder="Enter description..."
            type="textarea"
            error={errors.description?.message}
          />

          {/* Grid for select and date fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Status */}
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <SelectFormField
                  {...field}
                  label="Status"
                  placeholder="Select status..."
                  options={TaskStatusOptions}
                  value={field.value}
                  onValueChange={field.onChange}
                  error={errors.status?.message}
                />
              )}
            />

            {/* Priority */}
            <Controller
              name="priority"
              control={control}
              render={({ field }) => (
                <SelectFormField
                  {...field}
                  label="Priority"
                  placeholder="Select priority..."
                  options={TaskPriorityOptions}
                  value={field.value}
                  onValueChange={field.onChange}
                  error={errors.priority?.message}
                />
              )}
            />

            {/* Assignee */}
            <Controller
              name="assignee"
              control={control}
              render={({ field }) => (
                <SelectFormField
                  {...field}
                  label="Assignee"
                  placeholder="Select assignee..."
                  options={assigneeOptions}
                  value={field.value}
                  onValueChange={field.onChange}
                  error={errors.assignee?.message}
                />
              )}
            />

            {/* Category */}
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <SelectFormField
                  {...field}
                  label="Category"
                  placeholder="Select category..."
                  options={TaskCategoryOptions}
                  value={field.value}
                  onValueChange={field.onChange}
                  error={errors.category?.message}
                />
              )}
            />

            {/* Start Date */}
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <DateField
                  {...field}
                  value={field.value || ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    field.onChange(e.target.value)
                  }
                  label="Start Date"
                  placeholder="Select date..."
                  error={errors.startDate?.message}
                />
              )}
            />

            {/* End Date */}
            <Controller
              name="dueDate"
              control={control}
              render={({ field }) => (
                <DateField
                  {...field}
                  value={field.value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    field.onChange(e.target.value)
                  }
                  label="End Date"
                  placeholder="Select date..."
                  error={errors.dueDate?.message}
                />
              )}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="border-t border-secondary-background flex justify-end gap-3 px-7 py-3 mt-2">
          <Button variant="outline" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={isPending || !isValid}>
            {isPending
              ? "Processing..."
              : type === "edit"
              ? "Update Task"
              : "Create Task"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default TaskForm;
