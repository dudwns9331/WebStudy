export const useConfirm = (message, onConfirm, onRejection) => {
  if (onConfirm && typeof onConfirm !== "function") {
    return;
  }
  if (onRejection && typeof onRejection !== "function") {
    return;
  }

  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onRejection();
    }
  };
  return confirmAction;
};
