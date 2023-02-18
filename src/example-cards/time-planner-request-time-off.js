export default {
  type: "AdaptiveCard",
  version: "1.0",
  body: [
    {
      type: "ActionSet",
      style: "default",
      actions: [
        {
          type: "Action.Execute",
          title: "Back",
          id: "12345",
          verb: "viewTimePlanner",
          associatedInputs: "none"
        }
      ]
    },
    {
      text: "Request Time Off",
      wrap: true,
      type: "TextBlock"
    },
    {
      type: "Container",
      items: [
        {
          type: "Container",
          items: [
            {
              choices: [
                {
                  title: "Paid time off",
                  value: "1"
                },
                {
                  title: "Personal holiday",
                  value: "2"
                },
                {
                  title: "Volunteer time",
                  value: "3"
                }
              ],
              isMultiSelect: false,
              id: "request_time_off_type",
              // isRequired: true,
              errorMessage: "This is a required field",
              label: "Time off type",
              type: "Input.ChoiceSet",
              isRequired: true,
              placeholder: "Select a type"
            },
            {
              type: "Input.Toggle",
              isRequired: true,
              errorMessage: "Field is required",
              id: "request_time_off_multi_day_toggle",
              title: "Multi-Day",
              value: "true",
              valueOn: "true",
              valueOff: "false",
              label: "Please check if multi-day"
            },
            {
              type: "ColumnSet",
              columns: [
                {
                  type: "Column",
                  items: [
                    {
                      type: "TextBlock",
                      text: "Date",
                      id: "request_time_off_date_textblock"
                    },
                    {
                      type: "Input.Date",
                      isRequired: true,
                      id: "request_time_off_date",
                      placeholder: "Enter a date"
                    }
                  ]
                },
                {
                  type: "Column",
                  items: [
                    {
                      type: "TextBlock",
                      text: "Hours",
                      id: "request_time_off_hours_textblock"
                    },
                    {
                      type: "Input.Text",
                      errorMessage: "1 to 8",
                      isRequired: true,
                      id: "request_time_off_hours",
                      min: 1,
                      max: 8
                    }
                  ]
                }
              ]
            },
            {
              type: "TextBlock",
              text: "Comment",
              id: "request_time_off_comment_textblock"
            },
            {
              type: "Input.Text",
              id: "request_time_off_comment",
              placeholder: "Add a comment for your manager",
              maxLength: 500,
              isMultiline: true
            }
          ]
        }
      ]
    }
  ],
  actions: [
    {
      type: "Action.Submit",
      title: "Submit",
      id: "submit-timeoff-request"
    }
  ]
};
