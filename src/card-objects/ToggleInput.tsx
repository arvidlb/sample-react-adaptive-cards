import * as React from "react";
import * as AC from "adaptivecards";
import Switch from "../components/Switch";
import { reactDomRender } from "./shared";

export class ToggleInput extends AC.ToggleInput {
  static readonly JsonTypeName = "Input.Toggle";

  // For form submission
  private _value = "false";
  public get value(): any {
    return this._value;
  }
  public isSet(): any {
    return this._value ? true : false;
  }
  protected onChange(newValue) {
    console.log("newValue", newValue);
    this._value = newValue;
  }

  render(): HTMLElement | undefined {
    return reactDomRender(this.renderElement());
  }

  private renderElement() {
    switch (this.id === "request_time_off_multi_day_toggle") {
      default:
        return (
          <Switch
            label={this.title}
            onChangeHandler={(e) => this.onChange(e)}
          />
        );
    }
  }
}
