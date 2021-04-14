//variables
let cluesFound = 0;

isSpinning = false;
isSpinning2 = false;
isSpinning3 = false;
isSpinning4 = false;
isSpinning5 = false;
isSpinning6 = false;

let socket = io();

            socket.on('connect', (userData) => {
                console.log('I exist!');

                //put code here so that we know that socket.io has initailized ...
                document.querySelector('#letter_clue').addEventListener('click', function(){
                    socket.emit('add-ui');

                });

                document.querySelector('#letter_clue').addEventListener('click', function(){
                  socket.emit('clue1-spin');

                });

                document.querySelector('#card_clue').addEventListener('click', function(){
                  socket.emit('add-ui2');

                });

                document.querySelector('#card_clue').addEventListener('click', function(){
                  socket.emit('clue2-spin');

                });

                document.querySelector('#postcard_clue').addEventListener('click', function(){
                  socket.emit('add-ui3');

                });

                document.querySelector('#postcard_clue').addEventListener('click', function(){
                  socket.emit('clue3-spin');

                });

                document.querySelector('#envelope').addEventListener('click', function(){
                  socket.emit('false-clue');

                });

                document.querySelector('#dress').addEventListener('click', function(){
                  socket.emit('false-clue2');

                });

                document.querySelector('#necklace').addEventListener('click', function(){
                  socket.emit('false-clue3');

                });

                document.querySelector('#questionBtn').addEventListener('click', function(){
                  socket.emit('question-btn');

                });

                document.querySelector('#question1_end').addEventListener('click', function(){
                  socket.emit('next');

                });

                document.querySelector('#question2_end2').addEventListener('click', function(){
                  socket.emit('next2');

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

                document.querySelector('#question1_choice1').addEventListener('click', function(){
                  socket.emit('wrong');

                });

                document.querySelector('#question2_choice2').addEventListener('click', function(){
                  socket.emit('wrong');

                });

                document.querySelector('#question3_choice1').addEventListener('click', function(){
                  socket.emit('wrong');

                });

                document.querySelector('#question3_end3').addEventListener('click', function(){
                  socket.emit('transition1');

                });

                socket.on('ui_added', (data) => {

                  var sceneEl = document.querySelector('a-scene'); 
 
                  var entityEl = document.createElement('a-entity');

                  entityEl.setAttribute('id', "ui");
                  entityEl.setAttribute('class', "ui");
                  entityEl.setAttribute('position', "25.921 26.145 42.627");
                  entityEl.setAttribute('rotation', "22.961 47.602 0.518");
                  entityEl.setAttribute('scale', "33.662 25.704 1.368");
                  entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
                  entityEl.setAttribute('material', "color: #995d46");
                  entityEl.setAttribute('material', {src: '#hint1_img'});  
                  sceneEl.appendChild(entityEl);

                  
                });

                socket.on('ui2_added', (data) => {

                  var sceneEl = document.querySelector('a-scene'); 
 
                  var entityEl = document.createElement('a-entity');
                  
                  entityEl.setAttribute('id', "ui2");
                  entityEl.setAttribute('class', "ui2");
                  entityEl.setAttribute('position', "-7.243 26.798 -40.937");
                  entityEl.setAttribute('rotation', "-26.812 2.063 0");
                  entityEl.setAttribute('scale', "29.812 22.646 1.212");
                  entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
                  entityEl.setAttribute('material', "color: #995d46");
                  entityEl.setAttribute('material', { src: '#hint2_img' });  

                  sceneEl.appendChild(entityEl);

                });

                socket.on('ui3_added', (data) => {

                  var sceneEl = document.querySelector('a-scene'); 

                  var entityEl = document.createElement('a-entity');
                  
                  entityEl.setAttribute('id', "ui3");
                  entityEl.setAttribute('class', "ui3");
                  entityEl.setAttribute('position', "-32.133 29.185 -49.957");
                  entityEl.setAttribute('rotation', "-13.937 21.773 0.72");
                  entityEl.setAttribute('scale', "31.906 24.236 1.297");
                  entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
                  entityEl.setAttribute('material', "color: #995d46");
                  entityEl.setAttribute('material', { src: '#hint3_img' });  

                  sceneEl.appendChild(entityEl);

                });

                socket.on('clue1_spinning', (data) => {

                const Context_AF = this;
                Context_AF.walls      = document.querySelector('#letter_clue');
                Context_AF.questionBtn     = document.querySelector('#questionBtn');
                
    
                Context_AF.walls.setAttribute('animation', {property:'position.y', to:3.824, dur:300, easing:'linear'});
                Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});
                
                Context_AF.progressMeter =   document.querySelector('#progressMeter');
                Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});
                
                
                  if (isSpinning === true) {
                    console.log('stop spinning');
                    Context_AF.walls.setAttribute('animation', {to:3.824});
                    Context_AF.walls.setAttribute('scale', "2 2 2");
                    isSpinning = false; 
                
                    document.querySelectorAll(".ui").forEach(e => e.parentNode.removeChild(e));
              
                    cluesFound -=1;
                    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/3"});
                
                    Context_AF.walls.setAttribute('animation__rotation', {enabled:false});

                    const soundEffect = document.querySelectorAll('.soundEffect3');
                    soundEffect.forEach(function(soundEntity) {
                      soundEntity.components.sound.playSound();
                    });
                    
                  }
                  else {
                    console.log('spinning');
                    Context_AF.walls.setAttribute('animation', {to:11.736});
                    Context_AF.walls.setAttribute('scale', "5.762 5.762 5.762");
                    isSpinning = true;
                
                    cluesFound +=1;
                    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/3"});
                
                    Context_AF.walls.setAttribute("animation__rotation", {enabled:true});

                    const soundEffect = document.querySelectorAll('.soundEffect3');
                    soundEffect.forEach(function(soundEntity) {
                      soundEntity.components.sound.playSound();
                    });
                           
                  }
                
                  if(cluesFound == 3){
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
                Context_AF.progressMeter.setAttribute('geometry', 'width: 0.833');
                Context_AF.progressMeter.setAttribute('position', '-0.820 0 0.810');
                Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                }
                
                else if(cluesFound == 2){
                  Context_AF.progressMeter.setAttribute('geometry', 'width: 1.666');
                  Context_AF.progressMeter.setAttribute('position', '-0.4 0 0.810');
                  Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                }
                
                
                
                });  

                socket.on('clue2_spinning', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#card_clue');
                  Context_AF.questionBtn     = document.querySelector('#questionBtn');

                  //let's add the basic animation to teh walls entity
                  //note that it is not enabled initially
                  Context_AF.walls.setAttribute('animation', {property:'position.z', to:-48.4, dur:300, easing:'linear'});
                  Context_AF.walls.setAttribute('animation__rotation', {property:'rotation',  to:"0 360 0", loop:true, dur:10000, easing:'linear', enabled: false});

                  Context_AF.progressMeter =   document.querySelector('#progressMeter');
                  Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

                  //listen on click
                  
                    if (isSpinning2 === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:-48.4});
                      Context_AF.walls.setAttribute('rotation', "0 0 0");
                      Context_AF.walls.setAttribute('scale', "1.889 1.889 1.889");
                      isSpinning2 = false; 

                      document.querySelectorAll(".ui2").forEach(e => e.parentNode.removeChild(e));

                      cluesFound -=1;
                      document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/3"});

                      Context_AF.walls.setAttribute('animation__rotation', {enabled:false});

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }

                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:-44.078});
                      Context_AF.walls.setAttribute('position', "0.214 0 -35.402");
                      Context_AF.walls.setAttribute('scale', "3.885 3.885 3.885");
                      isSpinning2 = true;
                      cluesFound +=1;
                      document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/3"});

                      Context_AF.walls.setAttribute('animation__rotation', {enabled:true});

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                        
                    }

                    if(cluesFound == 3){
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
                  Context_AF.progressMeter.setAttribute('geometry', 'width: 0.833');
                  Context_AF.progressMeter.setAttribute('position', '-0.820 0 0.810');
                  Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                  }

                  else if(cluesFound == 2){
                    Context_AF.progressMeter.setAttribute('geometry', 'width: 1.666');
                    Context_AF.progressMeter.setAttribute('position', '-0.4 0 0.810');
                    Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                  }


                  
                });

                socket.on('clue3_spinning', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#postcard_clue');
                  Context_AF.questionBtn     = document.querySelector('#questionBtn');

                  //let's add the basic animation to teh walls entity
                  //note that it is not enabled initially
                  Context_AF.walls.setAttribute('animation', {property:'position.y', to:13.214, dur:300, easing:'linear'});
                  Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});

                  Context_AF.progressMeter =   document.querySelector('#progressMeter');
                  Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

                  
                    if (isSpinning3 === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:13.214});
                      Context_AF.walls.setAttribute('scale', "2.626 2.626 2.626");
                      isSpinning3 = false; 

                      document.querySelectorAll(".ui3").forEach(e => e.parentNode.removeChild(e));
                      cluesFound -=1;
                      document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/3"});

                      Context_AF.walls.setAttribute('animation__rotation', {enabled:false});

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });

                    }

                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:14.5});
                      Context_AF.walls.setAttribute('scale', "5.364 5.364 5.364");
                      isSpinning3 = true;
                      cluesFound +=1;
                      document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/3"});

                      Context_AF.walls.setAttribute('animation__rotation', {enabled:true});

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                            
                    }

                    if(cluesFound == 3){
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
                  Context_AF.progressMeter.setAttribute('geometry', 'width: 0.833');
                  Context_AF.progressMeter.setAttribute('position', '-0.820 0 0.810');
                  Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                  }

                  else if(cluesFound == 2){
                    Context_AF.progressMeter.setAttribute('geometry', 'width: 1.666');
                    Context_AF.progressMeter.setAttribute('position', '-0.4 0 0.810');
                    Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
                  }
    
                });

                socket.on('falseclue1_picked', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#envelope');
                  
                  Context_AF.walls.setAttribute('animation', {property:'position.y', to:18.02653, dur:300, easing:'linear'});
                  
                    if (isSpinning4 === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:18.02653});
                      isSpinning4 = false;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:19.5});
                      isSpinning4 = true;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                  
                });

                socket.on('falseclue2_picked', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#dress');
                
                  Context_AF.walls.setAttribute('animation', {property:'position.y', to:11, dur:300, easing:'linear'});
                   
                  
                    if (isSpinning6 === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:11});
                      isSpinning6 = false;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:19});
                      isSpinning6 = true;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                  
                });

                socket.on('falseclue3_picked', (data) => {
                  const Context_AF = this;
                  Context_AF.walls      = document.querySelector('#necklace');
                
                  Context_AF.walls.setAttribute('animation', {property:'position.y', to:20.69447, dur:300, easing:'linear'});

                  
                    if (isSpinning7 === true) {
                      console.log('stop spinning');
                      Context_AF.walls.setAttribute('animation', {to:20.69447});
                      isSpinning7 = false;

                      const soundEffect = document.querySelectorAll('.soundEffect3');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });
                    }
                    else {
                      console.log('spinning');
                      Context_AF.walls.setAttribute('animation', {to:22});
                      isSpinning7 = true;

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

                    Context_AF.question.setAttribute('visible', "false");
                    Context_AF.question1.setAttribute('visible', "false");
                    Context_AF.question2.setAttribute('visible', "false");
                    Context_AF.question3.setAttribute('visible', "false");

                    const soundEffect = document.querySelectorAll('.soundEffect4');
                      soundEffect.forEach(function(soundEntity) {
                        soundEntity.components.sound.playSound();
                      });

                    
                    if(cluesFound == 3){
                            
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

                socket.on('next_question2', (data) => {

                  const Context_AF = this;
                  //Context_AF2  = this;
            
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

                socket.on('question3_correct', (data) => {

                  const Context_AF = this;
            
                  Context_AF.question3Btn = document.querySelector('#question3_end3');

                  Context_AF.question3Btn.setAttribute('visible', "true");

                  const soundEffect = document.querySelectorAll('.soundEffect1');
                  soundEffect.forEach(function(soundEntity) {
                    soundEntity.components.sound.playSound();
                  });
                        
                          
                });

                socket.on('transition_room', (data) => {

                  document.location='Room2.html';

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

