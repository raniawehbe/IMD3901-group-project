//variables
let cluesFound = 0;

isSpinning = false;
isSpinning2 = false;
isSpinning3 = false;
isSpinning4 = false;
isSpinning5 = false;
isSpinning6 = false;
isSpinning7 = false;

let socket = io();

            socket.on('connect', (userData) => {
                console.log('I exist!');

                //put code here so that we know that socket.io has initailized ...
                document.querySelector('#carpet_clue').addEventListener('click', function(){
                    socket.emit('add-ui');

                });

                document.querySelector('#carpet_clue').addEventListener('click', function(){
                  socket.emit('clue1-spin');

                });

                document.querySelector('#map_clue').addEventListener('click', function(){
                  socket.emit('add-ui2');

                });

                document.querySelector('#map_clue').addEventListener('click', function(){
                  socket.emit('clue2-spin');

                });


                document.querySelector('#Telescope_Room2').addEventListener('click', function(){
                  socket.emit('false-clue');

                });

                document.querySelector('#Books_Room2').addEventListener('click', function(){
                  socket.emit('false-clue2');

                });
                
                document.querySelector('#f1').addEventListener('click', function(){
                  socket.emit('false-clue3');

                });

                document.querySelector('#f2').addEventListener('click', function(){
                  socket.emit('false-clue4');

                });

                document.querySelector('#dish').addEventListener('click', function(){
                  socket.emit('false-clue5');

                });

                document.querySelector('#questionBtn').addEventListener('click', function(){
                  socket.emit('question-btn');

                });

                document.querySelector('#question1_end').addEventListener('click', function(){
                  socket.emit('next');

                });

                document.querySelector('#question1_choice1').addEventListener('click', function(){
                  socket.emit('correct');

                });

                document.querySelector('#question2_choice2').addEventListener('click', function(){
                  socket.emit('correct2');

                });


                document.querySelector('#question1_choice2').addEventListener('click', function(){
                  socket.emit('wrong');

                });

                document.querySelector('#question2_choice1').addEventListener('click', function(){
                  socket.emit('wrong');

                });


                document.querySelector('#question2_end2').addEventListener('click', function(){
                  socket.emit('transition1');

                });


                socket.on('ui_added', (data) => {

                  var sceneEl = document.querySelector('a-scene'); 
 
                  var entityEl = document.createElement('a-entity');

                  entityEl.setAttribute('id', "ui");
                  entityEl.setAttribute('class', "ui");
                  entityEl.setAttribute('position', "38.553 19.971 20.899");
                  entityEl.setAttribute('rotation', "25.441 40.445 0");
                  entityEl.setAttribute('scale', "32.947 27.81 1.45");
                  entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
                  entityEl.setAttribute('material', "color: #995d46");
                  entityEl.setAttribute('material', { src: 'assets/clue1.png' });  

                  sceneEl.appendChild(entityEl);

              
                });

                socket.on('ui2_added', (data) => {

                  var sceneEl = document.querySelector('a-scene'); 
 
                  var entityEl = document.createElement('a-entity');
                  
                  entityEl.setAttribute('id', "ui2");
                  entityEl.setAttribute('class', "ui2");
                  entityEl.setAttribute('position', "-6.931 36.962 -39.723");
                  entityEl.setAttribute('rotation', "0 2.063 0");
                  entityEl.setAttribute('scale', "27.674 21.022 1.125");
                  entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
                  entityEl.setAttribute('material', "color: #995d46");
                  entityEl.setAttribute('material', { src: 'assets/clue2.png' });   

                  sceneEl.appendChild(entityEl);

                });
    
                socket.on('clue1_spinning', (data) => {

                const Context_AF = this;
                Context_AF.walls      = document.querySelector('#carpet_clue');
                Context_AF.questionBtn     = document.querySelector('#questionBtn');
                
                Context_AF.walls.setAttribute('animation', {property:'position.y', to:-0.554, dur:300, easing:'linear'});
                Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});   
                
                Context_AF.progressMeter =   document.querySelector('#progressMeter');
                Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});
                
                
                  if (isSpinning === true) {
                    console.log('stop spinning');
                    Context_AF.walls.setAttribute('animation', {to:-0.554});
                    
                    isSpinning = false; 
                
                    document.querySelectorAll(".ui").forEach(e => e.parentNode.removeChild(e));
                    cluesFound -=1;
                    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/2"});
                
                    Context_AF.walls.setAttribute('animation__rotation', {enabled:false});
                    Context_AF.walls.setAttribute('rotation', "0 87.394 0");

                    const soundEffect = document.querySelectorAll('.soundEffect3');
                    soundEffect.forEach(function(soundEntity) {
                      soundEntity.components.sound.playSound();
                    });

                  }

                  else {
                    console.log('spinning');
                    Context_AF.walls.setAttribute('animation', {to:1});
                    isSpinning = true;
                
                    cluesFound +=1;
                    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/2"});
                
                    Context_AF.walls.setAttribute("animation__rotation", {enabled:true});

                    const soundEffect = document.querySelectorAll('.soundEffect3');
                    soundEffect.forEach(function(soundEntity) {
                      soundEntity.components.sound.playSound();
                    });
                           
                  }
                
                  if(cluesFound == 2){
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
                    Context_AF.progressMeter.setAttribute('geometry', 'width: 1.25');
                    Context_AF.progressMeter.setAttribute('position', '-0.600 0 0.810');
                    Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                  }
                
                
                });  

                socket.on('clue2_spinning', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#map_clue');
                  Context_AF.questionBtn     = document.querySelector('#questionBtn');

                  //let's add the basic animation to teh walls entity
                  //note that it is not enabled initially
                  Context_AF.walls.setAttribute('animation', {property:'position.z', to:-66.581, dur:300, easing:'linear'});
                  Context_AF.walls.setAttribute('animation__rotation', {property:'rotation',  to:"0 360 0", loop:true, dur:10000, easing:'linear', enabled: false});

                  Context_AF.progressMeter =   document.querySelector('#progressMeter');
                  Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

                  //listen on click
                  
                    if (isSpinning2 === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:-66.581});
                      Context_AF.walls.setAttribute('rotation', "0 -0.296 0");
                      isSpinning2 = false; 

                      document.querySelectorAll(".ui2").forEach(e => e.parentNode.removeChild(e));
        
                      cluesFound -=1;
                      document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/2"});

                      Context_AF.walls.setAttribute('animation__rotation', {enabled:false});

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });

                    }

                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:-60});
                      isSpinning2 = true;
                      cluesFound +=1;
                      document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/2"});

                      Context_AF.walls.setAttribute('animation__rotation', {enabled:true});

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                        
                    }

                    if(cluesFound == 2){
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
                      Context_AF.progressMeter.setAttribute('geometry', 'width: 1.25');
                      Context_AF.progressMeter.setAttribute('position', '-0.600 0 0.810');
                      Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                    }

                  
                });

                socket.on('falseclue1_picked', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#Telescope_Room2');
                  
                  Context_AF.walls.setAttribute('animation', {property:'position.y', to:21.05659, dur:300, easing:'linear'});
                  
                     if (Context_AF.isSpinning3 === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:21.05659});
                      Context_AF.isSpinning3 = false;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:22.5});
                      Context_AF.isSpinning3 = true;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                  
                });

                socket.on('falseclue2_picked', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#Books_Room2');
                
                  Context_AF.walls.setAttribute('animation', {property:'position.y', to:-15.34405, dur:300, easing:'linear'});
                   
                  
                    if (Context_AF.isSpinning4 === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:-15.34405});
                      Context_AF.isSpinning4 = false;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:-13});
                      Context_AF.isSpinning4 = true;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                  
                });
                
                socket.on('falseclue3_picked', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#f1');
 
                  Context_AF.walls.setAttribute('animation', {property:'position.x', to:76, dur:300, easing:'linear'});
                 
                    if (Context_AF.isSpinning5 === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:76});
                      Context_AF.isSpinning5 = false;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:70});
                      Context_AF.isSpinning5 = true;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                  
                });

                socket.on('falseclue4_picked', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#f2');

                  Context_AF.walls.setAttribute('animation', {property:'position.x', to:76, dur:300, easing:'linear'});

                    if (Context_AF.isSpinning6 === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:76});
                      Context_AF.isSpinning6 = false;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }

                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:70});
                      Context_AF.isSpinning6 = true;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                  
                });

                socket.on('falseclue5_picked', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#dish');
 
                  Context_AF.walls.setAttribute('animation', {property:'position.x', to:75, dur:300, easing:'linear'});
                 
                    if (Context_AF.isSpinning7 === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:75});
                      Context_AF.isSpinning7 = false;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }

                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:70});
                      Context_AF.isSpinning7 = true;

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

                    Context_AF.question.setAttribute('visible', "false");
                    Context_AF.question1.setAttribute('visible', "false");
                    Context_AF.question2.setAttribute('visible', "false");

                    const soundEffect = document.querySelectorAll('.soundEffect4');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });

                    
                    if(cluesFound == 2){
                            
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
      
                  
                          Context_AF.question1.setAttribute('visible', "false");
                          Context_AF.question2.setAttribute('visible', "true");
                          Context_AF.question1end.setAttribute('class', "");
                          Context_AF.choice1.setAttribute('class', "");
                          Context_AF.choice2.setAttribute('class', "");
                          Context_AF.Q2choice1.setAttribute('class', "interactive");
                          Context_AF.Q2choice2.setAttribute('class', "interactive");
      
                          console.log("next question: 2");
                                
                  
                         
                });

                socket.on('question1_correct', (data) => {

                  const Context_AF = this;
                  //Context_AF2  = this;
            
                  Context_AF.question1Btn      = document.querySelector('#question1_end');
                  Context_AF.choice1     = document.querySelector('#question1_choice1');
                  Context_AF.choice2     = document.querySelector('#question1_choice2');
               
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

                socket.on('transition_room', (data) => {

                  document.location='Room3.html';

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




