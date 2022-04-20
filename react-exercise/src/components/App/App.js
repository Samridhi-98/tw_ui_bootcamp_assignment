// import DynamicElement from "../DynamicElement/DynamicElement";
import MovieList from "../MovieList/MovieList";

function App() {
  // const pageElements = [
  //   {
  //     htmlElementName: "div",
  //     innerHTML: "It's a div",
  //     style: {
  //       border: "1px solid green",
  //       backgroundColor: "#e1edaf",
  //       color: "#000",
  //     },
  //   },
  //   {
  //     htmlElementName: "div",
  //     innerHTML: "Hey Folk! Its a div",
  //     style: {
  //       border: "1px solid green",
  //       backgroundColor: "#e1edaf",
  //       color: "#000",
  //     },
  //   },
  //   {
  //     htmlElementName: "section",
  //     innerHTML: "Its a section",
  //     style: {
  //       border: "1px solid green",
  //       backgroundColor: "#e1edaf",
  //       color: "#000",
  //     },
  //   },
  //   {
  //     htmlElementName: "section",
  //     innerHTML: "Welcome to UI Bootcamp",
  //     style: {
  //       border: "1px solid green",
  //       backgroundColor: "#e1edaf",
  //       color: "#000",
  //     },
  //   }
  // ];

  return (
    <>
      {/* <DynamicElement props={pageElements} /> */}
      <MovieList />
    </>
  );
}

export default App;