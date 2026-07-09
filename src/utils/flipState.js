export let globalFlipState = null;

export const setFlipState = (state) => {
  globalFlipState = state;
};

export const clearFlipState = () => {
  globalFlipState = null;
};
