//variables
let cluesFound = 0;


AFRAME.registerComponent('add-ui', {
schema: {
        default: '',
        parse: AFRAME.utils.styleParser.parse
        },
multiple: false,       
init: function () {
    
    const el = this.el;
    
    console.log('I am ready!');

    el.addEventListener('click', function() {

        var entityEl = document.createElement('a-entity');
        //entityEl.setAttribute('add-UI', '');
        entityEl.setAttribute('id', "ui");
        entityEl.setAttribute('class', "ui");
        entityEl.setAttribute('position', "5.290 3.570 -4.083");
        entityEl.setAttribute('rotation', "0 40.445 0");
        entityEl.setAttribute('scale', "7.138 5.451 0.290");
        entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
        entityEl.setAttribute('material', "color: #995d46");
        entityEl.setAttribute('material', { src: 'assets/glovesClue.png' })  
        el.sceneEl.appendChild(entityEl);
        

    });
}
});

AFRAME.registerComponent('add-ui2', {
schema: {
        default: '',
        parse: AFRAME.utils.styleParser.parse
        },

init: function () {
    
    const el = this.el;
    console.log('I am ready!');

    el.addEventListener('click', function() {
        

        var entityEl = document.createElement('a-entity');
        //entityEl.setAttribute('add-UI', '');
        entityEl.setAttribute('id', "ui2");
        entityEl.setAttribute('class', "ui2");
        entityEl.setAttribute('position', "10.79527 5.76731 0.08257");
        entityEl.setAttribute('rotation', "0 90 0");
        entityEl.setAttribute('scale', "9.173 6.968 0.373");
        entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
        entityEl.setAttribute('material', "color: #995d46");
        entityEl.setAttribute('material', { src: 'assets/frameClue.png' })  
        el.sceneEl.appendChild(entityEl);
        

    });
}
});

AFRAME.registerComponent('add-ui3', {
schema: {
        default: '',
        parse: AFRAME.utils.styleParser.parse
        },

init: function () {
    
    const el = this.el;
    console.log('I am ready!');

    el.addEventListener('click', function() {
        

        var entityEl = document.createElement('a-entity');
        //entityEl.setAttribute('add-UI', '');
        entityEl.setAttribute('id', "ui3");
        entityEl.setAttribute('class', "ui3");
        entityEl.setAttribute('position', "1.233 1.837 4.030");
        entityEl.setAttribute('rotation', "0 90 0");
        entityEl.setAttribute('scale', "9.659 7.337 0.393");
        entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
        entityEl.setAttribute('material', "color: #995d46");
        entityEl.setAttribute('material', { src: 'assets/hockeyClue.png' })  

        el.sceneEl.appendChild(entityEl);
        

    });
}
});


AFRAME.registerComponent('spinning-effect', {
schema: {
duration: {type: 'number', default:20000.0},  //duration is in milliseconds
parse: AFRAME.utils.styleParser.parse
},
//multiple: false, //do not allow multiple instances of this component on this entity
init: function() {

//get a local reference to our entities and set some property variables
const Context_AF = this;
Context_AF.walls      = document.querySelector('#glove_clue');
Context_AF.questionBtn     = document.querySelector('#questionBtn');

      
Context_AF.isSpinning = false;

Context_AF.walls.setAttribute('animation', {property:'position.y', to:1.501, dur:300, easing:'linear'});
Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});
Context_AF.questionBtn.setAttribute('visible', "false");


Context_AF.progressMeter =   document.querySelector('#progressMeter');
Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:1.501});
    Context_AF.isSpinning = false; 

    document.querySelectorAll(".ui").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("#panel_text1").forEach(e => e.parentNode.removeChild(e));
    cluesFound -=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/3"});

    Context_AF.walls.setAttribute('animation__rotation', {enabled:false});
    
  }
  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:1.501});
    Context_AF.isSpinning = true;

    cluesFound +=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/3"});

    Context_AF.walls.setAttribute("animation__rotation", {enabled:true});
           
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
},  

});

