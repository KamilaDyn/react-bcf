export const withHook = (hook, view) => {
  return (props) => {
    return view(hook(props));
  };
};
