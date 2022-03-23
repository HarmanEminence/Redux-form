import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderField } from "./helper/formFieldComponent";
import "./Home.css";

const required = (value) => (value ? undefined : "Required");

const Form = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  console.log(props, "propsssssssss");
  return (
    <form onSubmit={handleSubmit} initialValues={props.initialValues}>
      <>
        <h1>SubmitForm</h1>
        <div>
          <label>First Name</label>
          <div>
            <Field
              name="firstName"
              component={renderField}
              type="text"
              validate={[required]}
              placeholder="First Name"
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field
              name="lastName"
              component={renderField}
              type="text"
              validate={[required]}
              placeholder="Last Name"
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field
              name="email"
              component={renderField}
              validate={[required]}
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div>
          <button className="submit" type="submit">
            Submit
          </button>
          <button className="reset" type="button" onClick={reset}>
            Clear Values
          </button>
        </div>
      </>
    </form>
  );
};

export default reduxForm({
  form: "simple", // a unique identifier for this form
})(Form);
