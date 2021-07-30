export const useShoppingCardData = () => {
  const handleDelete = (id, dispatch) => {
    dispatch({ id, type: "REMOVE" });
  };

  return {
    handleDelete,
  };
};
