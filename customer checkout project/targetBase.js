class TargetBase{
    discountRate = 5;

    constructor(name, surname, ownCard, items){
        this.name = name;
        this.surname = surname;
        this.ownCard = ownCard;
        this.items = items;
    }

        calculate(){

            let payment = 0;
            if(this.checkItems(this.items)){
                    //shopping cart has at least  one item
                    if(this.ownCard){
                            //owns card
                             this.items.forEach((item)=>{
                            payment += (item.price*(100-this.discountRate)/100);
                             })
                    } else {
                            //doesnt own a card
                            this.items.forEach((item)=>{
                                payment += item.price;
                            })
                    }
                   
                
                }else{
                alert("In order to pay you have to enter at least one item!"); 
                }
            return payment;
    }

    checkItems(items){
        if(items!=null && items.length>0 ){
            return true;
        }
        return false;
    }
        getName(){
            return this.name;
        }

        getSurname(){
            return this.surname;
        }
}

