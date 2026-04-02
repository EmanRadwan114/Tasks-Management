"use client";

import * as React from "react";
import { format } from "date-fns";

import { Calendar } from "./calendar";
import { Field, FieldDescription, FieldError, FieldLabel } from "./field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./input-group";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { CalendarIcon } from "../icons";

export interface DateFieldProps extends React.ComponentProps<"input"> {
  label: string;
  placeholder?: string;
  error?: string;
  description?: string;
  containerClassName?: string;
}

const DateField = React.forwardRef<HTMLInputElement, DateFieldProps>(
  (
    {
      label,
      error,
      description,
      containerClassName,
      id,
      value,
      onChange,
      name,
      placeholder,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const generatedId = React.useId();
    const inputId = id || generatedId;

    // Internal state for uncontrolled mode
    const [internalValue, setInternalValue] = React.useState<string>(
      value !== undefined ? String(value) : "",
    );

    // Update internal state if parent changes `value`
    React.useEffect(() => {
      if (value !== undefined) setInternalValue(String(value));
    }, [value]);

    // Determine current date object from string
    const date =
      internalValue && !isNaN(new Date(internalValue).getTime())
        ? new Date(internalValue)
        : undefined;

    const [month, setMonth] = React.useState<Date | undefined>(
      date || new Date(),
    );

    const displayValue = date ? format(date, "yyyy-MM-dd") : "";

    const handleSelect = (newDate: Date | undefined) => {
      const newValue = newDate ? newDate.toISOString() : "";

      // Update internal state
      setInternalValue(newValue);

      // Call parent onChange if provided
      if (onChange) {
        const event = {
          target: { value: newValue, name },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(event);
      }

      setOpen(false);
      if (newDate) setMonth(newDate);
    };

    return (
      <Field className={containerClassName}>
        <FieldLabel htmlFor={inputId}>{label}</FieldLabel>

        <InputGroup>
          <InputGroupInput
            id={inputId}
            ref={ref}
            value={displayValue}
            readOnly
            placeholder={placeholder || "Pick a date"}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setOpen(true);
              }
            }}
            {...props}
          />

          <InputGroupAddon align="inline-end">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger
                type="button"
                aria-label="Select date"
                className="flex h-8 w-8 items-center justify-center rounded-md cursor-pointer focus:outline-none hover:text-primary transition-colors duration-300 bg-transparent!"
              >
                <CalendarIcon className="h-4 w-4" />
                <span className="sr-only">Select date</span>
              </PopoverTrigger>

              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="end"
                alignOffset={-8}
                sideOffset={10}
              >
                <Calendar
                  mode="single"
                  selected={date}
                  month={month}
                  onMonthChange={setMonth}
                  onSelect={handleSelect}
                />
              </PopoverContent>
            </Popover>
          </InputGroupAddon>
        </InputGroup>

        {description && <FieldDescription>{description}</FieldDescription>}
        {error && <FieldError errors={[{ message: error }]} />}
      </Field>
    );
  },
);

DateField.displayName = "DateField";

export default DateField;
