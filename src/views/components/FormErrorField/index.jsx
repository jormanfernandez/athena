import React from "react";
import { ErrorMessage } from "views/components/ErrorMessage";

export const FormErrorField = ({input, meta}) => (
  input.value && meta.error && meta.touched ? <ErrorMessage error={meta.error}/> : <></>
);
