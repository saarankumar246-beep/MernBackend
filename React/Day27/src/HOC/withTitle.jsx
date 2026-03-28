const withTitle = (WrappedComponent) => {
  return (props) => {
    return (
      <WrappedComponent
        {...props}
        title="HOC Modified Text"
      />
    );
  };
};

export default withTitle;