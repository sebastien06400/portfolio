let budget = 60000000;
const SHOPPINGLIST = []
let buyPlayer = {}
const PLAYERS = [
{ name: "Benedetto", price: 10000000, lvl: 1, att: 10, def: 2, chance: 10, photo: "Benedetto.png", id: 1},
{ name: "Thauvin", price: 10000000, lvl: 1, att: 10, def: 2, chance: 10, photo: "Thauvin.png", id: 2},
{ name: "Germain", price: 10000000, lvl: 1, att: 10, def: 2, chance: 10, photo: "Germain.png", id: 3},
{ name: "Rongier", price: 10000000, lvl: 1, att: 5, def: 5, chance: 10, photo: "Rongier.png", id: 4},
{ name: "Gueye", price: 10000000, lvl: 1, att: 5, def: 5, chance: 10, photo: "Gueye.png", id: 5},
{ name: "Cuisance", price: 10000000, lvl: 1, att: 5, def: 5, chance: 10, photo: "Cuisance.png", id: 6},
{ name: "Sakai", price: 10000000, lvl: 1, att: 2, def: 10, chance: 10, photo: "Sakai.png", id: 7},
{ name: "Strootman", price: 10000000, lvl: 1, att: 2, def: 10, chance: 10, photo: "Strootman.png", id: 8},
{ name: "González", price: 10000000, lvl: 1, att: 2, def: 10, chance: 10, photo: "González.png", id: 9},
{ name: "Kamara", price: 10000000, lvl: 1, att: 2, def: 10, chance: 10, photo: "Kamara.png", id: 10},
{ name: "Mandanda", price: 10000000, lvl: 1, att: 1, def: 30, chance: 10, photo: "Mandanda.png", id: 11}
]

// let generalXpPoints = 0; 