AFRAME.registerComponent('spinning-effect2', {
schema: {
duration: {type: 'number', default:20000.0},  //duration is in milliseconds
parse: AFRAME.utils.styleParser.parse
},
//multiple: false, //do not allow multiple instances of this component on this entity
init: function() {

//get a local reference to our entities and set some property variables
const Context_AF = this;
Context_AF.walls      = document.querySelector('#pic_clue');
Context_AF.questionBtn     = document.querySelector('#questionBtn');
Context_AF.isSpinning = false;

//let's add the basic animation to teh walls entity
//note that it is not enabled initially
Context_AF.walls.setAttribute('animation', {property:'position.z', to:0.446, dur:300, easing:'linear'});
Context_AF.walls.setAttribute('animation__rotation', {property:'rotation',  to:"0 360 0", loop:true, dur:10000, easing:'linear', enabled: false});
Context_AF.questionBtn.setAttribute('visible', "false");

Context_AF.progressMeter =   document.querySelector('#progressMeter');
Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:0.446});
    Context_AF.isSpinning = false; 

    document.querySelectorAll(".ui2").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("#panel_text2").forEach(e => e.parentNode.removeChild(e));
    cluesFound -=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/3"});

    Context_AF.walls.setAttribute('animation__rotation', {enabled:false});
  }

  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:0.446});
    Context_AF.isSpinning = true;
    cluesFound +=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/3"});

    Context_AF.walls.setAttribute('animation__rotation', {enabled:true});
      
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
},


});

AFRAME.registerComponent('spinning-effect3', {
schema: {
duration: {type: 'number', default:20000.0},  //duration is in milliseconds
parse: AFRAME.utils.styleParser.parse
},
//multiple: false, //do not allow multiple instances of this component on this entity
init: function() {

//get a local reference to our entities and set some property variables
const Context_AF = this;
Context_AF.walls      = document.querySelector('#hockey_clue');
Context_AF.questionBtn     = document.querySelector('#questionBtn');
Context_AF.isSpinning = false;

//let's add the basic animation to teh walls entity
//note that it is not enabled initially
Context_AF.walls.setAttribute('animation', {property:'position.y', to:5.214, dur:300, easing:'linear'});
Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});
Context_AF.questionBtn.setAttribute('visible', "false");

Context_AF.progressMeter =   document.querySelector('#progressMeter');
Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:5.214});
    Context_AF.isSpinning = false; 

    document.querySelectorAll(".ui3").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("#panel_text3").forEach(e => e.parentNode.removeChild(e));
    cluesFound -=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/3"});

    Context_AF.walls.setAttribute('animation__rotation', {enabled:false});
  }
  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:5.214});
    Context_AF.isSpinning = true;
    cluesFound +=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/3"});

    Context_AF.walls.setAttribute('animation__rotation', {enabled:true});
          
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
},  

});


AFRAME.registerComponent('false-clue', {
schema: {
duration: {type: 'number', default:20000.0},  //duration is in milliseconds
},
multiple: false, //do not allow multiple instances of this component on this entity
init: function() {

//get a local reference to our entities and set some property variables
const Context_AF = this;
Context_AF.walls      = document.querySelector('#picture-frame');
Context_AF.isSpinning = false;

//let's add the basic animation to teh walls entity
//note that it is not enabled initially
Context_AF.walls.setAttribute('animation', {property:'position.y', to:18.02653, dur:300, easing:'linear'});
 
//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:18.02653});
    Context_AF.isSpinning = false;
  }
  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:19.5});
    Context_AF.isSpinning = true;
  }
});
},


});

AFRAME.registerComponent('false-clue2', {
schema: {
duration: {type: 'number', default:20000.0},  //duration is in milliseconds
},
multiple: false, //do not allow multiple instances of this component on this entity
init: function() {

//get a local reference to our entities and set some property variables
const Context_AF = this;
Context_AF.walls      = document.querySelector('#diary');
Context_AF.isSpinning = false;

//let's add the basic animation to teh walls entity
//note that it is not enabled initially
Context_AF.walls.setAttribute('animation', {property:'position.y', to:17.90097, dur:300, easing:'linear'});
 
//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:17.90097});
    Context_AF.isSpinning = false;
  }
  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:19.2});
    Context_AF.isSpinning = true;
  }
});
},

});


