class OrderedMap{
    constructor(){
        this.map={}
        this.order=[]
    }
    set(key,value){
        this.map[key]=value
        this.order.push({key,value})
    }
    get(key){
        return this.map[key]
    }
    push(key,value){
        this.set(key,value)
    }
    valueAt(index){
        if(index>=this.order.length){
            return null
        }
        return this.order[index]
    }
    keys(){
        return this.order.map(item=>item.key)
    }
    values(){
        return this.order.map(item=>item.value)
    }
}
export {OrderedMap}