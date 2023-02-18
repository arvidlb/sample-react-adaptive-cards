export default {
  type: "AdaptiveCard",
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  version: "1.3",
  __comment: "Elements used",
  body: [
    {
      type: "Container"
    },
    {
      type: "TextBlock",
      text: "June 30, 2021",
      wrap: true,
      horizontalAlignment: "Center",
      size: "ExtraLarge",
      fontType: "Default",
      weight: "Bolder"
    },
    {
      type: "TextBlock",
      text: "June 16, 2021 – June 30, 2021",
      wrap: true,
      size: "Small",
      weight: "Bolder",
      horizontalAlignment: "Center",
      fontType: "Default"
    },
    {
      type: "Container",
      style: "accent",
      items: [
        {
          type: "Image",
          url:
            "https://raw.githubusercontent.com/pnp/AdaptiveCards-Templates/main/samples/payslip/assets/img_spacer.png"
        },
        {
          type: "TextBlock",
          wrap: true,
          weight: "Bolder",
          color: "Accent",
          text: "hello"
        },
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "\n\nNet Pay",
                  wrap: true,
                  weight: "Bolder",
                  size: "Medium",
                  color: "Accent",
                  spacing: "ExtraLarge"
                }
              ]
            },
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "\n\n$2212.68",
                  wrap: true,
                  weight: "Bolder",
                  size: "Medium",
                  color: "Accent",
                  horizontalAlignment: "Right",
                  spacing: "ExtraLarge"
                }
              ]
            }
          ]
        }
      ],
      spacing: "ExtraLarge"
    },
    {
      type: "Container",
      items: [
        {
          type: "TextBlock",
          wrap: true,
          weight: "Bolder"
        },
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "Earnings",
                  wrap: true,
                  spacing: "ExtraLarge",
                  weight: "Bolder"
                }
              ]
            },
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "$3815.85",
                  wrap: true,
                  spacing: "ExtraLarge",
                  weight: "Bolder",
                  horizontalAlignment: "Right"
                }
              ]
            }
          ]
        }
      ],
      separator: true,
      spacing: "ExtraLarge"
    },
    {
      type: "Container",
      items: [
        {
          type: "TextBlock",
          wrap: true,
          weight: "Bolder"
        },
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "\n\nBonus - Salary\n\nCommission\n\nRegular Pay",
                  wrap: true,
                  spacing: "Small"
                }
              ]
            },
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "\n\n$75.00\n\n$87.00\n\n$3653.85",
                  wrap: true,
                  spacing: "Small",
                  horizontalAlignment: "Right"
                }
              ]
            }
          ]
        }
      ],
      spacing: "Medium"
    },
    {
      type: "Container",
      items: [
        {
          type: "TextBlock",
          wrap: true,
          weight: "Bolder"
        },
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "Deductions",
                  wrap: true,
                  weight: "Bolder"
                }
              ]
            },
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "$669.54",
                  wrap: true,
                  weight: "Bolder",
                  spacing: "ExtraLarge",
                  horizontalAlignment: "Right"
                }
              ]
            }
          ]
        }
      ],
      spacing: "Large"
    },
    {
      type: "Container",
      items: [
        {
          type: "TextBlock",
          wrap: true,
          weight: "Bolder"
        },
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text:
                    "\n\nChild Support\n\nDental PPO Plan\n\nDep Care SA\n\nHealth Care SA\n\nHMO Medical\n\nPrescription Dr.\n\nUnited Way",
                  wrap: true,
                  spacing: "Small"
                }
              ]
            },
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text:
                    "\n\n$432.33\n\n$3.21\n\n$25.00\n\n$122.00\n\n$25.00\n\n$7.00\n\n$55.00",
                  wrap: true,
                  spacing: "Small",
                  horizontalAlignment: "Right"
                }
              ]
            }
          ]
        }
      ],
      spacing: "Medium"
    },
    {
      type: "Container",
      items: [
        {
          type: "TextBlock",
          wrap: true,
          weight: "Bolder"
        },
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "Taxes",
                  wrap: true,
                  spacing: "ExtraLarge",
                  weight: "Bolder"
                }
              ]
            },
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "$933.63",
                  wrap: true,
                  spacing: "ExtraLarge",
                  weight: "Bolder",
                  horizontalAlignment: "Right"
                }
              ]
            }
          ]
        }
      ],
      spacing: "ExtraLarge"
    },
    {
      type: "Container",
      items: [
        {
          type: "TextBlock",
          wrap: true,
          weight: "Bolder"
        },
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text:
                    "\n\nEmployee Medicare\n\nFederal Income Tax\n\nSocial Security Income Tax",
                  wrap: true,
                  spacing: "Small"
                }
              ]
            },
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "\n\n$52.69\n\n$655.66\n\n$225.28",
                  wrap: true,
                  spacing: "Small",
                  horizontalAlignment: "Right"
                }
              ]
            }
          ]
        }
      ],
      spacing: "Medium"
    },
    {
      type: "ColumnSet",
      columns: [
        {
          type: "Column",
          width: "stretch",
          items: [
            {
              type: "ActionSet",
              actions: [
                {
                  type: "Action.Submit",
                  title: "⇦  June 1–15"
                }
              ]
            }
          ]
        },
        {
          type: "Column",
          width: "stretch",
          items: [
            {
              type: "ActionSet",
              actions: [
                {
                  type: "Action.Submit",
                  title: "July 1–15 ⇨"
                }
              ]
            }
          ]
        }
      ],
      spacing: "ExtraLarge",
      separator: true
    }
  ],
  backgroundImage: {
    horizontalAlignment: "Center"
  }
};
