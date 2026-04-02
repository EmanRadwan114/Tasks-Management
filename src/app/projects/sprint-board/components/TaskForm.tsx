import { CloseIcon } from "@/components/icons";
import FormField from "@/components/ui/FormField";
import SelectFormField from "@/components/ui/SelectFormField";
import React from "react";
import {
  TaskCategoryOptions,
  TaskPriorityOptions,
  TaskStatusOptions,
} from "../data/data";
import DateField from "@/components/ui/DateField";
import { Button } from "@/components/ui/Button";

interface IProps {
  title?: string;
}

const TaskForm: React.FC<IProps> = ({ title = "Create New Task" }) => {
  return (
    <section className="bg-white rounded-2xl">
      {/* header */}
      <header className="flex items-center justify-between px-7 py-3 border-b border-secondary-background">
        <h3 className="font-bold text-size-lg">{title}</h3>
        <div className="cursor-pointer border border-secondary-background rounded-sm p-2.5 transition-colors duration-200 text-tertiary-foreground hover:text-muted-foreground">
          <CloseIcon className="size-3" />
        </div>
      </header>
      {/* form fields */}
      <form className="space-y-5 p-7">
        <FormField label="Title" placeholder="Enter task title..." />
        <FormField
          label="Description"
          placeholder="Enter description..."
          type="textarea"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <SelectFormField label="Status" options={TaskStatusOptions} />
          <SelectFormField label="Priority" options={TaskPriorityOptions} />
          <SelectFormField label="Assignee" options={TaskCategoryOptions} />
          <SelectFormField label="Category" options={TaskCategoryOptions} />
          <DateField label="Start Date" placeholder="Select date..." />
          <DateField label="End Date" placeholder="Select date..." />
        </div>
      </form>

      {/* actions */}
      <div className="border-t border-secondary-background flex justify-end gap-3 px-7 py-3  ">
        <Button variant="outline">Cancel</Button>
        <Button>Create Task</Button>
      </div>
    </section>
  );
};

export default TaskForm;
