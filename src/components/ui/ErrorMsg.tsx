import React from "react";

interface IProps {
  msg: string;
  className?: string;
}

const ErrorMsg: React.FC<IProps> = ({ msg, className }) => {
  if (!msg) return null;
  return (
    <p
      className={`mt-1 text-size-xs text-danger-foreground ${className || ""}`}
    >
      {msg}
    </p>
  );
};

export default ErrorMsg;
