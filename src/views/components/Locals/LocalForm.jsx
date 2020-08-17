import React from "react";
import { textHelper } from "util/textHelper";
import { Form, Field } from "react-final-form";
import { FormField } from "views/components/FormField";
import { FormFieldCheckbox } from "views/components/FormFieldCheckbox";
import { validateField } from "util/form/formValidator";
import { onFormSubmit } from "util/form/onFormSubmit";
import { Loading } from "views/components/Loading";

export const LocalsForm = ({ operator, removeLocal, local }) => {
  const onSubmitForm = wrapOperatorMethod(operator.saveLocal);
  return (
    <Form
        onSubmit={onSubmitForm}
        render={({ handleSubmit, submitting, form, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <br/>
            <i onClick={() => removeLocal(form)} className="close material-icons">close</i>
            <Field 
              name="name"
              type="text" 
              initialValue={local?.name}
              validate={validateField("localName")}
              >
              {({ input, meta }) => (
                <FormField
                  input={input}
                  meta={meta}
                  placeholder={textHelper("content", "locals", "input", "name")} 
                  disabled={submitting}
                />
              )}
            </Field>
            <Field 
              name="address"
              initialValue={local?.address}
              validate={validateField("localAddress")}
              >
              {({ input, meta }) => (
                <FormField
                  input={input}
                  meta={meta}
                  type="text" 
                  placeholder={textHelper("content", "locals", "input", "address")} 
                  disabled={submitting}
                />
              )}
            </Field>
            <Field 
              name="active"
              initialValue={local?.active}
              type="checkbox"
              >
              {({ input, meta }) => (
                <FormFieldCheckbox 
                  title={textHelper("content", "locals", "input", "active")} 
                  input={input} 
                  meta={meta}
                />
              )}
            </Field>
            <Field 
              name="id"
              initialValue={local?.id}
              type="hidden"
              >
              {({ input, meta }) => (
                <FormField
                  input={input}
                  meta={meta} 
                  disabled={submitting}
                />
              )}
            </Field>
            <br/>
            {submitting ? <Loading center={true}/> : (
              <button 
                disabled={submitting || pristine || invalid}
                className="btn waves-effect waves-light" 
                type="submit"
              >
                {textHelper("content", "locals", "button", "submit")}
              </button>
            )}
          </form>
        )}
      />
  );
}

const wrapOperatorMethod = operator => onFormSubmit(operator); 
