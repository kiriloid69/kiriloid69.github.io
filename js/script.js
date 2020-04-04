let burger = document.getElementById("burger-button");

burger.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("open");
  burger.classList.toggle("open");
});

$('#headingOne').click(function(){
    if ($('#headingOne').hasClass('active-question')){
        $(".card-header").removeClass("active-question")
        $("#plus-icon1").text("+")
    } else {
        $(".card-header").removeClass("active-question")
        $("#headingOne").addClass("active-question")
        $(".plus-icon").text("+")
        $("#plus-icon1").text("—")
    }
});

$('#headingTwo').click(function(){
    if ($('#headingTwo').hasClass('active-question')){
        $(".card-header").removeClass("active-question")
        $("#plus-icon2").text("+")
    } else {
        $(".card-header").removeClass("active-question")
        $("#headingTwo").addClass("active-question")
        $(".plus-icon").text("+")
        $("#plus-icon2").text("—")
    }
});

$('#headingThree').click(function(){
    if ($('#headingThree').hasClass('active-question')){
        $(".card-header").removeClass("active-question")
        $("#plus-icon3").text("+")
    } else {
        $(".card-header").removeClass("active-question")
        $("#headingThree").addClass("active-question")
        $(".plus-icon").text("+")
        $("#plus-icon3").text("—")
    }
});

$('#headingFour').click(function(){
    if ($('#headingFour').hasClass('active-question')){
        $(".card-header").removeClass("active-question")
        $("#plus-icon4").text("+")
    } else {
        $(".card-header").removeClass("active-question")
        $("#headingFour").addClass("active-question")
        $(".plus-icon").text("+")
        $("#plus-icon4").text("—")
    }
});

$('#headingFive').click(function(){
    if ($('#headingFive').hasClass('active-question')){
        $(".card-header").removeClass("active-question")
        $("#plus-icon5").text("+")
    } else {
        $(".card-header").removeClass("active-question")
        $("#headingFive").addClass("active-question")
        $(".plus-icon").text("+")
        $("#plus-icon5").text("—")
    }
});

$('#headingSix').click(function(){
    if ($('#headingSix').hasClass('active-question')){
        $(".card-header").removeClass("active-question")
        $("#plus-icon6").text("+")
    } else {
        $(".card-header").removeClass("active-question")
        $("#headingSix").addClass("active-question")
        $(".plus-icon").text("+")
        $("#plus-icon6").text("—")
    }
});




// calculator

/* Калькулятор для света*/

function calcLightLetters() {
    const form = document.querySelector('#firstCalculator');
    let letters, height, font, type, resultFirst, add, deduct, count;

    getValues();
    counter();
    calcResult();
    showResult();

    form.onclick = () => {
        getValues();
        counter();
        calcResult();
        showResult();
    };

    form.oninput = () => {
        getValues();
        counter();
        calcResult();
        showResult();
    };

    function getValues() {
        letters = document.querySelector('#text').value;
        height = document.querySelector('#letterHeight').value;
        font = document.querySelector('#font').value;
        type = document.querySelector('#type').value;
        add = document.querySelector('#plus');
        deduct = document.querySelector('#minus');
        count = document.querySelector('#countFirst').value;
    }


    function counter() {

        document.querySelector('#countFirst').value = count;

        add.onclick = () => {
            count++;
            document.querySelector('#countFirst').value = count;
        };

        if (count == 1)
            document.querySelector('#countFirst').value = 1;
        else {
            deduct.onclick = () => {
                count--;
                document.querySelector('#countFirst').value = count;
            };
        }         
    }

    function calcResult() {

        let price = [
            [73, 92, 98],
            [120, 150, 160],
            [120, 150, 160],
            [45, 57, 60],
            [55, 69, 74]
        ];

        resultFirst = letters.replace(/ /g, "").length * height * price[type-1][font-1] * count;
    }

    function showResult() {
        const output = document.querySelector("#resultFirst");
        output.textContent = resultFirst;
    }
}

