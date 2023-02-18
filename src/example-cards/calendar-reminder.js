export default {
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  type: "AdaptiveCard",
  version: "1.0",
  speak:
    "Your  meeting about \"Adaptive Card design session\" is starting at ${formatDateTime(start.dateTime, 'HH:mm')}pmDo you want to snooze  or do you want to send a late notification to the attendees?",
  body: [
    {
      type: "TextBlock",
      text: "${summary}",
      size: "Large",
      weight: "Bolder",
      wrap: true,
      style: "heading"
    },
    {
      type: "TextBlock",
      text: " ${location} ",
      isSubtle: true,
      wrap: true
    },
    {
      type: "TextBlock",
      text:
        "${formatDateTime(start.dateTime, 'HH:mm')} - ${formatDateTime(end.dateTime, 'hh:mm')}",
      isSubtle: true,
      spacing: "None",
      wrap: true
    },
    {
      type: "TextBlock",
      text: "Snooze for",
      wrap: true
    },
    {
      type: "Input.ChoiceSet",
      id: "snooze",
      value: "${reminders.overrides[0].minutes}",
      choices: [
        {
          $data: "${reminders.overrides}",
          title: "${minutes} minutes",
          value: "${minutes}"
        }
      ]
    }
  ],
  actions: [
    {
      type: "Action.Submit",
      title: "Snooze",
      data: {
        x: "snooze"
      }
    },
    {
      type: "Action.Submit",
      title: "I'll be late",
      data: {
        x: "late"
      }
    }
  ]
};
