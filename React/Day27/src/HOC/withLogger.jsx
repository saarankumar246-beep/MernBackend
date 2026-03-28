const withLogger = (WrappedComponent) => {
  return (props) => {
    const handleChange = (e) => {
      console.log(e.target.value);
    };

    return (
      <WrappedComponent
        {...props}
        handleChange={handleChange}
      />
    );
  };
};

export default withLogger;