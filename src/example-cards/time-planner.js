export default {
  type: "AdaptiveCard",
  version: "1.0",
  body: [
    {
      text: "Time Planner",
      wrap: true,
      type: "TextBlock"
    },
    {
      type: "Container",
      items: [
        {
          type: "Container",
          id: "show_paper_1",
          items: [
            {
              type: "TextBlock",
              text: "Paid time off",
              weight: "bolder"
            },
            {
              type: "TextBlock",
              text: " **124** hours remaining"
            }
          ]
        },
        {
          type: "Container",
          id: "show_paper_2",
          items: [
            {
              type: "TextBlock",
              text: "Personal holidays",
              weight: "bolder"
            },
            {
              type: "TextBlock",
              text: " **0** hours remaining"
            }
          ]
        },
        {
          type: "Container",
          id: "show_paper_3",
          items: [
            {
              type: "TextBlock",
              text: "Volunteer time",
              weight: "bolder"
            },
            {
              type: "TextBlock",
              text: " **8** hours remaining"
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
          title: "Request Time Off",
          id: "12345",
          verb: "viewRequestTimeOff"
        }
      ]
    }
  ]
};
