import * as React from "react";
import * as AC from "adaptivecards";
import DatePicker from "../components/DatePicker";
import { reactDomRender } from "./shared";

export class DateInput extends AC.DateInput {
  static readonly JsonTypeName = "Input.Date";

  // For form submission
  private _value;
  public get value(): any {
    return this._value;
  }
  public isSet(): any {
    return this._value ? true : false;
  }
  protected onChange(newValue) {
    this._value = newValue?.toString();
  }

  render(): HTMLElement | undefined {
    return reactDomRender(this.renderElement());
  }

  private renderElement() {
    switch (this.id) {
      default:
        return <DatePicker label="Date" onChange={(e) => this.onChange(e)} />;
    }
  }
}
