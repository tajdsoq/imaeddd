var button = document.querySelector('.href');


function printName()  {
    const name = document.getElementById('name').value;
    // document.getElementById("result").innerText = name;
    if(name === '급훈'){
        button.addEventListener("click", function(){
        window.location.href = "http://127.0.0.1:5500/17/motto.html";
        });
    }
    else if(name === '학급가치관'){
        button.addEventListener("click", function(){
        window.location.href = "http://127.0.0.1:5500/17/values.html";
        });
    }
    else if(name === '단임선생님 소개'){
        button.addEventListener("click", function(){
        window.location.href = "http://127.0.0.1:5500/17/tr.html";
        });
    }
    else if(name === '학생 소개'){
        button.addEventListener("click", function(){
        window.location.href = "http://127.0.0.1:5500/17/st.html";
        });
    }
    else if(name === '과제'){
        button.addEventListener("click", function(){
        window.location.href = "http://127.0.0.1:5500/17/1-5%20assignment.html";
        });
    }
    else if(name === '수행평가'){
        button.addEventListener("click", function(){
        window.location.href = "http://127.0.0.1:5500/17/performance%20.html";
        });
    }
    else if(name === '급식'){
        button.addEventListener("click", function(){
        window.location.href = "http://127.0.0.1:5500/17/schoollunch.html";
        });
    }
    else if(name === '학급일정'){
        button.addEventListener("click", function(){
        window.location.href = "http://127.0.0.1:5500/17/schedule.html";
        });
    }
    else if(name === '지필안내'){
        button.addEventListener("click", function(){
        window.location.href = "http://127.0.0.1:5500/17/test.html";
        });
    }
    else if(name === '메인'){
        button.addEventListener("click", function(){
        window.location.href = "http://127.0.0.1:5500/17/main.html";
        });
    }
    else{
        button.addEventListener("click", function(){
        window.location.href = "http://127.0.0.1:5500/17/no.html";
        });
    }


    
}




var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
    
        setTimeout(showSlides, 2000); // 2초마다 이미지가 체인지됩니다
    }

