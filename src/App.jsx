import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              image={CORE_CONCEPTS[1].image}
              description={CORE_CONCEPTS[1].description}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
          <h2>Time to get started!</h2>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Text</TabButton>
            <TabButton>Text</TabButton>
            <TabButton>Text</TabButton>
            <TabButton>Text</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