const Creation = {
    template: `
    <div>
        <h1>CREATION D'UN JOUEUR</h1>
        <div v-if="creatingPlayer===true">
            Nom du joueur <input v-model="playerName"> 
            <br> <br>
            <select name="Poste" id="select-poste" v-model="poste">
            <option value="">--Choisissez un poste--</option>
            <option value="gardien">Gardien</option>
            <option value="defenseur">Défenseur</option>
            <option value="milieu">Milieu</option>
            <option value="attaquant">Attaquant</option>
            <option value="staff">Staff</option>
            </select>
            <br><br>
            Att: {{this.playerAtt}} <div v-if="xpPoints>0"> <input @click="toggleAttPoint" type="checkbox" class="att-point point"> <input @click="toggleAttPoint" type="checkbox" class="att-point point"> <input @click="toggleAttPoint" type="checkbox" class="att-point point"> <input v-if="playerAtt>1" @click="toggleAttPoint" type="checkbox" class="att-point point"> <input v-if="playerAtt>2" @click="toggleAttPoint" type="checkbox" class="att-point point"></div><br>
            Def: {{this.playerDef}} <div v-if="xpPoints>0"> <input @click="toggleDefPoint" type="checkbox" class="def-point point"> <input @click="toggleDefPoint" type="checkbox" class="def-point point"> <input v-if="playerDef>2" @click="toggleDefPoint" type="checkbox" class="def-point point"> <input v-if="playerDef>4" @click="toggleDefPoint" type="checkbox" class="def-point point"></div><br>
            <div v-if="xpPoints>0">Points: <span style="color:blue; font-size:20px">{{xpPoints}}</span></div>
            <div><button class="button-create" v-if="xpPoints===0 && playerName!=='' && poste!==''" @click="createPlayer">Créer {{playerName}} <i class="fa fa-user-plus" aria-hidden="true"></i> </button></div>
        </div>
        <createdMod v-if="creatingPlayer === false && showModal === true" @close="showModal = false" v-bind:playerName="playerName">OOOOOOOIKké</createdMod>

    </div>`, 
    name: "creation",
    data() {
        return {
            playerName: "",
            poste: "",
            attPoint: 0,
            defPoint: 0,
            playerAtt: 1,
            playerDef: 1,
            xpPoints: 12,
            attPointsNeeded: 3,
            defPointsNeeded: 2,
            creatingPlayer: true,
            showModal: false,
        }
    },
    components: {
        'createdMod': {
            props: ["playerName"],
            template: `
            <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-container">
                <div class="modal-body">
                    <div class="events flex-list column">
                        <span style="color:green">{{playerName}}</span> vient d'être créé !
                        <div class="modal-header"></br>
                        Il est disponible dans tes joueurs.
                      </div>
                    </div>
                    <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>`
        }
    },
    methods: {
        toggleAttPoint() {
            if (event.target.checked) { 
                this.attPoint += 1; 
                this.xpPoints -=1
            } else { 
                this.attPoint -=1; 
                this.xpPoints +=1
            }
            if (this.attPoint === this.attPointsNeeded) {
                this.playerAtt += 1;
                let attInputs = document.querySelectorAll(".att-point")
                Array.from(attInputs).forEach((input)=>{input.checked=false})
                this.attPoint = 0;
                if (this.playerAtt === 1) {this.attPointsNeeded+=1}
                if (this.playerAtt === 2) {this.attPointsNeeded+=1}
                if (this.playerAtt === 3) {this.attPointsNeeded+=1}

            }
        },
        toggleDefPoint() {
            if (event.target.checked) { 
                this.defPoint += 1; 
                this.xpPoints -=1
            } else { 
                this.defPoint -=1; 
                this.xpPoints +=1
            }
                if (this.defPoint === this.defPointsNeeded) {
                this.playerDef += 1;
                let attInputs = document.querySelectorAll(".def-point")
                Array.from(attInputs).forEach((input)=>{input.checked=false})
                this.defPoint = 0;
                if (this.playerDef === 3) {this.defPointsNeeded+=1}
                if (this.playerDef === 5) {this.defPointsNeeded+=1}

            }
        },
        createPlayer() {
            PLAYERS.push({ name: this.playerName, price: 1000, lvl: 1, att: this.playerAtt, def: this.playerDef, chance: 1, photo: "player.png", id: PLAYERS.length +1});
            this.creatingPlayer = false;
            this.showModal = true;
        }

    },
    mounted() {
        if(localStorage.playerName) this.playerName = localStorage.playerName;
        if(localStorage.poste) this.poste = localStorage.poste;
        },

    watch:{
      playerName(newName) {
      localStorage.playerName = newName;
    },
    poste(newposte) {
        localStorage.poste = newposte;
    }
  
  }

}

const Mesjoueurs = {
    template: `
    <div>
        <h1>LISTE DE MES JOUEURS</h1><br>
        <div v-for="player in PLAYERS" class="flex-list">  
            <img v-bind:src="player.photo" v-bind:name="player.name" width="100px">
            <div class="flex-list column">
                <div>{{player.name}} </div>
                <div>
                    Att: {{player.att}} <input type="checkbox" id="att-point" class="point"> 	<label for="point"></label> <input type="checkbox" id="att-point2" class="point"> <input type="checkbox" id="att-point3" class="point">
                </div>
                <div>
                    Def: {{player.def}} <input type="checkbox" id="def-point" class="point"> <input type="checkbox" id="def-point2" class="point"> <input type="checkbox" id="def-point3" class="point">
                </div>
            </div> 
        </div>
    </div>`,
    name: "mesjoueurs",
    data() {
        return {
            PLAYERS:PLAYERS,
        }
    }

}



