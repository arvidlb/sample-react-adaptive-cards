export default {
  type: "AdaptiveCard",
  version: "1.0",
  body: [
    {
      text: "People Search",
      wrap: true,
      type: "TextBlock"
    },
    {
      columns: [
        {
          width: "stretch",
          items: [
            {
              choices: [
                {
                  title: "Red",
                  value: "1"
                },
                {
                  title: "Pink",
                  value: "2"
                }
              ],
              isMultiSelect: false,
              id: "choiceselect",
              type: "Input.ChoiceSet",
              placeholder: "Search for User"
            }
          ],
          type: "Column"
        }
      ],
      type: "ColumnSet"
    },
    {
      type: "ActionSet",
      actions: [
        {
          type: "Action.Submit",
          id: "rejectdynamic",
          style: "destructive",
          iconUrl: "https://via.placeholder.com/40",
          data: {
            a: "Harry"
          }
        },
        {
          type: "Action.Submit",
          id: "submitdynamic",
          title: "Submit",
          data: {
            a: "Stephan"
          }
        },
        {
          type: "Action.OpenUrl",
          title: "Open Url",
          url: "https://www.google.com"
        },
        {
          type: "Action.ShowCard",
          title: "View Detail",
          card: {
            type: "AdaptiveCard",
            body: [
              {
                type: "TextBlock",
                text: "What do you think?"
              }
            ],
            actions: [
              {
                type: "Action.Submit",
                id: "detaildynamic",
                title: "Neat!",
                data: {
                  neat: "true"
                }
              }
            ]
          }
        },
        {
          type: "Action.Execute",
          title: "Execute",
          id: "12345",
          verb: "doStuff",
          data: {
            x: 13
          }
        },
        {
          type: "Action.Alert",
          title: "Click me, I'm a custom action!",
          text: "Hello World",
          data: {
            x: 14
          }
        }
      ]
    }
  ]
};
