"use client";

import React, { forwardRef, useId } from "react";
import { Input } from "./Input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldDescription, FieldError, FieldLabel } from "./field";

type BaseProps = {
  label: string;
  error?: string;
  description?: string;
  containerClassName?: string;
};

type InputProps = BaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    type?: "input";
  };

type TextareaProps = BaseProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    type: "textarea";
  };

export type FormFieldProps = InputProps | TextareaProps;

const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormFieldProps
>((props, ref) => {
  const {
    label,
    error,
    description,
    containerClassName,
    id,
    type = "input",
    ...rest
  } = props;

  const generatedId = useId();
  const inputId = id || generatedId;

  return (
    <Field className={containerClassName}>
      <FieldLabel htmlFor={inputId}>{label}</FieldLabel>

      {type === "textarea" ? (
        <Textarea
          id={inputId}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <Input
          id={inputId}
          ref={ref as React.Ref<HTMLInputElement>}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {description && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError errors={[{ message: error }]} />}
    </Field>
  );
});

FormField.displayName = "FormField";

export default FormField;
