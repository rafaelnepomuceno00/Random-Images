import Body from './Components/Body';
import Card from './Components/Card';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  let numbers = [];
  function generateRandomNumbers() {
    for (let i = 0; numbers.length < 30; i++) {
      let number = Math.floor(Math.random() * 50);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
  }
  generateRandomNumbers();
  return (
    <>
      <Header />
      <Body>
        {numbers.map((item) => (
          <Card img={item} />
        ))}
      </Body>
      <Footer />
    </>
  );
}

export default App;
