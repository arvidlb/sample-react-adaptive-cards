import * as AC from "adaptivecards";

export class TextBlock extends AC.TextBlock {
  static readonly JsonTypeName = "TextBlock";

  render(): HTMLElement | undefined {
    if (this.conditionallyHide()) {
      return undefined;
    }
    return super.render();
  }

  private conditionallyHide() {
    if (
      this.id === "request_time_off_type_textblock" ||
      this.id === "request_time_off_date_textblock" ||
      this.id === "request_time_off_hours_textblock" ||
      this.id === "request_time_off_comment_textblock"
    ) {
      return true;
      //this.isVisible = false;
    } else {
      return false;
      //this.isVisible = true;
    }
  }
}
