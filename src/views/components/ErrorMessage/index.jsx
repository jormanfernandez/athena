import React from "react";

export const ErrorMessage =({
  classNames: { errorClassName = "inline-error-message", warningClassName = "inline-warning-message" } = {},
  error,
  isWarning = false,
  children,
}) => (
  <div className={isWarning ? warningClassName : errorClassName}>{children ?? error}</div>
);
