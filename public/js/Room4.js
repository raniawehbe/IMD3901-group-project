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
        
        entityEl.setAttribute('id', "ui");
        entityEl.setAttribute('class', "ui");
        entityEl.setAttribute('position', "8.356 2.802 1.129");
        entityEl.setAttribute('rotation', "-19.648 -78.995 0");
        entityEl.setAttribute('scale', "5.032 3.842 0.204");
        entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
        entityEl.setAttribute('material', "color: #995d46");
        entityEl.setAttribute('material', { src: 'assets/book.png' })  
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
    
        entityEl.setAttribute('id', "ui2");
        entityEl.setAttribute('class', "ui2");
         entityEl.setAttribute('position', "11.181 2.538 4.295");
        entityEl.setAttribute('rotation', "-17.806 -125.13 1.682");
        entityEl.setAttribute('scale', "4.623 3.543 0.321");
        entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
        entityEl.setAttribute('material', "color: #995d46");
        entityEl.setAttribute('material', { src: 'assets/news.png' })  
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
  
        entityEl.setAttribute('id', "ui3");
        entityEl.setAttribute('class', "ui3");
        entityEl.setAttribute('position', "2.498 2.839 -6.503");
        entityEl.setAttribute('rotation', "-5.772 20.404 1.402");
        entityEl.setAttribute('scale', "6.412 4.871 0.261");
        entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
        entityEl.setAttribute('material', "color: #995d46");
        entityEl.setAttribute('material', { src: 'assets/primeMinister.png' })  

        el.sceneEl.appendChild(entityEl);
        

    });
}
});

AFRAME.registerComponent('add-ui4', {
  schema: {
          default: '',
          parse: AFRAME.utils.styleParser.parse
          },
  
  init: function () {
      
      const el = this.el;
      console.log('I am ready!');
  
      el.addEventListener('click', function() {
          
  
          var entityEl = document.createElement('a-entity');
       
          entityEl.setAttribute('id', "ui3");
          entityEl.setAttribute('class', "ui3");
          entityEl.setAttribute('position', "10.022 2.731 -6.216");
          entityEl.setAttribute('rotation', "-6.654 -32803 -1.183");
          entityEl.setAttribute('scale', "6.254 4.751 0.254");
          entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
          entityEl.setAttribute('material', "color: #995d46");
          entityEl.setAttribute('material', { src: 'assets/painting.png' })  
  
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
Context_AF.walls      = document.querySelector('#diary_clue');
Context_AF.questionBtn     = document.querySelector('#questionBtn');

      
Context_AF.isSpinning = false;

Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});
Context_AF.walls.setAttribute('animation', {property:'position.y', to:-1.322, dur:300, easing:'linear'});

Context_AF.questionBtn.setAttribute('visible', "false");


Context_AF.progressMeter =   document.querySelector('#progressMeter');
Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:-1.322});
    Context_AF.isSpinning = false; 

    document.querySelectorAll(".ui").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("#panel_text1").forEach(e => e.parentNode.removeChild(e));
    cluesFound -=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

    Context_AF.walls.setAttribute('animation__rotation', {enabled:false});
    
  }
  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:-0.7});
    Context_AF.isSpinning = true;

    cluesFound +=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

    Context_AF.walls.setAttribute("animation__rotation", {enabled:true});
           
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
Context_AF.walls      = document.querySelector('#news_clue');
Context_AF.walls2      = document.querySelector('#clue2');

Context_AF.questionBtn     = document.querySelector('#questionBtn');
Context_AF.isSpinning = false;

//let's add the basic animation to teh walls entity
//note that it is not enabled initially
Context_AF.walls.setAttribute('animation', {property:'position.y', to:0, dur:300, easing:'linear'});
Context_AF.walls2.setAttribute('animation__rotation', {property:'rotation',  to:"0 360 0", loop:true, dur:10000, easing:'linear', enabled: false});
Context_AF.questionBtn.setAttribute('visible', "false");

Context_AF.progressMeter =   document.querySelector('#progressMeter');
Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:0});
    Context_AF.walls2.setAttribute('rotation', "0 0 0");
    Context_AF.isSpinning = false; 

    document.querySelectorAll(".ui2").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("#panel_text2").forEach(e => e.parentNode.removeChild(e));
    cluesFound -=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

    Context_AF.walls2.setAttribute('animation__rotation', {enabled:false});
  }

  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:0.7});
    Context_AF.isSpinning = true;
    cluesFound +=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

    Context_AF.walls2.setAttribute('animation__rotation', {enabled:true});
      
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
Context_AF.walls      = document.querySelector('#primeMinister_clue');
Context_AF.questionBtn     = document.querySelector('#questionBtn');
Context_AF.isSpinning = false;

//let's add the basic animation to teh walls entity
//note that it is not enabled initially
Context_AF.walls.setAttribute('animation', {property:'position.z', to:0.009, dur:300, easing:'linear'});
Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});
Context_AF.questionBtn.setAttribute('visible', "false");

