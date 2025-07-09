//*ASYNCHRONOUS PROBLEMS

//http requests

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

function getUserId(){   //takes a second to call
    setTimeout(() => {
        //server response
        return 5;
    },1000);
}

function getPostByUserId(userId){       //takes about half a second to call
    console.log(userId); //console : undefined
    //rest api request
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId===userId){
                console.log(user.post);
            }
        })
    }, 500);
}

let userId = getUserId();       //!since both userId and getPostByUserId works async
getPostByUserId(userId);        //!function getPostByUserId runs before userId
                                //!and when getPostByUserId runs userId is undefined