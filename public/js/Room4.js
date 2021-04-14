//variables
let cluesFound = 0;

isSpinning = false;
isSpinning2 = false;
isSpinning3 = false;
isSpinning4 = false;
isSpinning5 = false;

let socket = io();

  socket.on('connect', (userData) => {
                console.log('I exist!');

                //put code here so that we know that socket.io has initailized ...
                document.querySelector('#diary_clue').addEventListener('click', function(){
                    socket.emit('add-ui');

                });

                document.querySelector('#diary_clue').addEventListener('click', function(){
                  socket.emit('clue1-spin');

                });

                document.querySelector('#news_clue').addEventListener('click', function(){
                  socket.emit('add-ui2');

                });

                document.querySelector('#news_clue').addEventListener('click', function(){
                  socket.emit('clue2-spin');

                });

                document.querySelector('#primeMinister_clue').addEventListener('click', function(){
                  socket.emit('add-ui3');

                });

                document.querySelector('#primeMinister_clue').addEventListener('click', function(){
                  socket.emit('clue3-spin');

                });

                document.querySelector('#painting_clue').addEventListener('click', function(){
                  socket.emit('add-ui4');

                });

                document.querySelector('#painting_clue').addEventListener('click', function(){
                  socket.emit('clue4-spin');

                });

                document.querySelector('#radio_fc').addEventListener('click', function(){
                  socket.emit('false-clue');

                });

                document.querySelector('#cross_fc').addEventListener('click', function(){
                  socket.emit('false-clue2');

                });
                
                document.querySelector('#vase_fc').addEventListener('click', function(){
                  socket.emit('false-clue3');

                });

                document.querySelector('#lamp_fc').addEventListener('click', function(){
                  socket.emit('false-clue4');

                });

                document.querySelector('#basket_fc').addEventListener('click', function(){
                  socket.emit('false-clue5');

                });
                
                document.querySelector('#phone_fc').addEventListener('click', function(){
                  socket.emit('false-clue6');

                })

                
                document.querySelector('#questionBtn').addEventListener('click', function(){
                  socket.emit('question-btn');

                });

                document.querySelector('#question1_end').addEventListener('click', function(){
                  socket.emit('next');

                });

                document.querySelector('#question2_end2').addEventListener('click', function(){
                  socket.emit('next2');

                });

                document.querySelector('#question3_end3').addEventListener('click', function(){
                  socket.emit('next3');

                });

                document.querySelector('#question1_choice2').addEventListener('click', function(){
                  socket.emit('correct');

                });

                document.querySelector('#question2_choice1').addEventListener('click', function(){
                  socket.emit('correct2');

                });

                document.querySelector('#question3_choice2').addEventListener('click', function(){
                  socket.emit('correct3');

                });

                document.querySelector('#question4_choice1').addEventListener('click', function(){
                  socket.emit('correct4');

                });

                document.querySelector('#question1_choice1').addEventListener('click', function(){
                  socket.emit('wrong');

                });

                document.querySelector('#question2_choice2').addEventListener('click', function(){
                  socket.emit('wrong');

                });

                document.querySelector('#question3_choice1').addEventListener('click', function(){
                  socket.emit('wrong');

                });

                document.querySelector('#question4_choice2').addEventListener('click', function(){
                  socket.emit('wrong');

                });
                

                document.querySelector('#question4_end4').addEventListener('click', function(){
                  socket.emit('transition1');

                });

                socket.on('ui_added', (data) => {

                  var sceneEl = document.querySelector('a-scene'); 
 
                  var entityEl = document.createElement('a-entity');

                  entityEl.setAttribute('id', "ui");
                  entityEl.setAttribute('class', "ui");
                  entityEl.setAttribute('position', "8.558 4.09 1.852");
                  entityEl.setAttribute('rotation', "-23.822 -78.995 0");
                  entityEl.setAttribute('scale', "5.625 4.295 0.228");
                  entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
                  entityEl.setAttribute('material', "color: #995d46");
                  entityEl.setAttribute('material', { src: 'assets/book.png' });  

                  sceneEl.appendChild(entityEl);

                  
                });

                socket.on('ui2_added', (data) => {

                  var sceneEl = document.querySelector('a-scene'); 

                  var entityEl = document.createElement('a-entity');
                  
                  entityEl.setAttribute('id', "ui2");
                  entityEl.setAttribute('class', "ui2");
                  entityEl.setAttribute('position', "11.134 3.52 4.91");
                  entityEl.setAttribute('rotation', "-30.826 -125.57 1.865");
                  entityEl.setAttribute('scale', "4.922 3.772 0.342");
                  entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
                  entityEl.setAttribute('material', "color: #995d46");
                  entityEl.setAttribute('material', { src: 'assets/news.png' }) ;  

                  sceneEl.appendChild(entityEl);

                });

                socket.on('ui3_added', (data) => {

                  var sceneEl = document.querySelector('a-scene'); 

                  var entityEl = document.createElement('a-entity');
                  
                  entityEl.setAttribute('id', "ui3");
                  entityEl.setAttribute('class', "ui3");
                  entityEl.setAttribute('position', "4.291 5.416 -8.146");
                  entityEl.setAttribute('rotation', "-5.076 2.717 -0.925");
                  entityEl.setAttribute('scale', "6.412 4.871 0.261");
                  entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
                  entityEl.setAttribute('material', "color: #995d46");
                  entityEl.setAttribute('material', { src: 'assets/primeMinister.png' });  

                  sceneEl.appendChild(entityEl);

                });

                socket.on('ui4_added', (data) => {

                  var sceneEl = document.querySelector('a-scene'); 
 
                  var entityEl = document.createElement('a-entity');
                  
                  entityEl.setAttribute('id', "ui3");
                  entityEl.setAttribute('class', "ui3");
                  entityEl.setAttribute('position', "11.419 5.847 -4.214");
                  entityEl.setAttribute('rotation', "-9 -78.93 0.465");
                  entityEl.setAttribute('scale', "6.254 4.751 0.254");
                  entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
                  entityEl.setAttribute('material', "color: #995d46");
                  entityEl.setAttribute('material', { src: 'assets/painting.png' });   

                  sceneEl.appendChild(entityEl);

                });

                socket.on('clue1_spinning', (data) => {

                const Context_AF = this;
                Context_AF.walls       = document.querySelector('#diary_clue');
                Context_AF.questionBtn  = document.querySelector('#questionBtn');
                
                Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});
                Context_AF.walls.setAttribute('animation', {property:'position.y', to:-1.322, dur:300, easing:'linear'});
                
                Context_AF.progressMeter =   document.querySelector('#progressMeter');
                Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});
                
                
                  if (isSpinning === true) {
                    console.log('stop spinning');
                    Context_AF.walls.setAttribute('animation', {to:-1.322});
                    isSpinning = false; 
                
                    document.querySelectorAll(".ui").forEach(e => e.parentNode.removeChild(e));
                    cluesFound -=1;
                    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});
                
                    Context_AF.walls.setAttribute('animation__rotation', {enabled:false});

                    const soundEffect = document.querySelectorAll('.soundEffect3');
                    soundEffect.forEach(function(soundEntity) {
                      soundEntity.components.sound.playSound();
                    });
                    
                  }
                  else {
                    console.log('spinning');
                    Context_AF.walls.setAttribute('animation', {to:0.396});
                    isSpinning = true;
                
                    cluesFound +=1;
                    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});
                
                    Context_AF.walls.setAttribute("animation__rotation", {enabled:true});

                    const soundEffect = document.querySelectorAll('.soundEffect3');
                    soundEffect.forEach(function(soundEntity) {
                      soundEntity.components.sound.playSound();
                    });

                  }
                
                  if(cluesFound == 4){
                    Context_AF.questionBtn.setAttribute('visible', "true");
                    
                    Context_AF.progressMeter.setAttribute('geometry', 'width: 2.5');
                    Context_AF.progressMeter.setAttribute('position', '0.005 0 0.810');
                    Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                  }
                
                  else{
                    Context_AF.questionBtn.setAttribute('visible', "false");
                  }
                
                
                 if(cluesFound == 0){
                  Context_AF.progressMeter.setAttribute('geometry', 'width: 0');
                  Context_AF.progressMeter.setAttribute('geometry', 'depth: 0');
                }
                
                else if(cluesFound == 1){
                  Context_AF.progressMeter.setAttribute('geometry', 'width: 0.625');
                  Context_AF.progressMeter.setAttribute('position', '-0.92 0 0.810');
                  Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                  }
                  
                  else if(cluesFound == 2){
                    Context_AF.progressMeter.setAttribute('geometry', 'width: 1.25');
                    Context_AF.progressMeter.setAttribute('position', '-0.62 0 0.810');
                    Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                  }
                  
                  else if(cluesFound == 3){
                    Context_AF.progressMeter.setAttribute('geometry', 'width: 1.875');
                    Context_AF.progressMeter.setAttribute('position', '-0.29 0 0.810');
                    Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                  }
                
                
                });  

                socket.on('clue2_spinning', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#news_clue');
                  Context_AF.walls2      = document.querySelector('#clue2'); 

                  Context_AF.questionBtn     = document.querySelector('#questionBtn');

                  
                  Context_AF.walls.setAttribute('animation', {property:'position.y', to:0, dur:300, easing:'linear'});
                  Context_AF.walls2.setAttribute('animation__rotation', {property:'rotation',  to:"0 360 0", loop:true, dur:10000, easing:'linear', enabled: false});

                  Context_AF.progressMeter =   document.querySelector('#progressMeter');
                  Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

                  //listen on click
                  
                    if (isSpinning2 === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:0});
                      Context_AF.walls2.setAttribute('rotation', "0 0 0");
                      isSpinning2 = false; 

                      document.querySelectorAll(".ui2").forEach(e => e.parentNode.removeChild(e));
                      cluesFound -=1;
                      document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

                      Context_AF.walls2.setAttribute('animation__rotation', {enabled:false});

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }

                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:0.7});
                      isSpinning2 = true;
                      cluesFound +=1;
                      document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

                      Context_AF.walls2.setAttribute('animation__rotation', {enabled:true});

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                        
                    }

                    if(cluesFound == 4){
                      Context_AF.questionBtn.setAttribute('visible', "true");
                      
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 2.5');
                      Context_AF.progressMeter.setAttribute('position', '0.005 0 0.810');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                    }
                  
                    else{
                      Context_AF.questionBtn.setAttribute('visible', "false");
                    }
                  
                  
                    if(cluesFound == 0){
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 0');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0');
                    }
                  
                    else if(cluesFound == 1){
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 0.625');
                      Context_AF.progressMeter.setAttribute('position', '-0.92 0 0.810');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                    }
                    
                    else if(cluesFound == 2){
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 1.25');
                      Context_AF.progressMeter.setAttribute('position', '-0.62 0 0.810');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                    }
                    
                    else if(cluesFound == 3){
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 1.875');
                      Context_AF.progressMeter.setAttribute('position', '-0.29 0 0.810');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                    }

    
                });

                socket.on('clue3_spinning', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#primeMinister_clue');
                  Context_AF.questionBtn     = document.querySelector('#questionBtn');

                  //let's add the basic animation to teh walls entity
                  //note that it is not enabled initially
                  Context_AF.walls.setAttribute('animation', {property:'position.z', to:0.009, dur:300, easing:'linear'});
                  Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});

                  Context_AF.progressMeter =   document.querySelector('#progressMeter');
                  Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

                  
                    if (isSpinning3 === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:0.009});
                      Context_AF.walls.setAttribute('rotation', "0 0 0");
                      isSpinning3 = false; 

                      document.querySelectorAll(".ui3").forEach(e => e.parentNode.removeChild(e));
                      cluesFound -=1;
                      document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

                      Context_AF.walls.setAttribute('animation__rotation', {enabled:false});

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:2});
                      isSpinning3 = true;
                      cluesFound +=1;
                      document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

                      Context_AF.walls.setAttribute('animation__rotation', {enabled:true});

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                            
                    }

                    if(cluesFound == 4){
                      Context_AF.questionBtn.setAttribute('visible', "true");
                      
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 2.5');
                      Context_AF.progressMeter.setAttribute('position', '0.005 0 0.810');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                    }
                  
                    else{
                      Context_AF.questionBtn.setAttribute('visible', "false");
                    }
                  
                  
                    if(cluesFound == 0){
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 0');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0');
                    }
                  
                    else if(cluesFound == 1){
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 0.625');
                      Context_AF.progressMeter.setAttribute('position', '-0.92 0 0.810');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                    }
                    
                    else if(cluesFound == 2){
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 1.25');
                      Context_AF.progressMeter.setAttribute('position', '-0.62 0 0.810');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                    }
                    
                    else if(cluesFound == 3){
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 1.875');
                      Context_AF.progressMeter.setAttribute('position', '-0.29 0 0.810');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                    }
    
                });

                socket.on('clue4_spinning', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#painting_clue');
                  Context_AF.questionBtn     = document.querySelector('#questionBtn');

                  //let's add the basic animation to teh walls entity
                  //note that it is not enabled initially
                  Context_AF.walls.setAttribute('animation', {property:'position.z', to:-0.027, dur:300, easing:'linear'});
                  Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});

                  Context_AF.progressMeter =   document.querySelector('#progressMeter');
                  Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

                  
                    if (isSpinning4 === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:-0.027});
                      Context_AF.walls.setAttribute('rotation', "0 0 0");
                      isSpinning4 = false; 

                      document.querySelectorAll(".ui3").forEach(e => e.parentNode.removeChild(e));
                      cluesFound -=1;
                      document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

                      Context_AF.walls.setAttribute('animation__rotation', {enabled:false});

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:2});
                      isSpinning4 = true;
                      cluesFound +=1;
                      document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

                      Context_AF.walls.setAttribute('animation__rotation', {enabled:true});

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                            
                    }

                    if(cluesFound == 4){
                      Context_AF.questionBtn.setAttribute('visible', "true");
                      
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 2.5');
                      Context_AF.progressMeter.setAttribute('position', '0.005 0 0.810');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                    }
                  
                    else{
                      Context_AF.questionBtn.setAttribute('visible', "false");
                    }
                  
                  
                    if(cluesFound == 0){
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 0');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0');
                    }
                  
                    else if(cluesFound == 1){
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 0.625');
                      Context_AF.progressMeter.setAttribute('position', '-0.92 0 0.810');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                    }
                    
                    else if(cluesFound == 2){
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 1.25');
                      Context_AF.progressMeter.setAttribute('position', '-0.62 0 0.810');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                    }
                    
                    else if(cluesFound == 3){
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 1.875');
                      Context_AF.progressMeter.setAttribute('position', '-0.29 0 0.810');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                    }
    
                });

                socket.on('falseclue1_picked', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#radio_fc');
                  
                  Context_AF.walls.setAttribute('animation', {property:'position.y', to:3.21836, dur:300, easing:'linear'});
 
                    if (Context_AF.isSpinning === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:3.21836});
                      Context_AF.isSpinning = false;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }

                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:4});
                      Context_AF.isSpinning = true;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                  
                  
                });

                socket.on('falseclue2_picked', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#cross_fc');
                  
                  Context_AF.walls.setAttribute('animation', {property:'position.y', to:5.10921, dur:300, easing:'linear'});
 

                  if (Context_AF.isSpinning === true) {
                    console.log('stop spinning');
                    Context_AF.walls.setAttribute('animation', {to:5.10921});
                    Context_AF.isSpinning = false;

                    const soundEffect = document.querySelectorAll('.soundEffect3');
                    soundEffect.forEach(function(soundEntity) {
                      soundEntity.components.sound.playSound();
                    });
                  }
                  else {
                    console.log('spinning');
                    Context_AF.walls.setAttribute('animation', {to:6});
                    Context_AF.isSpinning = true;

                    const soundEffect = document.querySelectorAll('.soundEffect3');
                    soundEffect.forEach(function(soundEntity) {
                      soundEntity.components.sound.playSound();
                    });
                  }
                  
                });

                socket.on('falseclue3_picked', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#vase_fc');
                  
                  Context_AF.walls.setAttribute('animation', {property:'position.y', to:3.34374, dur:300, easing:'linear'});
          
                    if (Context_AF.isSpinning === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:3.34374});
                      Context_AF.isSpinning = false;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }

                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:4});
                      Context_AF.isSpinning = true;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                  
                });

                socket.on('falseclue4_picked', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#lamp_fc');
                  
                  Context_AF.walls.setAttribute('animation', {property:'position.y', to:2.516, dur:300, easing:'linear'});
    
                    if (Context_AF.isSpinning === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:2.516});
                      Context_AF.isSpinning = false;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }

                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:3});
                      Context_AF.isSpinning = true;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                  
                });

                socket.on('falseclue5_picked', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#basket_fc');
                  
                  Context_AF.walls.setAttribute('animation', {property:'position.y', to:0.26368, dur:300, easing:'linear'});
                
                    if (Context_AF.isSpinning === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:0.26368});
                      Context_AF.isSpinning = false;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }

                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:1});
                      Context_AF.isSpinning = true;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                  
                });

                socket.on('falseclue6_picked', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#phone_fc');
                  
                  Context_AF.walls.setAttribute('animation', {property:'position.y', to:3.06926, dur:300, easing:'linear'});
                  
                    if (Context_AF.isSpinning === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:3.06926});
                      Context_AF.isSpinning = false;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }

                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:3.9});
                      Context_AF.isSpinning = true;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                  
                });

                socket.on('question_show', (data) => {
                   
                  const Context_AF = this;
                

                  Context_AF.question      = document.querySelector('#questions');
                  Context_AF.question1     = document.querySelector('#question1');
                  Context_AF.question2     = document.querySelector('#question2');
                  Context_AF.question3     = document.querySelector('#question3');
                  Context_AF.question4     = document.querySelector('#question4');

                  Context_AF.question.setAttribute('visible', "false");
                  Context_AF.question1.setAttribute('visible', "false");
                  Context_AF.question2.setAttribute('visible', "false");
                  Context_AF.question3.setAttribute('visible', "false");
                  Context_AF.question4.setAttribute('visible', "false");

                  const soundEffect = document.querySelectorAll('.soundEffect4');
                    soundEffect.forEach(function(soundEntity) {
                      soundEntity.components.sound.playSound();
                    });

                  
                  if(cluesFound == 4){
                          
                      Context_AF.question.setAttribute('visible', "true");
                      Context_AF.question1.setAttribute('visible', "true");
                          
                  }
                  
                          

                });

                socket.on('next_question', (data) => {
                  const Context_AF = this;
      
                          Context_AF.question1      = document.querySelector('#question1');
                          Context_AF.question2      = document.querySelector('#question2');
                          Context_AF.question1end      = document.querySelector('#question1_end');
                          Context_AF.choice1     = document.querySelector('#question1_choice1');
                          Context_AF.choice2     = document.querySelector('#question1_choice2');
                          Context_AF.Q2choice1     = document.querySelector('#question2_choice1');
                          Context_AF.Q2choice2     = document.querySelector('#question2_choice2');
              
                          Context_AF.question2.setAttribute('visible', "false");
              
                                  
                                  Context_AF.question1.setAttribute('visible', "false");
                                  Context_AF.question2.setAttribute('visible', "true");
                                  Context_AF.question1end.setAttribute('class', "");
                                  Context_AF.choice1.setAttribute('class', "");
                                  Context_AF.choice2.setAttribute('class', "");
                                  Context_AF.Q2choice1.setAttribute('class', "interactive");
                                  Context_AF.Q2choice2.setAttribute('class', "interactive");
              
                                  console.log("next question: 2");
                                
                  
                        
                });

                socket.on('next_question2', (data) => {

                  const Context_AF = this;
            
                  Context_AF.question2     = document.querySelector('#question2');
                  Context_AF.question3     = document.querySelector('#question3');
                  Context_AF.question2end  = document.querySelector('#question2_end2');
                  Context_AF.choice1       = document.querySelector('#question2_choice1');
                  Context_AF.choice2       = document.querySelector('#question2_choice2');
                  Context_AF.Q3choice1     = document.querySelector('#question3_choice1');
                  Context_AF.Q3choice2     = document.querySelector('#question3_choice2');
            
           
                        Context_AF.question2.setAttribute('visible', "false");
                        Context_AF.question3.setAttribute('visible', "true");
            
                        Context_AF.question2end.setAttribute('class', "");
                        Context_AF.choice1.setAttribute('class', "");
                        Context_AF.choice2.setAttribute('class', "");
            
                        Context_AF.Q3choice1.setAttribute('class', "interactive");
                        Context_AF.Q3choice2.setAttribute('class', "interactive");
            
                        console.log("next question: 3");
                                
                                              
                });

                socket.on('next_question3', (data) => {

                  const Context_AF = this;
                  //Context_AF2  = this;
            
                  Context_AF.question3     = document.querySelector('#question3');
                  Context_AF.question4     = document.querySelector('#question4');
                  Context_AF.question3end  = document.querySelector('#question3_end3');
                  Context_AF.choice1       = document.querySelector('#question3_choice1');
                  Context_AF.choice2       = document.querySelector('#question3_choice2');
                  Context_AF.Q4choice1     = document.querySelector('#question4_choice1');
                  Context_AF.Q4choice2     = document.querySelector('#question4_choice2');
            
                  
                        Context_AF.question3.setAttribute('visible', "false");
                        Context_AF.question4.setAttribute('visible', "true");
            
                        Context_AF.question3end.setAttribute('class', "");
                        Context_AF.choice1.setAttribute('class', "");
                        Context_AF.choice2.setAttribute('class', "");
            
                        Context_AF.Q4choice1.setAttribute('class', "interactive");
                        Context_AF.Q4choice2.setAttribute('class', "interactive");
            
                        console.log("next question: 4");
                                
                  
                         
                                
                  
                    
                });

                socket.on('question1_correct', (data) => {

                  const Context_AF = this;
            
                  Context_AF.question1Btn      = document.querySelector('#question1_end');
                  Context_AF.choice1     = document.querySelector('#question1_choice1');
                  Context_AF.choice2     = document.querySelector('#question1_choice2');
            
                  Context_AF.question1Btn.setAttribute('visible', "false");
            
                  Context_AF.question1Btn.setAttribute('visible', "true");
            
                  Context_AF.choice2.setAttribute('active-color', '#22252a');
                  Context_AF.choice2.setAttribute('handle-color', '#22252a');

                  const soundEffect = document.querySelectorAll('.soundEffect1');
                  soundEffect.forEach(function(soundEntity) {
                    soundEntity.components.sound.playSound();
                  });
                                
                  
                        
                
                });

                socket.on('question2_correct', (data) => {

                  const Context_AF = this;
            
                  Context_AF.question2Btn = document.querySelector('#question2_end2');
   
                  Context_AF.question2Btn.setAttribute('visible', "true");

                  const soundEffect = document.querySelectorAll('.soundEffect1');
                  soundEffect.forEach(function(soundEntity) {
                    soundEntity.components.sound.playSound();
                  });
            
                  
                      
                });

                socket.on('question3_correct', (data) => {

                  const Context_AF = this;
            
                  Context_AF.question3Btn = document.querySelector('#question3_end3');

                  Context_AF.question3Btn.setAttribute('visible', "true");

                  const soundEffect = document.querySelectorAll('.soundEffect1');
                  soundEffect.forEach(function(soundEntity) {
                    soundEntity.components.sound.playSound();
                  });
                        
                          
                });

                socket.on('question4_correct', (data) => {

                  const Context_AF = this;
            
                  Context_AF.question3Btn = document.querySelector('#question4_end4');

                  Context_AF.question3Btn.setAttribute('visible', "true");

                  const soundEffect = document.querySelectorAll('.soundEffect1');
                  soundEffect.forEach(function(soundEntity) {
                    soundEntity.components.sound.playSound();
                  });
                        
                          
                });

                socket.on('transition_room', (data) => {

                  document.location='Outro.html';

                });

                var currentAnim = "animation-start";
                var currentAnim2 = "shake-start";
                
                socket.on('wrong_answer', (data) => {
                  document.getElementById("question_plane").emit(currentAnim);
                  document.getElementById("question_plane").emit(currentAnim2);

                  currentAnim = "animation-start";
                  currentAnim2 = "shake-start";

                  const soundEffect = document.querySelectorAll('.soundEffect2');
                  soundEffect.forEach(function(soundEntity) {
                    soundEntity.components.sound.playSound();
                  });
                            
                              
                });
              

  });


