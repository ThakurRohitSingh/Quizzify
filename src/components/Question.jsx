const Question = (props) => {
    let normalButtonElements = []; //For Normal Buttons at start of Quiz
    let answerButtonElements = []; //For AnswerButtons to show correct answers
    if (props.isChecked === false) {
      normalButtonElements = props.options.map((option) => {
        return (
          <button
            id={props.selectedAnswer === option.choice ? "selected" : ""}
            key={option.id}
            onClick={() => props.handleButtonClick(option.choice, props.id)}
            className="normal-button"
          >
            {option.choice}
          </button>
        );
      });
    } else {}
    return (
      <div className="question">
        <h1 className="question-title">Whole Question is there</h1>
        there i need to check for the option
        <hr className="question-divider" />
      </div>
    );

}

export default Question
