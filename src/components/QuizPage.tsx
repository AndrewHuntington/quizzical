import { useCallback, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import TriviaData from '../interfaces/TriviaData';
import Question from './Question';
import Button from './Button';

export default function QuizPage() {
  const [triviaObjects, setTriviaObjects] = useState<TriviaData[]>([]);

  // TODO: Do something better with the error
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((res) => res.json())
      .then((data) => setTriviaObjects(data.results))
      .catch((err) => console.warn(err));
  }, []);

  const triviaList = triviaObjects.map((trivia) => {
    const answers = [
      {
        id: nanoid(),
        answer: trivia.correct_answer,
        isCorrect: true,
        isSelected: false,
      },
      ...trivia.incorrect_answers.map((answer) => ({
        id: nanoid(),
        answer,
        isCorrect: false,
        isSelected: false,
      })),
    ];

    return (
      <Question key={nanoid()} question={trivia.question} answers={answers} />
    );
  });

  // TODO: Finish this function
  const checkAnswers = useCallback(() => {
    console.log(triviaList[0].props.answers);
  }, [triviaList]);

  return (
    <div className="flex justify-center items-center">
      <div className="w-4/5">
        <div className="flex flex-col sm:flex-row">{triviaList}</div>
        <div className="flex justify-center mb-6">
          <div className="w-28 h-9 mt-4 font-semibold text-xs">
            <Button onClick={checkAnswers} insideText="Check answers" />
          </div>
        </div>
      </div>
    </div>
  );
}
