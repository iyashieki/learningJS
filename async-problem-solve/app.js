//!FIX
const users =[
    {
        userId : 5,
        post : "Nihal Post 1"
    },
    {
        userId : 5,
        post : "Nihal Post 2"
    },
    {
        userId : 5,
        post : "Nihal Post 3"
    },
    {
        userId : 6,
        post : "Salih Post 1"
    },
    {
        userId : 7,
        post : "Merve Post 1"
    },
]

//user id
//post by user id
// async to sync

function getUserId(callback){   //takes a second to call
    setTimeout(() => {
        //server response
        //return 5;
        let userId = 5;
        callback(userId);
    },1000);
}

function getPostByUserId(userId){       //takes about half a second to call
    //console.log(userId); //console : undefined
    //rest api request
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId===userId){
                console.log(user.post);
                
            }
            
        })
    }, 500);
}

getUserId(getPostByUserId);