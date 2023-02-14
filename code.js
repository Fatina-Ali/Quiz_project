
// local storage
window.localStorage.setItem("q1", "لمن كان السيف الذي أطلق عليه ذو الوشاح بالفتوحات الإسلامية؟")

window.localStorage.setItem("q2","ما اسم أصغر الشهداء بمعركة بدر؟")



window.localStorage.setItem("q3","كم استمرت الدعوة السرية؟")
window.localStorage.setItem("q4","ما هي السورة التي نزلت دفعة واحدة ؟")
window.localStorage.setItem("q5", "ماهو عدد سجدات التلاوة التي وردت في القرآن الكريم؟")

//#################################################################################################

//Get the element
let quNum = document.getElementById("questionNumber");
let quText = document.getElementById("questionText");
let select1 = document.getElementById("select1");
let select2 = document.getElementById("select2");
let select3 = document.getElementById("select3");

//###################################################################################################

//function to show questions
function get_question() {
    let getValueScore = window.localStorage.getItem("score")
    if (getValueScore == null) {
        document.getElementById("score").textContent = " :نقاطك الحالية"
        
    }
    else {
        document.getElementById("score").textContent = `${getValueScore + " :نقاطك الحالية"}`
    
        if (getValueScore == "0") {
            quNum.textContent = ":السؤال الأول";
            quText.textContent = window.localStorage.getItem("q1");
            select1.textContent = "سعد بن معاذ رضي الله عنه"
            select3.textContent = "عمر بن الخطاب رضي الله عنه"
            select2.textContent="بلال بن رباح الحبشي رضي الله عنه"
        
    }

        if (getValueScore == "1") {
            quNum.textContent = ":السؤال الثاني";
            quText.textContent = window.localStorage.getItem("q2");
            select2.textContent = "عثمان بن عفان"
            select3.textContent = "عمير بن أبي وقاص"
            select1.textContent="عبد الرحمن بن مسعود"
        
    }

        if (getValueScore == "2") {
            quNum.textContent = ":السؤال الثالث";
            quText.textContent = window.localStorage.getItem("q3");
            select3.textContent = "ثلاث سنوات"
            select1.textContent = "خمس سنوات"
            select2.textContent="عشر سنوات"
        
    }

        if (getValueScore == "3") {
            quNum.textContent = "Four question:";
            quText.textContent = window.localStorage.getItem("q4");
            select1.textContent = "سورة الغاشية"
            select2.textContent = "سورة العلق"
            select3.textContent="سورة الفاتحة"
        
    }

        if (getValueScore == "4") {
            quNum.textContent = "Five question:";
            quText.textContent = window.localStorage.getItem("q5");
            select2.textContent = "عشرون سجدة"
            select3.textContent = "خمسة عشر سجدة"
            select1.textContent="عشرة سجدات"
        
    }
        if (getValueScore == "5") {
            confirm("!! لقد نجحت في الاختبار , تهانينا ")
    }
        
    }

}

//######################################################################################################

window.onload = function () {
    if (window.localStorage.getItem("score") != null) {
        if (document.getElementById("startbtn") != null) {
            document.getElementById("startbtn").remove()         
        }
 
    }
    
    get_question();
}

//#######################################################################################################

document.body.addEventListener("click", event => {
    if (event.target.className == "select") {

        if ((event.target.textContent) == (select3.textContent)) {
            select3.style.cssText = "color:green ; font-size:25px"
            confirm("الجواب صحيح")
            let w = window.localStorage.getItem("score")
            window.localStorage.removeItem("score")
            window.localStorage.setItem("score", `${Number(w) + 1}`)
            setTimeout(function () {
                select3.style.cssText = "color:black ; font-size:15px";
                window.location.reload()
            }, 1000);
                  
        }
        else {
            let v = event.target.id;
            document.getElementById(`${v}`).style.cssText = "color:red ; font-size:25px"
            confirm("الجواب خاطئ , حاول مرة أخرى")
            setTimeout(function () {
                document.getElementById(`${v}`).style.cssText = "color:black ; font-size:15px"
                    
                window.location.reload()
            }, 1000);

        }
        
    }

//##################################################################################################
    
    if (event.target.className == "repeatbtn") {
        window.localStorage.removeItem("score")
        window.location.reload()
        
        
    }

//###################################################################################################
    
    if (event.target.className == "startbtn") {
        document.getElementById("startbtn").remove()
        window.localStorage.setItem("score", "0")
        get_question();
        
    }
    
})
// window.localStorage.clear()