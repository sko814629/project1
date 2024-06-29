document.getElementById('btn').addEventListener('click', function(){
    var img_container = document.getElementById('img-container');
    if(img_container.style.display ==='none'){
        img_container.style.display ='block';
    }
    else{
        img_container.style.display='none';
    }
});