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
    <main className="border border-red-600 border-solid w-3/4 h-5/6 md:w-[550px] md:h-[550px] mx-auto flex justify-center items-center">
      {gameOn ? <QuizPage /> : <StartPage gameStart={gameStart} />}
    </main>
  );
}

export default App;
