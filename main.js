function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Z9N2k5ARI/model.json', sound);
}
function sound()
{ 
 classifier.classify( gotResults); }

 function gotResult(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("detected").innerHTML = " Detected Dog - "+dog+ ", Detected Cat - " +cat+ ", Detected Rabbit - "+rabbit+ ", Detected Bird - "+bird ;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").innerHTML = "Detected Voice is of - " + results[0].label;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img = document.getElementById("animal_images");
        if (results[0].label == "Barking"){
            img.src = "gif1.gif" ;
            dog = dog + 1;
        }else  if (results[0].label == "Mewing"){
            img.src = "gif3.gif" ;
            cat = cat + 1;
         } else  if (results[0].label == "Honking"){
            img.src = "gif2.gif" ;
            rabbit = rabbit + 1;
        } else  if (results[0].label == "Tweeting"){
            img.src = "gif4.gif" ;
            bird = bird + 1;
        }
         }
           }
   