function calcLightBox() {
    const form = document.querySelector('#secondCalculator');
    let width, height, type,  resultSecond, add, deduct, count;

    getValuesSec();
    calcResultSec();
    showResultSec();

    form.onclick = () => {
        getValuesSec();
        counterSec();
        calcResultSec();
        showResultSec();
    };

    form.oninput = () => {
        getValuesSec();
        counterSec();
        calcResultSec();
        showResultSec();
    };

    function getValuesSec() {
        width = document.querySelector('#width-box').value;
        height = document.querySelector('#height-box').value;
        add = document.querySelector('#plusSec');
        deduct = document.querySelector('#minusSec');
        count = document.querySelector('#countSecond').value;
        type = document.querySelector('#variable').value;
    }

    function counterSec() {
        add.onclick = () => {
            count++;
            document.querySelector('#countSecond').value = count;
        };
        if( count >= 0){
            deduct.onclick = () => {
                count--;
                document.querySelector('#countSecond').value = count;
            };
        }
    }

    function calcResultSec() {
        let price = [
            [7900,6500],
            [11800,6500],
            [13800,6900]
        ];

        if (width * height <= 1000000)
            resultSecond = price[type-1][1] * count;
        else
            resultSecond = (price[type-1][0] * width * height) / 1000000 * count;
    }

    function showResultSec() {
        const output = document.querySelector("#resultSecond");
        output.textContent = resultSecond;
    }
}

function calcLightConsole() {
    const form = document.querySelector('#thirdCalculator');
    let width, height, type,  resultThird, add, deduct, count;

    getValuesThird();
    calcResultThird();
    showResultThird();

    form.onclick = () => {
        getValuesThird();
        counterThird();
        calcResultThird();
        showResultThird();
    };

    form.oninput = () => {
        getValuesThird();
        counterThird();
        calcResultThird();
        showResultThird();
    };

    function getValuesThird() {
        width = document.querySelector('#width-consoles').value;
        height = document.querySelector('#height-consoles').value;
        add = document.querySelector('#plusThird');
        deduct = document.querySelector('#minusThird');
        count = document.querySelector('#countThird').value;
        type = document.querySelector('#variableThird').value;
    }

    function counterThird() {
        add.onclick = () => {
            count++;
            document.querySelector('#countThird').value = count;
        };
        deduct.onclick = () => {
            count--;
            document.querySelector('#countThird').value = count;
        };
    }

    function calcResultThird() {
        let price = [
            [12000, 8000],
            [18000, 10000],
            [19000, 12000],
            [18000, 10000]
        ];

        if (width * height <= 1000000)
            resultThird = price[type-1][1] * count;
        else
            resultThird = (price[type-1][0] * width * height) / 1000000 * count;
    }

    function showResultThird() {
        const output = document.querySelector("#resultThird");
        output.textContent = resultThird;
    }
}

function calcTable() {
    const form = document.querySelector('#fourthCalculator');
    let width, height, type, resultFourth, add, deduct, count;

    getValuesFourth();
    calcResultFourth();
    showResultFourth();

    form.onclick = () => {
        getValuesFourth();
        counterFourth();
        calcResultFourth();
        showResultFourth();
    };

    form.oninput = () => {
        getValuesFourth();
        counterFourth();
        calcResultFourth();
        showResultFourth();
    };

    function getValuesFourth() {
        width = document.querySelector('#width-table').value;
        height = document.querySelector('#height-table').value;
        add = document.querySelector('#plusFourth');
        deduct = document.querySelector('#minusFourth');
        count = document.querySelector('#countFourth').value;
        type = document.querySelector('#variableFourth').value;
    }

    function counterFourth() {
        add.onclick = () => {
            count++;
            document.querySelector('#countFourth').value = count;
        };
        deduct.onclick = () => {
            count--;
            document.querySelector('#countFourth').value = count;
        };
    }

    function calcResultFourth() {
        let price = [
            [10,10],
            [10,10],
            [10,10],
            [10,10]
        ];

        if (width * height <= 1000000)
            resultFourth = price[type-1][1] * count;
        else
            resultFourth = (price[type-1][0] * width * height) / 1000000 * count;
    }

    function showResultFourth() {
        const output = document.querySelector("#resultFourth");
        output.textContent = resultFourth;
    }
}





calcLightLetters();
calcLightBox();
calcLightConsole();
calcTable();
// calcTicker();




/* Калькулятор для света*/