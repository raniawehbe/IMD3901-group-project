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
        entityEl.setAttribute('position', "10.542 3.765 -5.54");
        entityEl.setAttribute('rotation', "-8.144 -34.017 0");
        entityEl.setAttribute('scale', "7.7138 5.451 0.29");
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
        entityEl.setAttribute('position', "13.006 4.327 0.774");
        entityEl.setAttribute('rotation', "16.152 90 0");
        entityEl.setAttribute('scale', "7.928 6.022 0.322");
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
        entityEl.setAttribute('position', "1.645 2.039 4.987");
        entityEl.setAttribute('rotation', "-24.586 131.9 0");
        entityEl.setAttribute('scale', "6.983 5.304 0.284");
        entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
        entityEl.setAttribute('material', "color: #995d46");
        entityEl.setAttribute('material', { src: 'assets/hockeyClue.png' })  

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
          //entityEl.setAttribute('add-UI', '');
          entityEl.setAttribute('id', "ui4");
          entityEl.setAttribute('class', "ui4");
          entityEl.setAttribute('position', "1.025 3.241 0.119");
          entityEl.setAttribute('rotation', "-21.610 69.736 7.743");
          entityEl.setAttribute('scale', "6.413 4.872 0.261");
          entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
          entityEl.setAttribute('material', "color: #995d46");
          entityEl.setAttribute('material', { src: "assets/1800's/teddyClue.png"})   
          el.sceneEl.appendChild(entityEl);

          const ambientSounds = document.querySelectorAll('.clue-music');
                    ambientSounds.forEach(function(soundEntity) {
                    soundEntity.components.sound.playSound();
                
                    });
          
  
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
Context_AF.walls      = document.querySelector('#clue1');
Context_AF.walls2      = document.querySelector('#glove_clue');
Context_AF.questionBtn     = document.querySelector('#questionBtn');

      
Context_AF.isSpinning = false;


Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});
Context_AF.walls2.setAttribute('animation', {property:'position.y', to:1.072, dur:300, easing:'linear'});
Context_AF.questionBtn.setAttribute('visible', "false");


Context_AF.progressMeter =   document.querySelector('#progressMeter');
Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls2.setAttribute('animation', {to:1.072});
    Context_AF.isSpinning = false; 

    document.querySelectorAll(".ui").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("#panel_text1").forEach(e => e.parentNode.removeChild(e));
    cluesFound -=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

    Context_AF.walls.setAttribute('animation__rotation', {enabled:false});
    
  }
  else {
    console.log('spinning');
    Context_AF.walls2.setAttribute('animation', {to:2.3});
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
Context_AF.walls      = document.querySelector('#pic_clue');
Context_AF.questionBtn     = document.querySelector('#questionBtn');
Context_AF.isSpinning = false;

//let's add the basic animation to teh walls entity
//note that it is not enabled initially
Context_AF.walls.setAttribute('animation', {property:'position.x', to:0, dur:300, easing:'linear'});
Context_AF.walls.setAttribute('animation__rotation', {property:'rotation',  to:"0 360 0", loop:true, dur:10000, easing:'linear', enabled: false});
Context_AF.questionBtn.setAttribute('visible', "false");

Context_AF.progressMeter =   document.querySelector('#progressMeter');
Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:0});
    Context_AF.isSpinning = false; 

    document.querySelectorAll(".ui2").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("#panel_text2").forEach(e => e.parentNode.removeChild(e));
    cluesFound -=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

    Context_AF.walls.setAttribute('animation__rotation', {enabled:false});
  }

  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:-1.6});
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
Context_AF.walls.setAttribute('animation', {property:'position.y', to:7.3581, dur:300, easing:'linear'});
Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});
Context_AF.questionBtn.setAttribute('visible', "false");

