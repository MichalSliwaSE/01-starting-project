import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[getRandomInt(reactDescriptions.length)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
             <CoreConcept
              title={CORE_CONCEPTS[1].title}
              image ={CORE_CONCEPTS[1].image}
              description={CORE_CONCEPTS[1].description}
            />
             <CoreConcept {...CORE_CONCEPTS[2]}/>
             <CoreConcept {...CORE_CONCEPTS[3]}/>
           
          </ul>
          <h2>Time to get started!</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