AFRAME.registerComponent('visibility', {
        schema: {
            duration: {type: 'number', default:20000.0},  //duration is in milliseconds
        },
        multiple: false, //do not allow multiple instances of this component on this entity
        init: function() {
            
            //get a local reference to our entities and set some property variables
            const Context_AF = this;
            //Context_AF2  = this;

            Context_AF.question      = document.querySelector('#questions');
            Context_AF.question1     = document.querySelector('#question1');
            Context_AF.question2     = document.querySelector('#question2');
            Context_AF.question3     = document.querySelector('#question3');

            Context_AF.question.setAttribute('visible', "false");
            Context_AF.question1.setAttribute('visible', "false");
            Context_AF.question2.setAttribute('visible', "false");
            Context_AF.question3.setAttribute('visible', "false");

            Context_AF.el.addEventListener('click', function() {

                if(cluesFound == 3){
                    
                    Context_AF.question.setAttribute('visible', "true");
                    Context_AF.question1.setAttribute('visible', "true");
                    //console.log("height reached");
               }
            
            });        
                        
        },
        
      });

AFRAME.registerComponent('transition', {
schema: {
  duration: {type: 'number', default:20000.0},  //duration is in milliseconds
},
multiple: false, //do not allow multiple instances of this component on this entity
init: function() {
            
//get a local reference to our entities and set some property variables
const Context_AF = this;
//Context_AF2  = this;

Context_AF.question      = document.querySelector('#room_unlock');

Context_AF.question.setAttribute('visible', "false");

Context_AF.el.addEventListener('click', function() {
              
                    
Context_AF.question.setAttribute('visible', "true");
console.log("height reached");                  
            
});        
          
        
},
        
});

