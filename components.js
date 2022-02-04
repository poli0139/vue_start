Vue.component('task-list',{
    template:'<div><task v-for="task in tasks">{{task.description}}</task></div>',

    data(){
        return{
            tasks : [
                { description: 'Go to the store', completed: false },
                { description: 'Clean', completed: true },
                { description: 'workout', completed: false },
                { description: 'call', completed: true },
                { description: 'work', completed: false }
            ],
        }
    }
})


Vue.component('task',{
template:'<li><slot></slot></li>'
})




//working with message component
//MESSAGES (EXERCISE #1)

Vue.component('message',{
props:['title','body'],

data(){
    return{
        isVisible: true
    };
},
template:`<article class="message" v-show="isVisible">
<div class="message-header">{{title}}
<button type="button" @click="isVisible=false">x</button>
</div>
<div class="message-body">{{body}}</div>
</article>`,


})





 //MODAL (EXERCISE #2)

Vue.component('modal',{

    template: `<div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="text-box"><slot></slot></div>
    </div>
    <button @click="$emit('closed')" class="modal-close is-large" aria-label="close"></button>
  </div>`
})









  new Vue({
     el: '#root',

     data:{
         showModal: false
     }
 })