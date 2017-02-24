const enterKey = 13;
const spaceKey = 32;

export function makeActionCreatorEnterSpaceClickable(actionCreator) {
  return e => {
    if (
      // if event type is not key event
      !e.keyCode ||
      (e.keyCode === enterKey || e.keyCode === spaceKey)
    ) {
      return actionCreator();
    }
    return null;
  };
}
