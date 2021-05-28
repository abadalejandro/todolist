export interface ITodo {
    id:number,
    desc:string,
    done:boolean
  }


export interface IAction {
  type:string,
  payload:any
} 