//For Questions       

        AFRAME.registerComponent('next_question', {
          schema: {
            default: '', //duration is in milliseconds
          },
          multiple: false, //do not allow multiple instances of this component on this entity
          init: function () {
              
              //get a local reference to our entities and set some property variables
              const Context_AF = this;
              //Context_AF2  = this;
  
              Context_AF.question1      = document.querySelector('#question1');
              Context_AF.question2      = document.querySelector('#question2');
              Context_AF.question1end      = document.querySelector('#question1_end');
              Context_AF.choice1     = document.querySelector('#question1_choice1');
              Context_AF.choice2     = document.querySelector('#question1_choice2');
              Context_AF.Q2choice1     = document.querySelector('#question2_choice1');
              Context_AF.Q2choice2     = document.querySelector('#question2_choice2');
  
              Context_AF.question2.setAttribute('visible', "false");
  
              //Context_AF.question1.setAttribute('visible', "true");
              //Context_AF.question2.setAttribute('visible', "false");
  
              Context_AF.el.addEventListener('click', function() {
                
                      
                      Context_AF.question1.setAttribute('visible', "false");
                      Context_AF.question2.setAttribute('visible', "true");
                      Context_AF.question1end.setAttribute('class', "");
                      Context_AF.choice1.setAttribute('class', "");
                      Context_AF.choice2.setAttribute('class', "");
                      Context_AF.Q2choice1.setAttribute('class', "interactive");
                      Context_AF.Q2choice2.setAttribute('class', "interactive");
  
                      console.log("next question: 2");
                            
              
              });        
            
          
          },
          
  });
  
  AFRAME.registerComponent('next_question2', {
    schema: {
      default: '', //duration is in milliseconds
    },
    multiple: false, //do not allow multiple instances of this component on this entity
    init: function () {
        
        //get a local reference to our entities and set some property variables
        const Context_AF = this;
        //Context_AF2  = this;
  
        Context_AF.question2     = document.querySelector('#question2');
        Context_AF.question3     = document.querySelector('#question3');
        Context_AF.question2end  = document.querySelector('#question2_end2');
        Context_AF.choice1       = document.querySelector('#question2_choice1');
        Context_AF.choice2       = document.querySelector('#question2_choice2');
        Context_AF.Q3choice1     = document.querySelector('#question3_choice1');
        Context_AF.Q3choice2     = document.querySelector('#question3_choice2');
  
        //Context_AF.question1.setAttribute('visible', "true");
        //Context_AF.question2.setAttribute('visible', "false");
  
        Context_AF.el.addEventListener('click', function() {
          
                
              Context_AF.question2.setAttribute('visible', "false");
              Context_AF.question3.setAttribute('visible', "true");
  
              Context_AF.question2end.setAttribute('class', "");
              Context_AF.choice1.setAttribute('class', "");
              Context_AF.choice2.setAttribute('class', "");
  
              Context_AF.Q3choice1.setAttribute('class', "interactive");
              Context_AF.Q3choice2.setAttribute('class', "interactive");
  
              console.log("next question: 3");
                      
        
        });        
      
    
    },
    
  });
  
  AFRAME.registerComponent('question1_correct', {
    schema: {
      default: '', 
    },
    multiple: false, 
    init: function () {
        
        //get a local reference to our entities and set some property variables
        const Context_AF = this;
  
        Context_AF.question1Btn      = document.querySelector('#question1_end');
        Context_AF.choice1     = document.querySelector('#question1_choice1');
        Context_AF.choice2     = document.querySelector('#question1_choice2');
  
        Context_AF.question1Btn.setAttribute('visible', "false");
   
  
        Context_AF.el.addEventListener('click', function() {
            
              Context_AF.question1Btn.setAttribute('visible', "true");
  
              Context_AF.choice2.setAttribute('active-color', '#22252a');
              Context_AF.choice2.setAttribute('handle-color', '#22252a');
                      
        
        });        
      
    
    },
    
  });
  
  AFRAME.registerComponent('question2_correct', {
    schema: {
      default: '', //duration is in milliseconds
    },
    multiple: false, //do not allow multiple instances of this component on this entity
    init: function () {
        
        //get a local reference to our entities and set some property variables
        const Context_AF = this;
        //Context_AF2  = this;
  
        Context_AF.question2Btn = document.querySelector('#question2_end2');
  
  
        Context_AF.question2Btn.setAttribute('visible', "false");
   
  
        Context_AF.el.addEventListener('click', function() {
            
              Context_AF.question2Btn.setAttribute('visible', "true");
  
        
        });        
      
    
    },
    
  });
  
  AFRAME.registerComponent('question3_correct', {
    schema: {
      default: '', //duration is in milliseconds
    },
    multiple: false, //do not allow multiple instances of this component on this entity
    init: function () {
        
        //get a local reference to our entities and set some property variables
        const Context_AF = this;
        //Context_AF2  = this;
  
        Context_AF.question3Btn = document.querySelector('#question3_end3');
  
        Context_AF.question3Btn.setAttribute('visible', "false");
   
  
        Context_AF.el.addEventListener('click', function() {
            
              Context_AF.question3Btn.setAttribute('visible', "true");
  
        
        });        
      
    },
    
  });
  
  AFRAME.registerComponent('wrong_answer', {
      schema: {
                  default: '',
                  parse: AFRAME.utils.styleParser.parse
              },
    multiple: true,
    init: function () {
        
        //get a local reference to our entities and set some property variables
        const Context_AF = this;
  
        Context_AF.questionsPlane = document.querySelector('#question_plane');
  
        Context_AF.questionsPlane.addEventListener('click', function(evt) {
            
          Context_AF.questionsPlane.setAttribute('animation__color', {property:'material.color', type:"color", from:"rgb(255, 0, 0)", to:"rgb(255, 255, 255)",  dur:4000, easing:'linear'});
          Context_AF.questionsPlane.setAttribute('animation__shake', {property:'position.x', from:1, to:0, loop:4, dur:300, easing:'linear'});
  
          console.log("wrong asnwer!")
        
        });    
        
        
      
    },
    
  });