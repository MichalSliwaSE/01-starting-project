import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by ...",
  },
  {
    image: jsxImg,
    title: "JSX",
    description: "Return (potentially dynamic) HTML(ish) code to define..",
  },
  {
    image: propsImg,
    title: "Props",
    description: "Make components configurable (and therefore reusable) by ...",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component...",
  },
];
