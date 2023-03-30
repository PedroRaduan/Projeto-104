Webcam.set({
    width:280,
    height:235,
    image_format: 'jpeg',
    jpeg_quality: 90
});

camera = document.getElementById('camera');
Webcam.attach(' #camera ');

function tirar(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultados").innerHTML = '<img id="imagem_tirada" src="'+data_uri+'"/>'
    });
}


console.log('versão ml5:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_YZT2RoMo/model.json', carregar_modelo);

function carregar_modelo(){
    console.log('modelo carregado')
}



function checar(){
    img = document.getElementById('imagem_tirada');
    classifier.classify(img, resultado);
}

function resultado(error, results){
    if(error){
    console.log(error);
    }
    else{
        console.log(results);
        document.getElementById('pessoa').innerHTML = results[0].label;
        document.getElementById('precisao').innerHTML = results[0].confidence.toFixed(3);
    }
}