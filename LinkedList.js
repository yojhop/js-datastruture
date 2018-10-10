class LinkedList{
    constructor(){
        this.header=null
        this.tailer=null
    }
    addToTailer(item){
        item={item}
        if(this.tailer){
            this.tailer.next=item
            item.prev=this.tailer
            item.next=null
            this.tailer=item
        }
        else{
            item.prev=null
            item.next=null
            this.tailer=item
            this.header=item
        }
        return item
    }
    // insert item after offItem
    insertAfter(prevItem,item){
        item={item}
        let next=prevItem.next
        if(next){
            next.prev=item
            item.next=next
        }
        else{
            item.next=null
            this.tailer=item
        }
        item.prev=prevItem
        prevItem.next=item
        return item
    }
    insertBefore(nextItem,item){
        item={item}
        let prev=nextItem.prev
        if(prev){
            prev.next=item
            item.prev=prev
        }
        else{
            item.prev=null
            this.header=item
        }
        item.next=nextItem
        nextItem.prev=item
        return item
    }
    addToHeader(item){
        item={item}
        if(this.header){
            this.header.prev=item
            item.next=this.header.next
            item.prev=null
            this.header=item
        }
        else{
            item.prev=null
            item.next=null
            this.tailer=item
            this.header=item
        }
        return item
    }
    forEach(func){
        let cur=this.header
        while(cur){
            func(cur.item)
            cur=cur.next
        }
    }
    map(func){
        let ret=[]
        let cur=this.header
        while(cur){
            ret.push(func(cur.item))
            cur=cur.next
        }
        return ret
    }
    clear(){
        this.forEach(item=>{
            item.prev=null
            item.next=null
        })
        this.header=null
        this.tailer=null
    }
    removeItem(item){
        let prev=item.prev
        let next=item.next
        if(prev) prev.next=next
        if(next) next.prev=prev
        item.prev=null
        item.next=null
    }
    find(data){
        let cur=this.header
        while(cur){
            if(cur.item===data) return cur
            cur=cur.next
        }
        return null
    }
}