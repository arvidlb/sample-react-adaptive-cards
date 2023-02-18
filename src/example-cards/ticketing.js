export default {
  type: "AdaptiveCard",
  body: [
    {
      type: "Container",
      items: [
        {
          type: "TextBlock",
          text: "In Progress",
          wrap: true,
          spacing: "Medium",
          isSubtle: true
        }
      ],
      spacing: "Medium"
    },
    {
      type: "Container",
      spacing: "Small",
      style: "emphasis",
      items: [
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              items: [
                {
                  type: "Image",
                  url:
                    "https://raw.githubusercontent.com/pnp/AdaptiveCards-Templates/main/samples/help-desk/assets/Patti.png"
                }
              ],
              horizontalAlignment: "Right",
              verticalContentAlignment: "Center",
              width: "16px"
            },
            {
              type: "Column",
              items: [
                {
                  type: "TextBlock",
                  text: "INC-12389 IT Helpdesk",
                  wrap: true,
                  size: "Small",
                  weight: "Default",
                  isSubtle: true,
                  spacing: "None"
                },
                {
                  type: "TextBlock",
                  text: "Reset phone password",
                  wrap: true,
                  spacing: "None",
                  size: "Large",
                  weight: "Bolder"
                },
                {
                  type: "TextBlock",
                  text: "Completed",
                  wrap: true,
                  size: "Small",
                  weight: "Default",
                  isSubtle: true,
                  spacing: "None"
                }
              ],
              width: "stretch"
            }
          ]
        }
      ]
    },
    {
      type: "Container",
      spacing: "Small",
      style: "emphasis",
      items: [
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              items: [
                {
                  type: "Image",
                  url:
                    "https://raw.githubusercontent.com/pnp/AdaptiveCards-Templates/main/samples/help-desk/assets/Lynne.png"
                }
              ],
              horizontalAlignment: "Right",
              verticalContentAlignment: "Center",
              width: "16px"
            },
            {
              type: "Column",
              items: [
                {
                  type: "TextBlock",
                  text: "INC-12964 Change Management",
                  wrap: true,
                  size: "Small",
                  weight: "Default",
                  isSubtle: true,
                  spacing: "None"
                },
                {
                  type: "TextBlock",
                  text: "New hire",
                  wrap: true,
                  spacing: "None",
                  size: "Large",
                  weight: "Bolder"
                },
                {
                  type: "TextBlock",
                  text: "In progress",
                  wrap: true,
                  size: "Small",
                  weight: "Default",
                  isSubtle: true,
                  spacing: "None"
                }
              ],
              width: "stretch"
            }
          ]
        }
      ]
    },
    {
      type: "Container",
      spacing: "Small",
      style: "emphasis",
      items: [
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              items: [
                {
                  type: "Image",
                  url:
                    "https://raw.githubusercontent.com/pnp/AdaptiveCards-Templates/main/samples/help-desk/assets/Lee.png"
                }
              ],
              horizontalAlignment: "Right",
              verticalContentAlignment: "Center",
              width: "16px"
            },
            {
              type: "Column",
              items: [
                {
                  type: "TextBlock",
                  text: "INC-12962 IT Helpdesk",
                  wrap: true,
                  size: "Small",
                  weight: "Default",
                  isSubtle: true,
                  spacing: "None"
                },
                {
                  type: "TextBlock",
                  text: "Reset phone password",
                  wrap: true,
                  spacing: "None",
                  size: "Large",
                  weight: "Bolder"
                },
                {
                  type: "TextBlock",
                  text: "Pending",
                  wrap: true,
                  size: "Small",
                  weight: "Default",
                  isSubtle: true,
                  spacing: "None"
                }
              ],
              width: "stretch"
            }
          ]
        }
      ]
    },
    {
      type: "ActionSet",
      actions: [
        {
          type: "Action.Execute",
          title: "New ticket",
          verb: "viewTicketingNew"
        }
      ],
      horizontalAlignment: "Right"
    }
  ],
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  version: "1.4"
};
