console.log("CARVER 홈페이지가 시작되었습니다.");


const project01Slides =
    document.querySelectorAll(".project01-slide");

const project01Prev =
    document.querySelector(".project01-prev");

const project01Next =
    document.querySelector(".project01-next");


let project01Current = 0;


/* 사진 변경 */
function showProject01Slide(index) {

    // 기존 사진 숨기기
    project01Slides[project01Current]
        .classList.remove("active");

    // 현재 사진 번호 변경
    project01Current = index;

    // 처음보다 작으면 마지막 사진으로
    if (project01Current < 0) {
        project01Current =
            project01Slides.length - 1;
    }

    // 마지막보다 크면 첫 번째 사진으로
    if (project01Current >= project01Slides.length) {
        project01Current = 0;
    }

    // 새로운 사진 표시
    project01Slides[project01Current]
        .classList.add("active");
}


/* 다음 사진 */
function nextProject01() {

    showProject01Slide(
        project01Current + 1
    );
}


/* 이전 사진 */
function prevProject01() {

    showProject01Slide(
        project01Current - 1
    );
}


/* 오른쪽 버튼 */
project01Next.addEventListener(
    "click",
    nextProject01
);


/* 왼쪽 버튼 */
project01Prev.addEventListener(
    "click",
    prevProject01
);


/* 5초마다 자동으로 다음 사진 */
let project01Timer =
    setInterval(nextProject01, 5000);


/* 마우스로 버튼을 누르면 자동 재생 타이머 초기화 */

function resetProject01Timer() {

    clearInterval(project01Timer);

    project01Timer =
        setInterval(nextProject01, 5000);
}


project01Next.addEventListener(
    "click",
    resetProject01Timer
);


project01Prev.addEventListener(
    "click",
    resetProject01Timer
);