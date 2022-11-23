export const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export const populateQuestions = (answers, Images) => {
    let used = [];
    let questions = [];
    for (let i=0; i < answers.length; i++) {
        let wrong_answers = shuffleArray(Object.keys(Images).filter(pic => pic !== answers[i] && !used.includes(pic))).slice(0,3);
        questions.push(shuffleArray(wrong_answers.concat(answers[i])));
        used.push(answers[i]);
    };
    return questions;
}
