// import * as ACData from "adaptivecards-templating";
import { AdaptiveCardUsingHostConfigContext } from "adaptivecards-react";
import { useState } from "react";
import * as React from "react";
import * as AC from "adaptivecards";
import { AlertAction } from "../card-objects/AlertAction";
import { SubmitAction } from "../card-objects/SubmitAction";
import { ExecuteAction } from "../card-objects/ExecuteAction";
import { TextInput } from "../card-objects/TextInput";
import { ChoiceSetInput } from "../card-objects/ChoiceSetInput";
import { DateInput } from "../card-objects/DateInput";
import { ToggleInput } from "../card-objects/ToggleInput";
import { TextBlock } from "../card-objects/TextBlockElement";
import Loader from "./Loader";
import timePlannerRequestTimeOff from "../example-cards/time-planner-request-time-off";
import timePlanner from "../example-cards/time-planner";
import ticketing from "../example-cards/ticketing";
import ticketingNew from "../example-cards/ticketing-new";

// Add custom components to the adaptive-cards registry
AC.GlobalRegistry.actions.register(AlertAction.JsonTypeName, AlertAction);
AC.GlobalRegistry.actions.register(SubmitAction.JsonTypeName, SubmitAction);
AC.GlobalRegistry.actions.register(ExecuteAction.JsonTypeName, ExecuteAction);
AC.GlobalRegistry.elements.register(TextInput.JsonTypeName, TextInput);
AC.GlobalRegistry.elements.register(ToggleInput.JsonTypeName, ToggleInput);
AC.GlobalRegistry.elements.register(DateInput.JsonTypeName, DateInput);
AC.GlobalRegistry.elements.register(TextBlock.JsonTypeName, TextBlock);
AC.GlobalRegistry.elements.register(
  ChoiceSetInput.JsonTypeName,
  ChoiceSetInput
);

const Card = ({ card, data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cardPayload, setCardPayload] = useState(card);

  // Handle action for submit button
  const onActionSubmit = (e) => {
    console.log("SUBMIT");
    console.log("inputs", e.data);
    //console.log("e.getAllInputs", e.;
    if (e.id === "submitdynamic") {
      alert("submitdynamic");
    } else if (e.id === "detaildynamic") {
      alert("detaildynamic");
    } else {
      alert("rejectdynamic");
    }
  };

  // Handle action for execute button
  // Is it a microapp or is it a smart notification?
  const onExecuteAction = (e) => {
    // Use the action verb to determnine which request to fire off
    // See 'verb' usage: https://adaptivecards.io/explorer/Action.Execute.html

    const actionType = e.getJsonTypeName();
    const { verb } = e;

    console.log(`executing action for ${verb}`);

    let response;
    if (actionType === "Action.Execute") {
      setIsLoading(true);
      // Make API call to fetch new card
      if (verb === "viewRequestTimeOff") {
        response = timePlannerRequestTimeOff;
      } else if (verb === "viewTimePlanner") {
        response = timePlanner;
      } else if (verb === "viewTicketing") {
        response = ticketing;
      } else if (verb === "viewTicketingNew") {
        response = ticketingNew;
      } else {
        response = cardPayload;
        response.body = [
          ...cardPayload.body,
          {
            text: "Fresh dynamic detail!",
            wrap: true,
            type: "TextBlock"
          }
        ];
      }

      setTimeout(() => {
        setCardPayload(response);
        setIsLoading(false);
      }, 700);
    }
  };

  // Create a Template instance from the card payload

  // "Expand" the template with data
  // This replaces the "${summary}" style variables in the card payload

  if (!cardPayload || isLoading) return <Loader />;

  return (
    <div className="Card">
      <AdaptiveCardUsingHostConfigContext
        payload={cardPayload}
        onActionSubmit={onActionSubmit}
        onExecuteAction={onExecuteAction}
      />
    </div>
  );
};

export default Card;
