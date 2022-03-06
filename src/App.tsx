import { useState, useCallback } from 'react';
import StartPage from './components/StartPage';
import QuizPage from './components/QuizPage';

function App() {
  const [gameOn, setGameOn] = useState(false);

  const gameStart = useCallback(() => {
    if (!gameOn) {
      setGameOn(true);
    }
  }, [gameOn]);

  return (
    <main
      className={`w-3/4 ${
        gameOn ? '' : 'h-5/6'
      } sm:w-[550px] sm:h-[550px] mx-auto flex justify-center items-center`}
    >
      {gameOn ? <QuizPage /> : <StartPage gameStart={gameStart} />}
    </main>
  );
}

export default App;
