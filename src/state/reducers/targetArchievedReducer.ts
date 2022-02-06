const targetAchievedReducer = (
  state: boolean = false,
  action: TargetAchievedPayload
) => {
  switch (action.type) {
    case "TARGET_COMPLETE":
      return true;
    default:
      return state;
  }
};

export default targetAchievedReducer;
