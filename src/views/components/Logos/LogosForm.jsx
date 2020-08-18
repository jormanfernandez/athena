import React from "react";
import { textHelper } from "util/textHelper";
import { Form, Field } from "react-final-form";
import { FormField } from "views/components/FormField";
import { FormFileField } from "views/components/FormFileField";
import { FormFieldCheckbox } from "views/components/FormFieldCheckbox";
import { validateField } from "util/form/formValidator";
import { onFormSubmit } from "util/form/onFormSubmit";
import { Loading } from "views/components/Loading";

export const LogosForm = ({ operator, logo }) => {
  const onSubmitForm = wrapOperatorMethod(operator.saveLogo);
  return (
    <Form
        onSubmit={onSubmitForm}
        render={({ handleSubmit, submitting, form, invalid }) => (
          <form onSubmit={handleSubmit}>
            <br/>
            <Field 
              name="image"
              type="file"
              initialValue={logo?.rawData}
              validate={validateField("logoData")}
              >
              {({ input, meta }) => (
                <FormFileField
                  input={input}
                  meta={meta}
                  setFile={operator.setLogoOnForm}
                  placeholder={textHelper("content", "logos", "input", "image")} 
                  disabled={submitting}
                />
              )}
            </Field>
            <Field 
              name="active"
              initialValue={logo?.active}
              type="checkbox"
              >
              {({ input, meta }) => (
                <FormFieldCheckbox 
                  title={textHelper("content", "logos", "input", "active")} 
                  input={input} 
                  meta={meta}
                  disabled={submitting}
                />
              )}
            </Field>
            <Field 
              name="id"
              initialValue={logo?.id}
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
                disabled={submitting || invalid}
                className="btn waves-effect waves-light" 
                type="submit"
              >
                {textHelper("content", "logos", "button", "submit")}
              </button>
            )}
          </form>
        )}
      />
  );
}

const wrapOperatorMethod = operator => onFormSubmit(operator); 
