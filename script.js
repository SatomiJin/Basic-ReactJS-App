const quizData = [{
        question: "Chủ Tịch Hồ Chí Minh sinh vào ngày tháng năm nào?",
        A: "19 tháng 5, 1890",
        B: "18 tháng 5, 1890",
        C: "17 tháng 5, 1890",
        D: "16 tháng 5, 1890",
        correct: "a",
    },
    {
        question: "Ngày thành lập Đảng Cộng Sản Việt Nam là?",
        A: "5 tháng 3, 1930",
        B: "4 tháng 2, 1930",
        C: "3 tháng 3, 1931",
        D: "3 tháng 2, 1930",
        correct: "d",
    },
    {
        question: "Ngày Chủ Tịch Hồ Chí Minh đọc Bản Tuyên Ngôn Độc Lập là ngày nào?",
        A: "Ngày 2-9-1946",
        B: "Ngày 2-9-1945",
        C: "Ngày 2-8-1945",
        D: "Ngày 3-9-1945",
        correct: "b",
    },
    {
        question: "Nguyễn ái Quốc lựa chọn con đường giải phóng dân tộc theo khuynh hướng chính trị vô sản vào thời gian nào?",
        A: "1917 ",
        B: "1918 ",
        C: "1919 ",
        D: "1920 ",
        correct: "d",
    },
    {
        question: "Tổ chức cộng sản nào ra đời đầu tiên ở Việt Nam?",
        A: "Hội Việt Nam cách mạng thanh niên",
        B: "Đông Dương cộng sản Đảng",
        C: "An Nam cộng sản Đảng",
        D: "Đông Dương cộng sản liên đoàn",
        correct: "b",
    },
    {
        question: "Hội nghị Hợp nhất thành lập Đảng CSVN (3/2/1930) thông qua các văn kiện nào sau đây:",
        A: "Chánh cương vắn tắt",
        B: "Sách lược vắn tắt",
        C: "Điều lệ vắn tắt và Chương trình vắn tắt",
        D: "Chánh cương vắn tắt, Sách lược vắn tắt, Điều lệ vắn tắt và Chương trình vắn tắt",
        correct: "d",
    },
    {
        question: "Ai là Tổng Bí thư đầu tiên của Đảng?",
        A: "Hồ Chí Minh",
        B: "Trần Văn Cung",
        C: "Trần Phú",
        D: "Lê Hồng Phong",
        correct: 'c'
    },
];
const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
let currentQuestion = 0;
let answer = undefined;
let score = 0;
const submitBtn = document.getElementById("submit");
loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuestion];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.A;
    b_text.innerText = currentQuizData.B;
    c_text.innerText = currentQuizData.C;
    d_text.innerText = currentQuizData.D;
}

function getSelected() {
    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            //Todo: hiển thị đáp án
            quiz.innerHTML = `<h2>Tổng số điểm của bạn là ${score}/${quizData.length}</h2> <button onClick="location.reload()">Refresh</button>`
        }
    }



});