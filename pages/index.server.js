import moment from 'moment';

export default function Home() {
  const formattedDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  return (
    <>
      <h1>React Server Components Test</h1>
      <p>Current time: {formattedDate}</p>
    </>
  );
}