Context_AF.progressMeter =   document.querySelector('#progressMeter');
Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:7.3581});
    Context_AF.isSpinning = false; 

    document.querySelectorAll(".ui3").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("#panel_text3").forEach(e => e.parentNode.removeChild(e));
    cluesFound -=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

    Context_AF.walls.setAttribute('animation__rotation', {enabled:false});
  }
  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:8.514});
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
  Context_AF.walls      = document.querySelector('#bear_clue');
  Context_AF.questionBtn     = document.querySelector('#questionBtn');
  Context_AF.isSpinning = false;
  
  //let's add the basic animation to teh walls entity
  //note that it is not enabled initially
  Context_AF.walls.setAttribute('animation', {property:'position.y', to:0, dur:300, easing:'linear'});
  Context_AF.walls.setAttribute('animation__rotation', {property:'rotation',  to:"0 360 0", loop:true, dur:10000, easing:'linear', enabled: false});
  Context_AF.questionBtn.setAttribute('visible', "false");
  
  Context_AF.progressMeter =   document.querySelector('#progressMeter');
  Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});
  
  //listen on click
  Context_AF.el.addEventListener('click', function() {
    if (Context_AF.isSpinning === true) {
      console.log('stop spinning');
      Context_AF.walls.setAttribute('animation', {to:0});
      Context_AF.isSpinning = false; 
  
      document.querySelectorAll(".ui4").forEach(e => e.parentNode.removeChild(e));
      document.querySelectorAll("#panel_text2").forEach(e => e.parentNode.removeChild(e));
      cluesFound -=1;
      document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

      const ambientSounds = document.querySelectorAll('.clue-music');
                    ambientSounds.forEach(function(soundEntity) {
                    soundEntity.components.sound.stopSound();
                
                    });
  
      Context_AF.walls.setAttribute('animation__rotation', {enabled:false});
    }
  
    else {
      console.log('spinning');
      Context_AF.walls.setAttribute('animation', {to:0.37});
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
Context_AF.walls      = document.querySelector('#cooking3');
Context_AF.isSpinning = false;

//let's add the basic animation to teh walls entity
//note that it is not enabled initially
Context_AF.walls.setAttribute('animation', {property:'position.y', to:2.26116, dur:300, easing:'linear'});
 
//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:2.26116});
    Context_AF.isSpinning = false;
  }
  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:3.5});
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
Context_AF.walls      = document.querySelector('#typewriter');
Context_AF.isSpinning = false;

//let's add the basic animation to teh walls entity
//note that it is not enabled initially
Context_AF.walls.setAttribute('animation', {property:'position.y', to:2.22462, dur:300, easing:'linear'});
 
//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:2.22462});
    Context_AF.isSpinning = false;
  }
  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:3.5});
    Context_AF.isSpinning = true;
  }
});
},

});

