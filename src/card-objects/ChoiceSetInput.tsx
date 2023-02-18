import * as React from "react";
import * as AC from "adaptivecards";
import Select from "../components/Select";
import { reactDomRender } from "./shared";

export class ChoiceSetInput extends AC.ChoiceSetInput {
  static readonly JsonTypeName = "Input.ChoiceSet";

  // For form submission
  private _value;
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

  private renderElement = (): JSX.Element => {
    switch (this.id) {
      case "request_time_off_type":
        return (
          <Select
            label="Time off type"
            onChange={(e) => this.onChange(e)}
            items={[
              { label: "Paid time off", value: "1" },
              { label: "Personal holiday", value: "2" },
              { label: "Volunteer time", value: "3" }
            ]}
          />
        );
      default:
        return <Select />;
    }
  };
}
