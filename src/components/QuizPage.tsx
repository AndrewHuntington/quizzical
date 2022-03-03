import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

interface QuestionData {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export default function QuizPage() {
  const [questions, setQuestions] = useState<QuestionData[]>([]);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  // TODO: Figure out how to convert HTML code to comprehendible text
  const questionList = questions.map((question) => (
    <div key={nanoid()}>
      {console.log(question)}
      <h2>{question.question}</h2>
    </div>
  ));

  return <div>{questionList}</div>;
}
