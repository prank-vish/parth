let ques = document.getElementById("ques");
let optionA = document.getElementById("optionA");
let optionB = document.getElementById("optionB");
let optionC = document.getElementById("optionC");
let start = document.getElementById("start");
let counter = document.getElementById("counter");
let score = document.getElementById("score");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let o = document.getElementById("o");
let t = document.getElementById("t");
let th= document.getElementById("th");
let f= document.getElementById("f");
let s = 0;

let conf;
let num = 2;
score.style.display="none";

function begin() {

    question1();
    score.style.display="flex";


}

function question1() {

    start.style.display = "none";
    ques.textContent = "Who built Taj Mahal?";
    optionA.value = "Babar";
    optionB.value = "Shah Jahaan";
    optionC.value = "Salim";

    optionA.style.display = "inline-block";
    optionB.style.display = "inline-block";
    optionC.style.display = "inline-block";
    one.classList.add("current");
    

}

function question2() {

    start.style.display = "none";
    ques.textContent = "Taj Mahal is made of which stone?";
    optionA.value = "Limestone";
    optionB.value = "RedStone";
    optionC.value = "White Marble";

    optionA.style.display = "inline-block";
    optionB.style.display = "inline-block";
    optionC.style.display = "inline-block";
    // one.classList.remove("current");
    two.classList.add("current");
    o.classList.add("currentline");

}

function question3() {

    start.style.display = "none";
    ques.textContent = "In which state of India is Taj Mahal situated ?";
    optionA.value = "UttarPradesh";
    optionB.value = "Delhi";
    optionC.value = "Rajasthan";

    optionA.style.display = "inline-block";
    optionB.style.display = "inline-block";
    optionC.style.display = "inline-block";
    // two.classList.remove("current");
    three.classList.add("current");
    t.classList.add("currentline");

}

function question4() {

    start.style.display = "none";
    ques.textContent = "Taj Mahal was built in ______.";
    optionA.value = "18th century";
    optionB.value = "17th century";
    optionC.value = "19th century";

    optionA.style.display = "inline-block";
    optionB.style.display = "inline-block";
    optionC.style.display = "inline-block";
    // three.classList.remove("current");
    four.classList.add("current");
    th.classList.add("currentline");

}

function question5() {

    start.style.display = "none";
    ques.textContent = "Taj Mahal is located at the bank of river ________.";
    optionA.value = "Ganga";
    optionB.value = "Yamuna";
    optionC.value = "Saraswati";

    optionA.style.display = "inline-block";
    optionB.style.display = "inline-block";
    optionC.style.display = "inline-block";
    // four.classList.remove("current");
    five.classList.add("current");
    f.classList.add("currentline");

}

function opt(ele) {

    console.log(ele);
    switch (ele) {

        case 'Shah Jahaan': optionB.style.backgroundColor = " rgb(20, 255, 20)";
            optionB.style.color = "black";
            s++;
            break;

        case 'Babar': optionA.style.backgroundColor = " #ff0011"
            optionA.style.color = "black";
            break;

        case 'Salim': optionC.style.backgroundColor = " #ff0011"
            optionC.style.color = "black";
            break;

        case 'White Marble': optionC.style.backgroundColor = " rgb(20, 255, 20)";
            s++;
            optionC.style.color = "black";
            break;

        case 'Limestone': optionA.style.backgroundColor = " #ff0011"
            optionA.style.color = "black";
            break;

        case 'RedStone': optionB.style.backgroundColor = " #ff0011"
            optionB.style.color = "black";
            break;

        case 'Rajasthan': optionC.style.backgroundColor = " #ff0011";
            optionC.style.color = "black";
            break;

        case 'UttarPradesh': optionA.style.backgroundColor = "rgb(20, 255, 20)";
            s++;
            optionA.style.color = "black";
            break;

        case 'Delhi': optionB.style.backgroundColor = " #ff0011"
            optionB.style.color = "black";
            break;

        case '19th century': optionC.style.backgroundColor = " #ff0011";
            optionC.style.color = "black";
            break;

        case '18th century': optionA.style.backgroundColor = "#ff0011";
            optionA.style.color = "black";
            break;

        case '17th century': optionB.style.backgroundColor = "rgb(20, 255, 20)";
            s++;
            optionB.style.color = "black";
            break;

        case 'Sarawati': optionC.style.backgroundColor = "#ff0011";
            optionC.style.color = "black";
            break;

        case 'Ganga': optionA.style.backgroundColor = "#ff0011";
            optionA.style.color = "black";
            break;

        case 'Yamuna': optionB.style.backgroundColor = "rgb(20, 255, 20)";
            s++;
            optionB.style.color = "black";
            break;


    }

    optionB.disabled = true;
    optionA.disabled = true;
    optionC.disabled = true;



    score.textContent = `Score : ${s}`;

    setTimeout(() => { clean(); }, 1500);
    conf = true;
    console.log(conf);
    if (conf) {

        switch (num) {
            case 2: setTimeout(() => { question2(); }, 1500);
                break;
            case 3: setTimeout(() => { question3(); }, 1500);
                break;
            case 4: setTimeout(() => { question4(); }, 1500);
                break;
            case 5: setTimeout(() => { question5(); }, 1500);
                break;
            default: score.textContent = ` ${s}/5`;
                optionA.style.display = "none";
                optionB.style.display = "none";
                optionC.style.display = "none";
                ques.textContent = "";
                setTimeout(()=>{
                    // window.location.replace("http://127.0.0.1:5500/quiz/quiz.html");
                    // window.location.href = "http://127.0.0.1:5500/quiz/quiz.html";
                },1500);


        }
        conf = false;
        num++;

    }
    console.log(num);

    return ele;

}

function clean() {
    // optionA.style.display="none";
    // optionB.style.display="none";
    // optionC.style.display="none";
    optionC.style.backgroundColor = " transparent";
    optionA.style.backgroundColor = " transparent";
    optionB.style.backgroundColor = " transparent";

    optionA.style.color = "white";
    optionB.style.color = "white";
    optionC.style.color = "white";

    optionC.disabled = false;
    optionA.disabled = false;
    optionB.disabled = false;

    console.log("this clean is called");
}

const b1 = document.getElementById('optionA');

b1.addEventListener('mouseover', () => {
    b1.style.backgroundColor = 'rgba(255, 255, 255, 0.452)';
});

b1.addEventListener('mouseout', () => {
    b1.style.backgroundColor = 'transparent';
});

const b2 = document.getElementById('optionB');

b2.addEventListener('mouseover', () => {
    b2.style.backgroundColor = 'rgba(255, 255, 255, 0.452)';
});

b2.addEventListener('mouseout', () => {
    b2.style.backgroundColor = 'transparent';
});

const b3 = document.getElementById('optionC');

b3.addEventListener('mouseover', () => {
    b3.style.backgroundColor = 'rgba(255, 255, 255, 0.452)';
});

b3.addEventListener('mouseout', () => {
    b3.style.backgroundColor = 'transparent';
});
