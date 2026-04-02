import React, { useId } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "./field";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectFormFieldProps {
  label: string;
  options: SelectOption[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string | null) => void;
  placeholder?: string;
  error?: string;
  description?: string;
  containerClassName?: string;
  disabled?: boolean;
}

const SelectFormField: React.FC<SelectFormFieldProps> = ({
  label,
  options,
  defaultValue,
  value,
  onValueChange,
  placeholder = "Select an option...",
  error,
  description,
  containerClassName,
  disabled,
}) => {
  const id = useId();

  return (
    <Field className={containerClassName}>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Select
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
      >
        <SelectTrigger id={id} className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent alignItemWithTrigger={false}>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {description && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError errors={[{ message: error }]} />}
    </Field>
  );
};

SelectFormField.displayName = "SelectFormField";

export default SelectFormField;

