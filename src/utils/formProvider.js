import React from 'react';

function formProvider (fields) {
  return function (Comp) {
    const initialFormState = {};
    for (const key in fields) {
      initialFormState[key] = {
        value: fields[key].defaultValue,
        error: ''
      };
    }

    class FormComponent extends React.Component {
      constructor (props) {
        super(props);
        this.state = {
          form: initialFormState,
          formValid: false
        };

        this.handleValueChange = this.handleValueChange.bind(this);
      }
      handleValueChange (fieldName, value) {
        const { form } = this.state;

        const newFieldState = {value, valid: true, error: ''};

        const fieldRules = fields[fieldName].rules;

        for (let i = 0; i < fieldRules.length; i++) {
          const {pattern, error} = fieldRules[i];
          let valid = false;
          if (typeof pattern === 'function') {
            valid = pattern(value);
          } else {
            valid = pattern.test(value);
          }

          if (!valid) {
            newFieldState.valid = false;
            newFieldState.error = error;
            break;
          }
        }
        // console.log(fieldName)
        console.log(newFieldState)
        const newForm = {...form, [fieldName]: newFieldState};
        const formValid = Object.values(newForm).every(f => f.valid);
        console.log(newForm[fieldName])
        this.setState({
          form: newForm,
          formValid
        }, () => console.log(this.state.form[fieldName]));
        // console.log(this.state.form[fieldName]);
      }
      render () {
        const {form, formValid} = this.state;
        // console.log(form);
        return <Comp {...this.props} form={form} formValid={formValid} handleChange={this.handleValueChange}/>
      }
    }

    return FormComponent;
  }
}

export default formProvider