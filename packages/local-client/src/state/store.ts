import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ActionType } from "./action-types";
import rootReducer from "./reducers";

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: "",
    type: "code",
    content: `class Developer extends Person {
  constructor(name, birthYear) {
    super(name, birthYear);
    this.role = "developer";
  }

  greet = () => {
    const {name, role, birthYear} = this
    return <h2>I'm {name}, {new Date().getFullYear() - birthYear} years old and i'm a {role}</h2>;
  };
}
const developer = new Developer("Sarah", 1998);
show(developer.greet())`,
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: "",
    type: "code",
    content: `class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
  greet = () => {
    return <h2>I'm {this.name}, {new Date().getFullYear() - this.birthYear}</h2>;
  }
}
const person = new Person("John", 2001);
show(person.greet());`,
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: "",
    type: "text",
    content:
      "## You can now code javascript inside your browser offline\n> Call show() to render something on the screen",
  },
});

store.getState();
