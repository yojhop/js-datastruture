class Stack{
    constructor(){
        this.datas=[]
    }
    push(item){
        this.datas.splice(0,0,item)
    }
    pop(){
        let ret=this.datas.shift()
        return typeof ret==='undefined'?null:ret
    }
    size(){
        return this.datas.length
    }
    bottom(){
        return this.datas.length>0?this.datas[this.datas.length-1]:null
    }
    top(){
        return this.datas.length>0?this.datas[0]:null
    }
}
export {Stack}