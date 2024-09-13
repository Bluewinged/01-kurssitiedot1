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
  console.log(props);
  return (
    <>
      <section>
        <Part name={props.part1.name} exercises={props.part1.exercises} />
        <Part name={props.part2.name} exercises={props.part2.exercises} />
        <Part name={props.part3.name} exercises={props.part3.exercises} />
      </section>
    </>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <>
      <p>Tehtävien määrä yhteensä on {props.total}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course.name} />
      <Content
        part1={course.parts[0]}
        part2={course.parts[1]}
        part3={course.parts[2]}
      />
      <Total
        total={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </>
  );
};

export default App;
