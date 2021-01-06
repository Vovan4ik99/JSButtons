'use strict';

function hide (ElemId) {
    ElemId.onclick = function () {
        if (ElemId.style.opacity = 1) {
            ElemId.style.opacity = 0; 
        }   
    }
}   

hide(document.getElementById('btn'));
hide(document.getElementById('btn1'));
hide(document.getElementById('btn2'));
hide(document.getElementById('btn3'));
hide(document.getElementById('btn4'));