import * as React from "react";
import * as AC from "adaptivecards";
import StyledTextField from "../components/TextField";
import { reactDomRender } from "./shared";

export class TextInput extends AC.TextInput {
  static readonly JsonTypeName = "Input.Text";

  // For form submission
  private _value;
  public get value(): any {
    return this._value;
  }
  public isSet(): any {
    return this._value ? true : false;
  }
  protected onChange(newValue) {
    this._value = newValue;
    this.render();
    return !this.isValid();
  }

  public isValid() {
    const isValid =
      (this.isRequired && (!this.isDirty() || this._value != "")) ||
      !this.isRequired;
    //console.log("isValid", isValid);
    return isValid;
  }

  render(): HTMLElement | undefined {
    return reactDomRender(this.renderElement());
  }

  private renderElement() {
    let sharedProps: any = {
      placeholder: this.placeholder,
      required: this.isRequired
    };

    if (!this.isValid()) {
      sharedProps.error = true;
    }

    if (this.errorMessage) {
      sharedProps.helperText = this.errorMessage;
    }

    console.log("sharedProps", sharedProps);
    if (this.id === "request_time_off_comment") {
      return (
        <StyledTextField
          label="Comment"
          multiline
          rows={4}
          onChangeHandler={(e) => {
            return this.onChange(e);
          }}
          // error={() => !this.isValid() || undefined}
          {...sharedProps}
        />
      );
    } else if (this.id === "request_time_off_hours") {
      return (
        <StyledTextField
          label="Hours"
          onChangeHandler={(e) => {
            return this.onChange(e);
          }}
          {...sharedProps}
          // error={() => {!this.isValid() || undefined}
        />
      );
    }
  }
}
