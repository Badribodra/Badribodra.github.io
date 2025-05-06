function Done(){
    //Declaring variables//
    var GGanswer=0;
    var q1=document.querySelector(".ul1 li input[type='radio']:checked").value;
    var q2=document.querySelector(".ul2 li input[type='radio']:checked").value;
    var q3=document.querySelector(".ul3 li input[type='radio']:checked").value;
    var q4=document.querySelector(".ul4 li input[type='radio']:checked").value;
    var q5=document.querySelector(".ul5 li input[type='radio']:checked").value;
    
    //if statements to tell the user how many he/she got right//
    if (q1=="Climate change awareness"){
    GGanswer++;
    }
    if (q2=="ChatGPT-4o’s image generation"){
        GGanswer++;
    }
    if (q3=="Politicians climbing landmarks to escape floods"){
        GGanswer++;
    }
    if (q4=="Double exposure"){
        GGanswer++;
    }
    if (q5=="City-wide distribution of custom Artivism"){
        GGanswer++;
    }
    if (GGanswer==0){
        alert(GGanswer + "/5\n (˘･_･˘) \n  Sadly all your answers are wrong. Try again");
    }
    if (GGanswer==1){
        alert(GGanswer + "/5\n (* ￣︿￣) \n You only got 1 answer correct. Try again")
    }
    if (GGanswer>1 && GGanswer<5){
        alert(GGanswer + "/5\n (◎﹏◎) \n You have "+ GGanswer +" correct answers. Try again and get all 5 answers right");
    }
    if (GGanswer==5){
        alert(GGanswer + "/5\n ヾ(＠⌒ー⌒＠)ノ \n Congratulation, you got all the answers correct.");
    }
}