Context_AF.progressMeter =   document.querySelector('#progressMeter');
Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:0.009});
    Context_AF.walls.setAttribute('rotation', "0 0 0");
    Context_AF.isSpinning = false; 

    document.querySelectorAll(".ui3").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("#panel_text3").forEach(e => e.parentNode.removeChild(e));
    cluesFound -=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

    Context_AF.walls.setAttribute('animation__rotation', {enabled:false});
  }
  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:2});
    Context_AF.isSpinning = true;
    cluesFound +=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

    Context_AF.walls.setAttribute('animation__rotation', {enabled:true});
          
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
},  

});
AFRAME.registerComponent('spinning-effect4', {
  schema: {
  duration: {type: 'number', default:20000.0},  //duration is in milliseconds
  parse: AFRAME.utils.styleParser.parse
  },
  //multiple: false, //do not allow multiple instances of this component on this entity
  init: function() {
  
  //get a local reference to our entities and set some property variables
  const Context_AF = this;
  Context_AF.walls      = document.querySelector('#painting_clue');
  Context_AF.questionBtn     = document.querySelector('#questionBtn');
  Context_AF.isSpinning = false;
  
  //let's add the basic animation to teh walls entity
  //note that it is not enabled initially
  Context_AF.walls.setAttribute('animation', {property:'position.z', to:-0.027, dur:300, easing:'linear'});
  Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});
  Context_AF.questionBtn.setAttribute('visible', "false");
  
  Context_AF.progressMeter =   document.querySelector('#progressMeter');
  Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});
  
  //listen on click
  Context_AF.el.addEventListener('click', function() {
    if (Context_AF.isSpinning === true) {
      console.log('stop spinning');
      Context_AF.walls.setAttribute('animation', {to:-0.027});
      Context_AF.walls.setAttribute('rotation', "0 0 0");
      Context_AF.isSpinning = false; 
  
      document.querySelectorAll(".ui3").forEach(e => e.parentNode.removeChild(e));
      document.querySelectorAll("#panel_text3").forEach(e => e.parentNode.removeChild(e));
      cluesFound -=1;
      document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});
  
      Context_AF.walls.setAttribute('animation__rotation', {enabled:false});
    }
    else {
      console.log('spinning');
      Context_AF.walls.setAttribute('animation', {to:2});
      Context_AF.isSpinning = true;
      cluesFound +=1;
      document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});
  
      Context_AF.walls.setAttribute('animation__rotation', {enabled:true});
            
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
Context_AF.walls      = document.querySelector('#radio_fc');
Context_AF.isSpinning = false;

//let's add the basic animation to teh walls entity
//note that it is not enabled initially
Context_AF.walls.setAttribute('animation', {property:'position.y', to:3.21836, dur:300, easing:'linear'});
 
//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:3.21836});
    Context_AF.isSpinning = false;
  }

  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:4});
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
Context_AF.walls      = document.querySelector('#cross_fc');
Context_AF.isSpinning = false;

//let's add the basic animation to teh walls entity
//note that it is not enabled initially
Context_AF.walls.setAttribute('animation', {property:'position.y', to:5.10921, dur:300, easing:'linear'});
 
//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:5.10921});
    Context_AF.isSpinning = false;
  }
  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:6});
    Context_AF.isSpinning = true;
  }
});
},

});

AFRAME.registerComponent('false-clue3', {
  schema: {
  duration: {type: 'number', default:20000.0},  //duration is in milliseconds
  },
  multiple: false, //do not allow multiple instances of this component on this entity
  init: function() {
  
  //get a local reference to our entities and set some property variables
  const Context_AF = this;
  Context_AF.walls      = document.querySelector('#vase_fc');
  Context_AF.isSpinning = false;
  
  //let's add the basic animation to teh walls entity
  //note that it is not enabled initially
  Context_AF.walls.setAttribute('animation', {property:'position.y', to:3.34374, dur:300, easing:'linear'});
   
  //listen on click
  Context_AF.el.addEventListener('click', function() {
    if (Context_AF.isSpinning === true) {
      console.log('stop spinning');
      Context_AF.walls.setAttribute('animation', {to:3.34374});
      Context_AF.isSpinning = false;
    }
    else {
      console.log('spinning');
      Context_AF.walls.setAttribute('animation', {to:4});
      Context_AF.isSpinning = true;
    }
  });
  },
  
});

AFRAME.registerComponent('false-clue4', {
    schema: {
    duration: {type: 'number', default:20000.0},  //duration is in milliseconds
    },
    multiple: false, //do not allow multiple instances of this component on this entity
    init: function() {
    
    //get a local reference to our entities and set some property variables
    const Context_AF = this;
    Context_AF.walls      = document.querySelector('#lamp_fc');
    Context_AF.isSpinning = false;
    
    //let's add the basic animation to teh walls entity
    //note that it is not enabled initially
    Context_AF.walls.setAttribute('animation', {property:'position.y', to:2.516, dur:300, easing:'linear'});
     
    //listen on click
    Context_AF.el.addEventListener('click', function() {
      if (Context_AF.isSpinning === true) {
        console.log('stop spinning');
        Context_AF.walls.setAttribute('animation', {to:2.516});
        Context_AF.isSpinning = false;
      }
      else {
        console.log('spinning');
        Context_AF.walls.setAttribute('animation', {to:3});
        Context_AF.isSpinning = true;
      }
    });
    },
    
});

