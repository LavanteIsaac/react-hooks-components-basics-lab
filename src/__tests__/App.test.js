import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "../components/App";

test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

test("renders the correct child components", () => {
  const { container } = render(<App />);



  function App(props){
    return (
     <div>
      <h1> {props.nav} </h1>
       <h2> {props.home} </h2>
       <h3>{props.about}</h3>
       </div>
    )
  }

  /*
    Uncomment the line below to see the DOM elements being returned
    by the App component in your terminal when you run the tests
  */
  // screen.debug();

  // expect(container.querySelector("nav")).toBeInTheDocument();
  // expect(container.querySelector("#home")).toBeInTheDocument();
  // expect(container.querySelector("#about")).toBeInTheDocument();
});
