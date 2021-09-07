let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: '/roll-chart/' }).then(function(reg) {
    if(reg.installing) {
      //console.log('Service worker installing');
    } else if(reg.waiting) {
      //console.log('Service worker installed');
    } else if(reg.active) {
      //console.log('Service worker active');
    }
  }).catch(function(error) {
    console.log('Registration failed with ' + error);
  });
}
function imgLoad(imgJSON) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', imgJSON.url);
    request.responseType = 'blob';
    request.onload = function() {
      if (request.status == 200) {
        var arrayResponse = [];
        arrayResponse[0] = request.response;
        arrayResponse[1] = imgJSON;
        resolve(arrayResponse);
      } else {
        reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
      }
    };
    request.onerror = function() {
      reject(Error('There was a network error.'));
    };
    request.send();
  });
}
function debounce(func){
  var timer;
  return function(event){
    if(timer) clearTimeout(timer);
    timer = setTimeout(func,1000,event);
  };
}
window.addEventListener("orientationchange",debounce(function(e){
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}));
window.addEventListener('resize', function () {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});	
document.addEventListener( "click", clickHandler );
function clickHandler(event){
    var element = event.target;
    if(element.tagName == 'IMG' && element.classList.contains("next") && !element.classList.contains("last") ){
      element.classList.remove('next');
      element.classList.add('done'); 
      $next = parseFloat(element.getAttribute('data-order'))+1; 
      document.querySelector('[data-order="'+$next+'"]').classList.add('next');   
    } else if(element.tagName == 'BUTTON'){
      element = document.querySelectorAll('.next')[0];
      if(!element.classList.contains("first")){
       element.classList.add('temp');
       element.classList.remove('next');
       $prev = parseFloat(element.getAttribute('data-order'))-1; 
       document.querySelector('[data-order="'+$prev+'"]').classList.add('next');   
       document.querySelector('[data-order="'+$prev+'"]').classList.remove('done');  
  
      }

    }
}
var imgSection = document.querySelector('section');
var imageClass = 'none';
window.onload = function() {

  for(var i = 0; i<=Gallery.images.length-1; i++) {
    imgLoad(Gallery.images[i]).then(function(arrayResponse) {
     // console.log(arrayResponse[1].index);
      var myImage = document.createElement('img');
      var imageURL = window.URL.createObjectURL(arrayResponse[0]);
      myImage.src = imageURL;
      myImage.setAttribute('data-order',arrayResponse[1].order);
      myImage.style.setProperty('--order',arrayResponse[1].order);
      myImage.classList.add(arrayResponse[1].class);
      if(arrayResponse[1].class === 'first'){
        myImage.classList.add('next');
      }
      imgSection.appendChild(myImage);

    }, function(Error) {
      console.log(Error);
    });
  }


};
