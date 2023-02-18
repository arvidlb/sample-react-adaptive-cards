export default {
  type: "AdaptiveCard",
  body: [
    {
      type: "ActionSet",
      style: "default",
      actions: [
        {
          type: "Action.Execute",
          title: "Back",
          id: "12345",
          verb: "viewTicketing",
          associatedInputs: "none"
        }
      ]
    },
    {
      type: "Container",
      items: [
        {
          type: "TextBlock",
          text: "Create new ticket",
          wrap: true,
          spacing: "Medium",
          isSubtle: true
        }
      ],
      spacing: "Medium"
    },
    {
      type: "TextBlock",
      text: "Ticket type",
      wrap: true
    }
  ],
  actions: [
    {
      type: "Action.ShowCard",
      style: "positive",
      title: "IT Help Desk",
      card: {
        type: "AdaptiveCard",
        body: [
          {
            type: "TextBlock",
            text: "Category",
            wrap: true
          },
          {
            type: "Input.ChoiceSet",
            isRequired: true,
            choices: [
              {
                title: "General",
                value: "General"
              },
              {
                title: "Password",
                value: "Password"
              },
              {
                title: "Assets",
                value: "Assets"
              }
            ],
            placeholder: "Category"
          },
          {
            type: "TextBlock",
            text: "Description",
            wrap: false
          },
          {
            type: "Input.Text",
            placeholder: "Description",
            isRequired: true
          },
          {
            type: "TextBlock",
            text: "Comment",
            wrap: false
          },
          {
            type: "Input.Text",
            placeholder: "Add details that might be helpful"
          }
        ],
        actions: [
          {
            type: "Action.Submit",
            title: "Submit"
          }
        ],
        $schema: "http://adaptivecards.io/schemas/adaptive-card.json"
      }
    },
    {
      type: "Action.ShowCard",
      style: "destructive",
      title: "Change Management",
      card: {
        type: "AdaptiveCard",
        body: [
          {
            type: "TextBlock",
            text: "Change Management",
            wrap: false
          },
          {
            type: "Input.Text",
            placeholder: "Change Management input",
            isRequired: true
          }
        ],
        actions: [
          {
            type: "Action.Submit",
            title: "Submit"
          }
        ],
        $schema: "http://adaptivecards.io/schemas/adaptive-card.json"
      }
    },
    {
      type: "Action.ShowCard",
      title: "ServiceNow",
      card: {
        type: "AdaptiveCard",
        body: [
          {
            type: "TextBlock",
            text: "ServiceNow option",
            wrap: false
          },
          {
            type: "Input.Text",
            placeholder: "ServiceNow input",
            isRequired: true
          }
        ],
        actions: [
          {
            type: "Action.Submit",
            title: "Submit"
          }
        ],
        $schema: "http://adaptivecards.io/schemas/adaptive-card.json"
      }
    },
    {
      type: "Action.ShowCard",
      title: "Human Resource",
      card: {
        type: "AdaptiveCard",
        body: [
          {
            type: "TextBlock",
            text: "Human Resource option",
            wrap: false
          },
          {
            type: "Input.Text",
            placeholder: "Human Resource input",
            isRequired: true
          }
        ],
        actions: [
          {
            type: "Action.Submit",
            title: "Submit"
          }
        ],
        $schema: "http://adaptivecards.io/schemas/adaptive-card.json"
      }
    }
  ],
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  version: "1.4"
};
