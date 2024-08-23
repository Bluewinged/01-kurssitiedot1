const Header = (props) => {
  console.log(props);
  return (
    <>
      <h1>Hei, olet kurssilla {props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        Osan {props.name} tehtävien määrä on {props.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <section>
        <Part name={props.part1} exercises={props.exercises1} />
        <Part name={props.part2} exercises={props.exercises2} />
        <Part name={props.part3} exercises={props.exercises3} />
      </section>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />

      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </>
  );
};

export default App;
