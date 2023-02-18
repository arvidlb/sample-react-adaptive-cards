import * as React from "react";
import * as ReactDOM from "react-dom";
import * as AC from "adaptivecards";
import Button from "../components/Button";
import { reactDomRender } from "./shared";

export class AlertAction extends AC.SubmitActionBase {
  private internalRenderedElement: any;

  static readonly JsonTypeName = "Action.Alert";

  //#region Schema

  // Get the properites of the action
  static readonly textProperty = new AC.StringProperty(
    AC.Versions.v1_0,
    "text",
    true
  );

  static readonly titleProperty = new AC.StringProperty(
    AC.Versions.v1_0,
    "title",
    true
  );

  static readonly dataProperty = new AC.PropertyDefinition(
    AC.Versions.v1_0,
    "data"
  );

  getTitle(): string | undefined {
    return this.getValue(AlertAction.titleProperty);
  }

  getText(): string | undefined {
    return this.getValue(AlertAction.textProperty);
  }

  getData(): string | undefined {
    return this.getValue(AlertAction.dataProperty);
  }

  getJsonTypeName(): string {
    return AlertAction.JsonTypeName;
  }

  get renderedElement(): HTMLElement {
    return this.internalRenderedElement;
  }

  public render() {
    const element = reactDomRender(this.renderElement());
    this.internalRenderedElement = element;
  }

  execute() {
    // Need to get the elements within the object
    alert(JSON.stringify(this.getData()));
    // Do some fun API stuff
  }

  private renderElement = (): JSX.Element => {
    return <Button label={this.title} onClick={() => this.execute()} />;
  };
}
