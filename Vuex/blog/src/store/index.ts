import { createStore } from 'vuex'

class Todo{
  public txt: string;
  private _done: boolean;

  constructor(txt:string,done = false) {
    this.txt = txt
    this._done = done
  }
  public get done():boolean {
    return this._done
  }
  public set done(value:boolean) {
    this._done = value
  }
  switch(){
    this._done = ! this._done
  }
}

export let types ={
  SWITCH_ALL_TODOS:"switchAllTodos",
  CLEAR_COMPLETE_TODOS:"clearCompleteTodos",
  REMOVE_TODO:"removedTodo",
  ADD_NEW_TODO:"addNewTodo",
  SET_FILTER:"setFilter",
  SWITCH_TODO:"switchTodo",
}

export default createStore({
  state: {
    list:new Array<Todo>(),
    doneFilter:"all"
  },
  getters:{
    filterList(state):Array<Todo>{
      switch (state.doneFilter){
        case "all":
          return state.list
        case "active":
          return state.list.filter(i=>!i.done)
        case "completed":
          return state.list.filter(i=>i.done)
        default:
          return state.list
      }
    },
    todoLeft(state):number{
     return  state.list.filter(i=>!i.done).length
    }
  },
  mutations: {
    [types.SWITCH_ALL_TODOS](state){
      let willDone = 0 != state.list.filter(i=>!i.done).length;
      state.list = state.list.map(i=>{
        i.done = willDone;
        return i
      })
    },
    [types.CLEAR_COMPLETE_TODOS](state){
      state.list = state.list.filter(i=>!i.done)
    },
    [types.REMOVE_TODO](state,index){
      state.list.splice(index,1);
    },
    [types.ADD_NEW_TODO](state, txt){

      if("" == txt) return

      let newTodo = new Todo(txt)

      state.list.push(newTodo)
    },
    [types.SET_FILTER](state, filter){
      state.doneFilter = filter
    },
    [types.SWITCH_TODO](state,index){
      state.list[index].switch()
    }
  },
  actions: {
  },
  modules: {
  }
})
