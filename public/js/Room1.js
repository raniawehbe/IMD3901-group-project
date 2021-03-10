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
        entityEl.setAttribute('position', "29.569 16.108 34.191");
        entityEl.setAttribute('rotation', "0 40.445 0");
        entityEl.setAttribute('scale', "27.674 21.132 1.125");
        entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
        entityEl.setAttribute('material', "color: #995d46");
          
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
        entityEl.setAttribute('position', "-6.931 36.962 -39.723");
        entityEl.setAttribute('rotation', "0 2.063 0");
        entityEl.setAttribute('scale', "27.674 21.022 1.125");
        entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
        entityEl.setAttribute('material', "color: #995d46");
        
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
        entityEl.setAttribute('position', "-29.889 29.785 -46.237");
        entityEl.setAttribute('rotation', "0 23.975 0");
        entityEl.setAttribute('scale', "27.674 21.022 1.125");
        entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
        entityEl.setAttribute('material', "color: #995d46");

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
        entityEl.setAttribute('position', "29.183 27.196 -11.153");
        entityEl.setAttribute('rotation', "0 88.824 0");
        entityEl.setAttribute('scale', "27.674 21.132 1.125");
        entityEl.setAttribute('geometry', {primitive: 'box', width:0.4, height:0.4, depth:0.4});
        entityEl.setAttribute('material', "color: #995d46");

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
Context_AF.walls      = document.querySelector('#letter_clue');
Context_AF.questionBtn     = document.querySelector('#questionBtn');

      
Context_AF.isSpinning = false;

Context_AF.walls.setAttribute('animation', {property:'position.y', to:8.86245, dur:300, easing:'linear'});
Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});
Context_AF.questionBtn.setAttribute('visible', "false");


Context_AF.progressMeter =   document.querySelector('#progressMeter');
Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:8.86245});
    Context_AF.isSpinning = false; 

    document.querySelectorAll(".ui").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("#panel_text1").forEach(e => e.parentNode.removeChild(e));
    cluesFound -=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

    Context_AF.walls.setAttribute('animation__rotation', {enabled:false});
    
  }
  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:9.8});
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
Context_AF.progressMeter.setAttribute('position', '-0.920 0 0.810');
Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
}

else if(cluesFound == 2){
  Context_AF.progressMeter.setAttribute('geometry', 'width: 1.25');
  Context_AF.progressMeter.setAttribute('position', '-0.600 0 0.810');
  Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
}

else if(cluesFound == 3){
  Context_AF.progressMeter.setAttribute('geometry', 'width: 1.875');
  Context_AF.progressMeter.setAttribute('position', '-0.295 0 0.810');
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
Context_AF.walls      = document.querySelector('#card_clue');
Context_AF.questionBtn     = document.querySelector('#questionBtn');
Context_AF.isSpinning = false;

//let's add the basic animation to teh walls entity
//note that it is not enabled initially
Context_AF.walls.setAttribute('animation', {property:'position.z', to:-49.993, dur:300, easing:'linear'});
Context_AF.walls.setAttribute('animation__rotation', {property:'rotation',  to:"0 360 0", loop:true, dur:10000, easing:'linear', enabled: false});
Context_AF.questionBtn.setAttribute('visible', "false");

Context_AF.progressMeter =   document.querySelector('#progressMeter');
Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:-49.993});
    Context_AF.isSpinning = false; 

    document.querySelectorAll(".ui2").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("#panel_text2").forEach(e => e.parentNode.removeChild(e));
    cluesFound -=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

    Context_AF.walls.setAttribute('animation__rotation', {enabled:false});
  }

  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:-40});
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
Context_AF.progressMeter.setAttribute('position', '-0.920 0 0.810');
Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
}

else if(cluesFound == 2){
  Context_AF.progressMeter.setAttribute('geometry', 'width: 1.25');
  Context_AF.progressMeter.setAttribute('position', '-0.600 0 0.810');
  Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
}

else if(cluesFound == 3){
  Context_AF.progressMeter.setAttribute('geometry', 'width: 1.875');
  Context_AF.progressMeter.setAttribute('position', '-0.295 0 0.810');
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
Context_AF.walls      = document.querySelector('#postcard_clue');
Context_AF.questionBtn     = document.querySelector('#questionBtn');
Context_AF.isSpinning = false;

//let's add the basic animation to teh walls entity
//note that it is not enabled initially
Context_AF.walls.setAttribute('animation', {property:'position.y', to:16.0656, dur:300, easing:'linear'});
Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});
Context_AF.questionBtn.setAttribute('visible', "false");

Context_AF.progressMeter =   document.querySelector('#progressMeter');
Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:16.0656});
    Context_AF.isSpinning = false; 

    document.querySelectorAll(".ui3").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("#panel_text3").forEach(e => e.parentNode.removeChild(e));
    cluesFound -=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

    Context_AF.walls.setAttribute('animation__rotation', {enabled:false});
  }
  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:17.3});
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
Context_AF.progressMeter.setAttribute('position', '-0.920 0 0.810');
Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
}

else if(cluesFound == 2){
  Context_AF.progressMeter.setAttribute('geometry', 'width: 1.25');
  Context_AF.progressMeter.setAttribute('position', '-0.600 0 0.810');
  Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
}

