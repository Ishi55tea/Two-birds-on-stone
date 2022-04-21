var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}
recognition.onresult= function(event) {
    console.log(event)
    var content = event.results[0][0].transcript
    console.log(content)
    document.getElementById("textbox").innerHTML = content;
    if (content=="random words") {
        speak();
        console.log("taking selfie after joke")
    }
    
}
function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach( camera );
    setTimeout(function()
    {
        img_id="1_img"
        speakdata="Taking Selfie in 5 4 3 2 1"
    utter = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utter)
        take_snapshot()
    },5000)

    setTimeout(function()
    {
        img_id="2_img"
        speakdata="Taking Selfie in 10 9 8 7 6 5 4 3 2 1"
    utter = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utter)
        take_snapshot()
    },10000)

    setTimeout(function()
    {
        img_id="3_img"
        speakdata="Taking Selfie in 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1"
    utter = new SpeechSynthesisUtterance(speakdata)
    synth.speak(utter)
        take_snapshot()
    },15000)
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });
 camera=document.getElementById("camera")
 function take_snapshot() {
    Webcam.snap(function(data_uri){
     if (img_id=="1_img") {
        
            document.getElementById("result1").innerHTML='<img id="1_img" src="'+data_uri+'">'
           
     }
     if (img_id=="2_img") {
        
        document.getElementById("result2").innerHTML='<img id="2_img" src="'+data_uri+'">'
       
 }
 if (img_id=="3_img") {
        
    document.getElementById("result3").innerHTML='<img id="3_img" src="'+data_uri+'">'
   
}
    })
 }
 function save() {
     link=document.getElementById("link")
     image=document.getElementById("selfie_image") .src
     link.href=image
     link.click()
 }