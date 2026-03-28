import Input from "./component/Input";
import withLogger from "./HOC/withLogger";
import Button from "./component/Button";
import withAlert from "./HOC/withAlert";
import Title from "./component/Title";
import withTitle from "./HOC/withTitle";


const InputWithLogger = withLogger(Input);
const ButtonWithAlert = withAlert(Button);
const TitleWithHOC = withTitle(Title)

const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6">

      
      <InputWithLogger />
      <ButtonWithAlert />
      <TitleWithHOC />

    </div>
  );
};

export default App;