else if(cluesFound == 3){
  Context_AF.progressMeter.setAttribute('geometry', 'width: 1.875');
  Context_AF.progressMeter.setAttribute('position', '-0.295 0 0.810');
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
Context_AF.walls      = document.querySelector('#newspaper_clue');
Context_AF.questionBtn     = document.querySelector('#questionBtn');
Context_AF.isSpinning = false;

//let's add the basic animation to teh walls entity
//note that it is not enabled initially
Context_AF.walls.setAttribute('animation', {property:'position.y', to:19.28847, dur:300, easing:'linear'});
Context_AF.walls.setAttribute('animation__rotation', {property:'rotation', to:'0 360 0', loop:true, dur:10000, easing:'linear', enabled: false});
Context_AF.questionBtn.setAttribute('visible', "false");

Context_AF.progressMeter =   document.querySelector('#progressMeter');
Context_AF.progressMeter.setAttribute('geometry', {width: 0, depth: 0});

//listen on click
Context_AF.el.addEventListener('click', function() {
  if (Context_AF.isSpinning === true) {
    console.log('stop spinning');
    Context_AF.walls.setAttribute('animation', {to:19.28847});
    Context_AF.isSpinning = false; 

    document.querySelectorAll(".ui4").forEach(e => e.parentNode.removeChild(e));
    cluesFound -=1;
    document.querySelector('#clues_found').setAttribute('text', {value:"Clues Found: " + cluesFound + "/4"});

    Context_AF.walls.setAttribute('animation__rotation', {enabled:false});
  }

  else {
    console.log('spinning');
    Context_AF.walls.setAttribute('animation', {to:20.4});
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
Context_AF.progressMeter.setAttribute('position', '-0.920 0 0.810');
Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
}

else if(cluesFound == 2){
  Context_AF.progressMeter.setAttribute('geometry', 'width: 1.25');
  Context_AF.progressMeter.setAttribute('position', '-0.600 0 0.810');
  Context_AF.progressMeter.setAttribute('geometry', 'depth: 0.24');
}

else if(cluesFound == 3){
  Context_AF.progressMeter.setAttribute('geometry', 'width: 1.875');
  Context_AF.progressMeter.setAttribute('position', '-0.295 0 0.810');
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

                if(cluesFound == 4){
                    
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

AFRAME.registerComponent('add-text', {
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
  entityEl.setAttribute('id', "panel_text1");
  entityEl.setAttribute('class', "text");
  entityEl.setAttribute('position', "23.608 16.240 38.745");
  entityEl.setAttribute('rotation', "-1.782 -139.461 -0.576");
  entityEl.setAttribute('scale', "25.213 17.430 20.445");
  //entityEl.setAttribute('geometry', { width:0.4});
  entityEl.setAttribute('material', "color: #fff");
  entityEl.setAttribute('text', {value:'A letter that was\n written to grandma\n in 1663 by her\n best friend asking\n her about her new\n life in Montreal and\n how shes dealing \nwith life away from\n her homeland France.'});
          
        
  el.sceneEl.appendChild(entityEl);
        

  });
}
});

AFRAME.registerComponent('add-text2', {
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
        entityEl.setAttribute('id', "panel_text2");
        entityEl.setAttribute('class', "text2");
        entityEl.setAttribute('position', "1.391 38.114 -39.775");
        entityEl.setAttribute('rotation', "0 2.063 0");
        entityEl.setAttribute('scale', "27.674 21.022 1.125");
        //entityEl.setAttribute('geometry', { width:0.4});
        entityEl.setAttribute('material', "color: #fff");
        entityEl.setAttribute('text', {value:'A gift from Hudsons\n Bay given to\n grandma the same \nweek that it opened\n in 1670.'});
          
        
        el.sceneEl.appendChild(entityEl);
        

    });
}
});
AFRAME.registerComponent('add-text3', {
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
        entityEl.setAttribute('id', "panel_text3");
        entityEl.setAttribute('class', "text3");
        entityEl.setAttribute('position', "-23.682 29.785 -48.681");
        entityEl.setAttribute('rotation', "0 23.975 0");
        entityEl.setAttribute('scale', "24.443 18.568 4.490");
        //entityEl.setAttribute('geometry', { width:0.4});
        entityEl.setAttribute('material', "color: #fff");
        entityEl.setAttribute('text', {value:'A postcard of Montreal\n that was sent \nto grandma back in\n 1662 before going\n to Canada.'});
          
        
        el.sceneEl.appendChild(entityEl);
        

    });
}
});

AFRAME.registerComponent('nextQuestion', {
        schema: {
            duration: {type: 'number', default:20000.0},  //duration is in milliseconds
        },
        multiple: false, //do not allow multiple instances of this component on this entity
        init: function() {
            
            //get a local reference to our entities and set some property variables
            const Context_AF = this;
            //Context_AF2  = this;

            //Context_AF.question1      = document.querySelector('#question1');
            Context_AF.question2      = document.querySelector('#question2');

            //Context_AF.question1.setAttribute('visible', "true");
            //Context_AF.question2.setAttribute('visible', "false");

            Context_AF.el.addEventListener('click', function() {
              
                    
                    //Context_AF.question1.setAttribute('visible', "false");
                    Context_AF.question2.setAttribute('visible', "true");
                    console.log("next question: 2");
                          
            
            });        
          
        
        },
        
        });