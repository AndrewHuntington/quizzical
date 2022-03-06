import { useCallback, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Question from './Question';
import Button from './Button';

interface TriviaData {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export default function QuizPage() {
  const [triviaObjects, setTriviaObjects] = useState<TriviaData[]>([]);

  // TODO: Do something better with the error
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((res) => res.json())
      .then((data) => setTriviaObjects(data.results))
      .catch((err) => console.warn(err));
  }, []);

  // TODO: Figure out how to convert HTML code to comprehendible text
  const triviaList = triviaObjects.map((trivia) => (
    <Question
      key={nanoid()}
      question={trivia.question}
      correct_answer={trivia.correct_answer}
      incorrect_answers={trivia.incorrect_answers}
    />
  ));

  const checkAnswers = useCallback(() => {
    console.log('Checking answers');
  }, []);

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
