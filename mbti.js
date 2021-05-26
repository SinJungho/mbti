function start(){
    $(".start").hide();
    // $(".img-cover").hide();
    $(".question").show();
    // $("body").show();
    next();
}

$("#A").click(function(){
    // console.log($("#type").val());
    var type = $("#type").val();  //EI 값이 들어갈 것
    var preValue = $("#"+type).val(); // "#EI"
    $("#"+type).val(parseInt(preValue) + 1);
    next();
});
$("#B").click(function(){
    next();
});
function next(){
    if(num == 13){
        $(".question").hide();
        $(".result").show();
        // mbti 문자열 추가
        var mbti = "";
        ($("#EI").val() < 2) ? mbti += "I" : mbti += "E";
        ($("#SN").val() < 2) ? mbti += "N" : mbti += "S";
        ($("#TF").val() < 2) ? mbti += "F" : mbti += "T";
        ($("#JP").val() < 2) ? mbti += "P" : mbti += "J";
        // console.log(mbti);
        $("#img").attr("src", result[mbti]["img"]);
        $("#book").html(result [mbti]["books"]);
        $("#explain").html(result [mbti]["explain"]);
        
    } else{
        $(".progress-bar").attr("style", "width: calc(100/12*"+num+"%");
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q [num]["A"]);
        $("#B").html(q [num]["B"]);
    num++;
    }
}