AFRAME.registerComponent('false-clue3', {
  schema: {
  
  },
  multiple: false, //do not allow multiple instances of this component on this entity
  init: function() {
  
  //get a local reference to our entities and set some property variables
  const Context_AF = this;
  Context_AF.walls      = document.querySelector('#award1');
  Context_AF.isSpinning = false;
  
  //let's add the basic animation to teh walls entity
  //note that it is not enabled initially
  Context_AF.walls.setAttribute('animation', {property:'position.y', to:2.47014, dur:300, easing:'linear'});
   
  //listen on click
  Context_AF.el.addEventListener('click', function() {
    if (Context_AF.isSpinning === true) {
      console.log('stop spinning');
      Context_AF.walls.setAttribute('animation', {to:2.47014});
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
    
    },
    multiple: false, //do not allow multiple instances of this component on this entity
    init: function() {
    
    //get a local reference to our entities and set some property variables
    const Context_AF = this;
    Context_AF.walls      = document.querySelector('#trophy2');
    Context_AF.isSpinning = false;
    
    //let's add the basic animation to teh walls entity
    //note that it is not enabled initially
    Context_AF.walls.setAttribute('animation', {property:'position.y', to:2.84164, dur:300, easing:'linear'});
     
    //listen on click
    Context_AF.el.addEventListener('click', function() {
      if (Context_AF.isSpinning === true) {
        console.log('stop spinning');
        Context_AF.walls.setAttribute('animation', {to:2.84164});
        Context_AF.isSpinning = false;
      }
      else {
        console.log('spinning');
        Context_AF.walls.setAttribute('animation', {to:4.3});
        Context_AF.isSpinning = true;
      }
    });
    },
    
});

AFRAME.registerComponent('false-clue5', {
      schema: {
      
      },
      multiple: false, //do not allow multiple instances of this component on this entity
      init: function() {
      
      //get a local reference to our entities and set some property variables
      const Context_AF = this;
      Context_AF.walls      = document.querySelector('#glasses');
      Context_AF.isSpinning = false;
      
      //let's add the basic animation to teh walls entity
      //note that it is not enabled initially
      Context_AF.walls.setAttribute('animation', {property:'position.y', to:2.22327, dur:300, easing:'linear'});
       
      //listen on click
      Context_AF.el.addEventListener('click', function() {
        if (Context_AF.isSpinning === true) {
          console.log('stop spinning');
          Context_AF.walls.setAttribute('animation', {to:2.22327});
          Context_AF.isSpinning = false;
        }
        else {
          console.log('spinning');
          Context_AF.walls.setAttribute('animation', {to:3.8});
          Context_AF.isSpinning = true;
        }
      });
      },
      
});

AFRAME.registerComponent('false-clue6', {
        schema: {
        
        },
        multiple: false, //do not allow multiple instances of this component on this entity
        init: function() {
        
        //get a local reference to our entities and set some property variables
        const Context_AF = this;
        Context_AF.walls      = document.querySelector('#medal3');
        Context_AF.isSpinning = false;
        
        //let's add the basic animation to teh walls entity
        //note that it is not enabled initially
        Context_AF.walls.setAttribute('animation', {property:'position.y', to:2.47032, dur:300, easing:'linear'});
         
        //listen on click
        Context_AF.el.addEventListener('click', function() {
          if (Context_AF.isSpinning === true) {
            console.log('stop spinning');
            Context_AF.walls.setAttribute('animation', {to:2.47032});
            Context_AF.isSpinning = false;
          }
          else {
            console.log('spinning');
            Context_AF.walls.setAttribute('animation', {to:4.1});
            Context_AF.isSpinning = true;
          }
        });
        },
        
});

AFRAME.registerComponent('false-clue7', {
          schema: {
          duration: {type: 'number', default:20000.0},  //duration is in milliseconds
          },
          multiple: false, //do not allow multiple instances of this component on this entity
          init: function() {
          
          //get a local reference to our entities and set some property variables
          const Context_AF = this;
          Context_AF.walls      = document.querySelector('#frame2');
          Context_AF.isSpinning = false;
          
          //let's add the basic animation to teh walls entity
          //note that it is not enabled initially
          Context_AF.walls.setAttribute('animation', {property:'position.x', to:-0.8823, dur:300, easing:'linear'});
           
          //listen on click
          Context_AF.el.addEventListener('click', function() {
            if (Context_AF.isSpinning === true) {
              console.log('stop spinning');
              Context_AF.walls.setAttribute('animation', {to:-0.8823});
              Context_AF.isSpinning = false;
            }
            else {
              console.log('spinning');
              Context_AF.walls.setAttribute('animation', {to:1.3});
              Context_AF.isSpinning = true;
            }
          });
          },
          
});

AFRAME.registerComponent('false-clue8', {
            schema: {
            
            },
            multiple: false, //do not allow multiple instances of this component on this entity
            init: function() {
            
            //get a local reference to our entities and set some property variables
            const Context_AF = this;
            Context_AF.walls      = document.querySelector('#frame');
            Context_AF.isSpinning = false;
            
            //let's add the basic animation to teh walls entity
            //note that it is not enabled initially
            Context_AF.walls.setAttribute('animation', {property:'position.z', to:6.328, dur:300, easing:'linear'});
             
            //listen on click
            Context_AF.el.addEventListener('click', function() {
              if (Context_AF.isSpinning === true) {
                console.log('stop spinning');
                Context_AF.walls.setAttribute('animation', {to:6.328});
                Context_AF.isSpinning = false;
              }
              else {
                console.log('spinning');
                Context_AF.walls.setAttribute('animation', {to:5});
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

            Context_AF.question.setAttribute('visible', "false");
            Context_AF.question1.setAttribute('visible', "false");

            Context_AF.el.addEventListener('click', function() {

                if(cluesFound == 4){
                    
                    Context_AF.question.setAttribute('visible', "true");
                    Context_AF.question1.setAttribute('visible', "true");
                    
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
  
        //Context_AF.question1.setAttribute('visible', "true");
        //Context_AF.question2.setAttribute('visible', "false");
  
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