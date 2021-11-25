<template>
  <div id="app">
    <header class="center">
      <h1 class="title">Todos</h1>
    </header>
    <div class="container center">
      <div class="todo" id="todo">
        <div class="item">
          <div class="opt center cursorPointer" @click="switchAllTodo">
            <span class="iconfont icon-xialajiantouxiao" style="font-size:20px;"></span>
          </div>
          <input type="text" class="text" placeholder="What needs to be done?" v-model="inputTodo" @keyup.enter="addNewTodo(inputTodo)"/>
        </div>
        <div v-for="(todo ,index) in filterList" class="item" >
          <div class="opt center cursorPointer" style="border:2px solid green; border-radius: 50% ;" @click="switchTodo(index)">
            <span v-if="todo.done" class="iconfont icon-dui" style="font-size:20px;"></span>
          </div>
          <input  type="text" :class="{text:true,deleted:todo.done}" :value="todo.txt" readonly/>
          <div  class="opt center cursorPointer" @click="removeTodo(index)">
            <span class="iconfont icon-cuowu" style="font-size:20px;"></span>
          </div>
        </div>
        <div class="item">
          <span >{{todoLeft}} item left</span>
          <div class="filter center">
            <span :class="{selected:doneFilter==='all'}" @click="setFilter('all')">All</span>
            <span :class="{selected:doneFilter==='active'}" @click="setFilter('active')">Active</span>
            <span :class="{selected:doneFilter==='completed'}" @click="setFilter('completed')">Completed</span>
          </div>
          <span class="cursorPointer" :style="{visibility:todoLeft !== list.length?'visible':'hidden'}" @click="clearCompleted">Clear completed</span>
        </div>
      </div>
    </div>
    <footer class="center">
      <p>made by bao shi long</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {mapGetters, mapMutations, mapState} from "vuex";
import {types} from "@/store";

@Options({
  computed:{
    ...mapState({
      list: "list",
      doneFilter: "doneFilter",
    }),
    ...mapGetters({
      todoLeft:"todoLeft",
      filterList: "filterList"
    })
  },
  methods:{
    addNewTodo : function (){
      let txt = this.inputTodo
      this.inputTodo = ""
      this.$store.commit(types.ADD_NEW_TODO,txt)
    },
    ...mapMutations({
      setFilter: types.SET_FILTER,
      clearCompleted : types.CLEAR_COMPLETE_TODOS,
      switchAllTodo : types.SWITCH_ALL_TODOS,
      switchTodo: types.SWITCH_TODO,
      removeTodo: types.REMOVE_TODO
    })
  }
})
export default class App extends Vue {
  inputTodo = ""
}
</script>

<style>
*{
  user-select:none;
}
body {
  margin: 0;
  padding: 0;
}
#app{
  min-height: 100vh;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
}
header{
  height:400px;
}
footer{
  height:300px;
}
.center{
  display:flex;
  justify-content: center;
  align-items: center;
}
.container{
  flex-grow: 1;
}
.title{
  font-size: 60px;
}
.item {
  background:white;
  width:500px;
  height:40px;
  display:flex;
  padding:10px;
  border-bottom:1px solid rgba(14, 14, 14, 0.21);
  align-items: center;
}
.item .opt{
  width:40px;
  height:40px;
}
::placeholder{
  color: rgba(255, 54, 54, 0.15);
  font-style: italic;
}
.item .text{
  flex-grow:1;
  border:none;
  font-size: 30px;
}
.deleted{
  color:#aaaaaa;
  text-decoration-line: line-through;
}
.item .text:focus{
  outline:none;
}
.filter{
  flex-grow: 1;
}
.filter span{
  margin:0 10px;
  cursor: pointer;
}
.selected{
  border-radius: 3px;
  border: 1px solid #f84f72;
}
.cursorPointer{
  cursor: pointer;
}
</style>
