import React from "react";
import { textHelper } from "util/textHelper";
import { Form, Field } from "react-final-form";
import { FormField } from "views/components/FormField";
import { FormFieldCheckbox } from "views/components/FormFieldCheckbox";
import { validateField } from "util/form/formValidator";
import { onFormSubmit } from "util/form/onFormSubmit";
import { Loading } from "views/components/Loading";

export const CompanyTypesForm = ({ operator, removeCompanyType, companyType }) => {
  const onSubmitForm = wrapOperatorMethod(operator.saveCompanyType);
  return (
    <Form
        onSubmit={onSubmitForm}
        render={({ handleSubmit, submitting, form, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <br/>
            <i onClick={() => removeCompanyType(form)} className="close material-icons">close</i>
            <Field 
              name="description"
              initialValue={companyType?.description}
              validate={validateField("companyTypeDescription")}
              >
              {({ input, meta }) => (
                <FormField
                  input={input}
                  meta={meta}
                  type="text" 
                  placeholder={textHelper("content", "companyTypes", "input", "description")} 
                  disabled={submitting}
                />
              )}
            </Field>
            <Field 
              name="active"
              initialValue={companyType?.active}
              type="checkbox"
              >
              {({ input, meta }) => (
                <FormFieldCheckbox 
                  title={textHelper("content", "companyTypes", "input", "active")} 
                  input={input} 
                  meta={meta}
                />
              )}
            </Field>
            <Field 
              name="id"
              initialValue={companyType?.id}
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
                {textHelper("content", "companyTypes", "button", "submit")}
              </button>
            )}
          </form>
        )}
      />
  );
}

const wrapOperatorMethod = operator => onFormSubmit(operator); 