AFRAME.registerComponent('false-clue5', {
      schema: {
      duration: {type: 'number', default:20000.0},  //duration is in milliseconds
      },
      multiple: false, //do not allow multiple instances of this component on this entity
      init: function() {
      
      //get a local reference to our entities and set some property variables
      const Context_AF = this;
      Context_AF.walls      = document.querySelector('#basket_fc');
      Context_AF.isSpinning = false;
      
      //let's add the basic animation to teh walls entity
      //note that it is not enabled initially
      Context_AF.walls.setAttribute('animation', {property:'position.y', to:0.26368, dur:300, easing:'linear'});
       
      //listen on click
      Context_AF.el.addEventListener('click', function() {
        if (Context_AF.isSpinning === true) {
          console.log('stop spinning');
          Context_AF.walls.setAttribute('animation', {to:0.26368});
          Context_AF.isSpinning = false;
        }
        else {
          console.log('spinning');
          Context_AF.walls.setAttribute('animation', {to:1});
          Context_AF.isSpinning = true;
        }
      });
      },
      
});

AFRAME.registerComponent('false-clue6', {
        schema: {
        duration: {type: 'number', default:20000.0},  //duration is in milliseconds
        },
        multiple: false, //do not allow multiple instances of this component on this entity
        init: function() {
        
        //get a local reference to our entities and set some property variables
        const Context_AF = this;
        Context_AF.walls      = document.querySelector('#phone_fc');
        Context_AF.isSpinning = false;
        
        //let's add the basic animation to teh walls entity
        //note that it is not enabled initially
        Context_AF.walls.setAttribute('animation', {property:'position.y', to:3.06926, dur:300, easing:'linear'});
         
        //listen on click
        Context_AF.el.addEventListener('click', function() {
          if (Context_AF.isSpinning === true) {
            console.log('stop spinning');
            Context_AF.walls.setAttribute('animation', {to:3.06926});
            Context_AF.isSpinning = false;
          }
          else {
            console.log('spinning');
            Context_AF.walls.setAttribute('animation', {to:3.9});
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
            Context_AF.question4     = document.querySelector('#question4');

            Context_AF.question.setAttribute('visible', "false");
            Context_AF.question1.setAttribute('visible', "false");
            Context_AF.question2.setAttribute('visible', "false");
            Context_AF.question3.setAttribute('visible', "false");
            Context_AF.question4.setAttribute('visible', "false");

            Context_AF.el.addEventListener('click', function() {

                if(cluesFound == 4){
                    
                    Context_AF.question.setAttribute('visible', "true");
                    Context_AF.question1.setAttribute('visible', "true");
                    //console.log("height reached");
               }
            
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

AFRAME.registerComponent('next_question3', {
    schema: {
      default: '', //duration is in milliseconds
    },
    multiple: false, //do not allow multiple instances of this component on this entity
    init: function () {
        
        //get a local reference to our entities and set some property variables
        const Context_AF = this;
        //Context_AF2  = this;
  
        Context_AF.question3     = document.querySelector('#question3');
        Context_AF.question4     = document.querySelector('#question4');
        
        Context_AF.question3end  = document.querySelector('#question3_end3');
        Context_AF.choice1       = document.querySelector('#question3_choice1');
        Context_AF.choice2       = document.querySelector('#question3_choice2');
        Context_AF.Q4choice1     = document.querySelector('#question4_choice1');
        Context_AF.Q4choice2     = document.querySelector('#question4_choice2');
  
  
        Context_AF.el.addEventListener('click', function() {
          
                
              Context_AF.question3.setAttribute('visible', "false");
              Context_AF.question4.setAttribute('visible', "true");
  
              Context_AF.question3end.setAttribute('class', "");
              Context_AF.choice1.setAttribute('class', "");
              Context_AF.choice2.setAttribute('class', "");
  
              Context_AF.Q4choice1.setAttribute('class', "interactive");
              Context_AF.Q4choice2.setAttribute('class', "interactive");
  
              console.log("next question: 4");
                      
        
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
  
        Context_AF.question1Btn    = document.querySelector('#question1_end');
  
        Context_AF.question1Btn.setAttribute('visible', "false");
   
  
        Context_AF.el.addEventListener('click', function() {
            
              Context_AF.question1Btn.setAttribute('visible', "true");
                      
        
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

AFRAME.registerComponent('question4_correct', {
  schema: {
    default: '', //duration is in milliseconds
  },
  multiple: false, //do not allow multiple instances of this component on this entity
  init: function () {
      
      //get a local reference to our entities and set some property variables
      const Context_AF = this;
      //Context_AF2  = this;

      Context_AF.question4Btn = document.querySelector('#question4_end4');


      Context_AF.question4Btn.setAttribute('visible', "false");
 

      Context_AF.el.addEventListener('click', function() {
          
            Context_AF.question4Btn.setAttribute('visible', "true");

      
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