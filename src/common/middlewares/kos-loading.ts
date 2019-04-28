import KOS, { KosModel } from "kos-core";

const KOSUtil = KOS.Util;

const createLoadingAction = (action: any, isLoading: boolean) => {
  const { namespace, type } = KOSUtil.getActionType(action.type);
  const model: KosModel = KOS.getModel(namespace || "");
  let async;
  if (model) {
    async = model.getAsync && model.getAsync(type);
  }
  if (async) {
    return {
      type: `${namespace}/setState`,
      payload: {
        [`${type}_loading`]: isLoading
      }
    };
  }
  return null;
};

export default (store: any) => (next: any) => async (action: any) => {
  const { dispatch } = store;

  const showLoadingAction = createLoadingAction(action, true);
  if (showLoadingAction) {
    dispatch(showLoadingAction);
  }

  await next(action);

  const hideLoadingAction = createLoadingAction(action, false);
  if (hideLoadingAction) {
    dispatch(hideLoadingAction);
  }
};
