import FeedbackForm from "./components/FeedbackForm";
import SearchForm from "./components/SearchForm";


const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <SearchForm />
      <FeedbackForm />
    </div>
  );
};

export default App;