function startClassification()
{navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/UDKwwnw-5/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results)
        random_color_r=Math.floor(Math.random()*255)+1;
        random_color_g=Math.floor(Math.random()*255)+1;
        random_color_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='Minecraft Mob:'+results[0].label;
        document.getElementById("result_confidence").innerHTML='Quality of PC:'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_confidence").style.color="rgb("+random_color_r+","+random_color_g+","+random_color_b+")";
        document.getElementById("result_label").style.color="rgb("+random_color_r+","+random_color_g+","+random_color_b+")";      
        img=document.getElementById("MOB");

        if (results[0].label=="Zombie")
        {
            img.src="https://media.tenor.com/EP_7uOYxyBAAAAAM/zombie-dancing-minecraft.gif";
        }
        else if (results[0].label=="Creeper")
        {
            img.src="https://geeksoncoffee.com/wp-content/uploads/2020/01/3eqz5m.jpg";
        }
        else if (results[0].label=="Sheep")
        {
            img.src="https://i.imgflip.com/6k2hur.jpg";
        }
        else if (results[0].label=="Cow")
        {
            img.src="https://i.pinimg.com/564x/eb/56/f0/eb56f041e98c8ebbec743ac3b1b574f9.jpg";
        }
        else
        {
            img.src="https://i.ytimg.com/vi/BHdALEyz5u0/maxresdefault.jpg";
        }
    }
}