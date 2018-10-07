export const actionParams = store => ({
    state: store.getState(),
    dispatch: store.dispatch.bind(store),
});

export const composeAction = (store, action) => (
    (typeof action === 'function')
        ? action(actionParams(store))
        : action
);
