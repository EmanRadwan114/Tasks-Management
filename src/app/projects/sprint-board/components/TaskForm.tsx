"use client";
import FormField from "@/components/ui/FormField";
import SelectFormField from "@/components/ui/SelectFormField";
import React from "react";
import {
  TaskCategoryOptions,
  TaskPriorityOptions,
  TaskStatusOptions,
} from "../data/data";
import DateField from "@/components/ui/DateField";
import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

interface IProps {
  title?: string;
  handleModalClose: () => void;
}

const TaskForm: React.FC<IProps> = ({
  title = "Create New Task",
  handleModalClose,
}) => {
  return (
    <Modal title={title} onClose={handleModalClose}>
      {/* form fields */}
      <form className="space-y-5 p-7">
        <FormField label="Title" placeholder="Enter task title..." />
        <FormField
          label="Description"
          placeholder="Enter description..."
          type="textarea"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <SelectFormField
            label="Status"
            placeholder="Select status..."
            options={TaskStatusOptions}
          />
          <SelectFormField
            label="Priority"
            placeholder="Select priority..."
            options={TaskPriorityOptions}
          />
          <SelectFormField
            label="Assignee"
            placeholder="Select assignee..."
            options={TaskCategoryOptions}
          />
          <SelectFormField
            label="Category"
            placeholder="Select category..."
            options={TaskCategoryOptions}
          />
          <DateField label="Start Date" placeholder="Select date..." />
          <DateField label="End Date" placeholder="Select date..." />
        </div>

        {/* actions */}
        <div className="border-t border-secondary-background flex justify-end gap-3 px-7 py-3 mt-2  ">
          <Button variant="outline" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button type="submit">Create Task</Button>
        </div>
      </form>
    </Modal>
  );
};

export default TaskForm;