const Match = {
    template: "#match", 
    name: "match",
    data() {
        return { 
            PLAYERS:PLAYERS,
            SHOPPINGLIST:SHOPPINGLIST,
            budget:budget,
            buyPlayer:buyPlayer,
            launched: false,
            // deciding: false,
            probaTir: 0,
            probaPasse: 0.85,
            probaEncaisse: 0.01,
            minutePlaying: 1,
            anEvent: "",
            marques: 0,
            encaisses: 0,
            idCurrentPlayer: 2,
            idPasse1: 4,
            idPasse2: 7,
            eventType: 1,
            showModal: false,
            ballonResult: "",
            winsInARow: 0,
            matchTitle: ["8ème de finale", "Quart de finale", "Demi-finale", "Finale"],
            victory: false,
            ready: false,
        }
    },
    components: {
        'modal': {
            props: ["content", "PLAYERS", "probaTir", "proba", "idCurrentPlayer", "idPasse1", "idPasse2"],
            template: `<div>LE MODAAAAL</div>`
        },
        'an-event': {
            props: ["content", "PLAYERS", "probaTir", "proba", "idCurrentPlayer", "idPasse1", "idPasse2", "eventType", "ready"],
            template: `
            <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-container">

                <div class="modal-body">
                  <slot name="body">
                    <div class="events flex-list column">
                        <div><img src="but.PNG" width="40px" alt="action"></div>
                        <div class="modal-header"></br>
                        <slot name="header">
                        <h3>{{ content }}'</h3>
                        </slot>
                      </div>
                        <div v-if="ready" ><img :src=this.PLAYERS[idCurrentPlayer].photo width="60px"><span>{{this.PLAYERS[idCurrentPlayer].name}} a la balle !</span></div></br>
                        <div class="column" v-if="ready">
                            <div class="choice" @click="$emit('tir')">TIRER<span class="min">{{Math.trunc(probaTir*100)}}%</span></div>
                            <div class="choice" v-if="idPasse1!==idPasse2 && idCurrentPlayer!==idPasse2 && idCurrentPlayer!==idPasse1 && eventType == 1" :id="idPasse1" @click="$emit('passe')">Passer à {{this.PLAYERS[idPasse1].name}} <img :src=this.PLAYERS[idPasse1].photo width="40px"></div>
                            <div class="choice" v-if="idPasse1!==idPasse2 && idCurrentPlayer!==idPasse2 && idCurrentPlayer!==idPasse1 && (eventType == 1 || eventType == 2)" :id="idPasse2" @click="$emit('passe')">Passer à {{this.PLAYERS[idPasse2].name}} <img :src=this.PLAYERS[idPasse2].photo width="40px"></div>
                        </div>
                    </div>
                    </slot>
                </div>
                <!-- 
                <div class="modal-footer">
                  <slot name="footer">
                   default footer
                    <button class="modal-default-button" @click="$emit('close')">
                      OK
                    </button>
                  </slot>
                </div>  -->
              </div>
            </div>
          </div>
`            
          }
      },
    methods: {
        // add(id) { 
        //     buyPlayer = PLAYERS.find(x => x.name === event.target.name)
        //     if (this.budget >=  buyPlayer.price) {
        //     SHOPPINGLIST.push(buyPlayer)
        //     this.$delete(this.PLAYERS, id)
        //     // PLAYERS.splice(PLAYERS.indexOf(buyPlayer),1)
        //     this.budget -= buyPlayer.price
        //     };
        //  },
         remove(id) { 
            buyPlayer = SHOPPINGLIST.find(x => x.name === event.target.name)
            PLAYERS.push(buyPlayer)
            this.$delete(SHOPPINGLIST, id)
            this.budget += buyPlayer.price
         },
         save() {
             download(JSON.stringify(SHOPPINGLIST), "myteam", "txt")
         },
         proba(x) {
            return (Math.floor(Math.random() * (100) + 1 ) <= x*100)
        },
        randomProba() {
            return Math.floor(Math.random() * (100))/100 
        },
        randomNumber(x) {
            return Math.floor(Math.random()*x+1)
        },
        startMatch() {
            this.launched=true;
            this.encaisses = 0;
            this.marques = 0;
            this.continueMatch();
        },
        looping() { 
            if (this.minutePlaying<=89) {
                this.minutePlaying+=1;
                if (this.proba(this.probaEncaisse)) {
                    console.log(this.probaEncaisse)
                    console.log(this.winsInARow)
                    this.butEncaisse()
                }
                else if (this.proba(0.12)) {
                    this.probaTir = this.randomProba()*this.randomProba(); 
                    this.ready = true;
                }
                else {
                    this.playing();
                }
            }
            else {
                this.endMatch();
            }
        },
        continueMatch() {
            this.eventType = 1;
            this.ballonResult="";
            this.playing();
        },
        playing() {
            setTimeout(this.looping, 100)
        },
        endMatch() {
            this.eventType = 0;
            this.ballonResult="Match terminé.";
            this.minutePlaying = 0;
            setTimeout(this.nextMatchReady, 2000);
        },
        nextMatchReady() {
            if (this.marques > this.encaisses) {
                this.winsInARow += 1;
                if (this.winsInARow === 4) {
                    this.victory = true;
                }
            }
            else {
                this.winsInARow = 0;
            }
            this.probaEncaisse = 0.01 + (this.winsInARow * 0.01);
            this.launched=false;
            this.ballonResult = "";
            this.marques = 0;
            this.encaisses = 0;
        },
        butEncaisse() {
            this.eventType = 0;
            this.encaisses += 1;
            this.ballonResult="But encaissé.";
            console.log("BUT ENCAIssséé")
        },
        tirAction() {
            this.ready = false;
            if (this.proba(this.probaTir)) {
                this.marques += 1
                this.ballonResult="BUT!!!";
            } else {
                this.ballonResult="Tir raté.";

            } 
            // this.playMatch()
            this.idCurrentPlayer = this.randomNumber(PLAYERS.length) -1
            this.idPasse1 = this.randomNumber(PLAYERS.length) -1
            this.idPasse2 = this.randomNumber(PLAYERS.length) -1
            this.eventType = 0
            this.probaTir = this.randomProba()*this.randomProba();
        },
        passeAction() {

            if (this.eventType == 2) {
                if (this.proba(this.probaPasse)) {
                    this.eventType = 3
                    this.ballonResult="";
                    this.idCurrentPlayer = event.target.id 
                    this.probaTir = this.randomProba()*this.randomProba();

                } else {
                    this.eventType = 0;
                    this.ballonResult="Passe ratée !";
                    this.ready = false;
                } 
            }
            if (this.eventType == 1) {
                if (this.proba(this.probaPasse)) {
                    this.eventType = 2
                    this.ballonResult="";
                    this.idCurrentPlayer = event.target.id 
                    this.idPasse1 = this.randomNumber(PLAYERS.length)
                    this.probaTir = this.randomProba()*this.randomProba();

                } else {
                    this.eventType = 0;
                    this.ballonResult="Passe ratée !";
                    this.ready = false;
                } 
            }
        },
        
    }
}
const Notes = {
    template: "<h1>NOTESSSSS</h1>", name: "notes"
}


//router
const router = new VueRouter({
    routes: [
        // { path: "/", component: Home, name: "home" },
        { path: "/creation", component: Creation, name: "creation" },
        { path: "/mesjoueurs", component: Mesjoueurs},
        { path: "/match", component: Match}
    ]
})


// APP VUE
const vue1 = new Vue({
    router,
    data: {
        showModal: false
    }
}).$mount("#vue1")

// const vueAchats = new Vue({
//     router,
//     data: {
//         showModal: false
//     }
// }).$mount("#vueAchats")

// Vue.component('an-event', {
//     // data: function () {
//     //   return {
//     //     count: 0
//     //   }
//     // },
//     template: '<h1>OOKOKOKOK!!!!!</h1>'
//   })
  

  

// STACKOVERFLOW
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
        url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}


