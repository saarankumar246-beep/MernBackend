const withAlert = (WrappedComponent) => {
  return (props) => {
    const handleClick = () => {
      alert("Button clicked from HOC 🚀");
    };

    return <WrappedComponent {...props} handleClick={handleClick} />;
  };
};

export default withAlert;