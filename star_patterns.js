//1. Square star pattern :-

// let input = 5
// for(let num= 0 ; num<input ; num++){
//     let starCollection =""
//     for(let inNum =0 ; inNum<input; inNum++){
//          starCollection += "*"
//     }
//     starCollection +="\n"
        
//     console.log(starCollection)
// }



//2. Hollow square pattern:-
 
// let input = 10
// for(let i= 1; i<=10 ; i++ ){
//     let starCollection =""
//    for(let j=1 ; j<=input ; j++){
//     if(i==1 || i== input){
//         starCollection += "*"
//         }
//     else{
//         if(j==1 || j==n){
//           starCollection +="*"
//         }
//         else{
//             starCollection +=" "
//         }

//         }
//     }
//     starCollection +="\n"
//     console.log(starCollection)
    
//    }



//3. Right angle triangle:-

// let input = 8
// for(let i=1 ; i<input ;i++){
//     let starCollection =""
//     for(let j=1 ; j<input-i ;j++){
//         starCollection +=" "
//     }
//     for(let k=1 ; k<=i ; k++){
//         starCollection +="*"
//     }
   
//     console.log(starCollection)
// }




//4.  left triangle:-

// let input =10 
// for(let outLoop=1 ; outLoop<=input ; outLoop++){
//     let starCollection=""
//     for(let inLoop=1 ; inLoop<= outLoop ; inLoop++){
//          starCollection +="*"
//     }
//     console.log(starCollection)
// }


//5. Downward triangle pattern:-

// let input= 10 
//  for(let outLoop =1 ; outLoop<=input; outLoop++){
//     let starCollection =""
// for(inloop =1 ; inloop<=input-outLoop; inloop++){
//      starCollection +="*"
// }
// console.log(starCollection)
//  }



//6. Hollow triangle pattern:-
// let input = 8 
// for(let i=1 ; i<=input ; i++){
//     starCollection =""
//     for(let j=1; j<=i ;j++){
//        if(i==1 || i==2 || i==input){
//         starCollection +="*"
//        }
//        else{
//         if(j==1 || j==i){
//           starCollection +="*"
//         }
//         else{
//             starCollection +=" "
//         }
//         }
//        }
//       console.log(starCollection)
//     }

//7. Pyramid Pattern :-

// let input = 9

// for(let i=1 ; i<=9 ;i+=2){
// let starCollection =""
// for(let j = input ; j> i ; j-=2){
//     starCollection +=" "
// }

// for(let k=1 ; k<=i ; k++){
// starCollection +="*"
// }
// console.log(starCollection)

    
// }

let func =()=>{
    let a =[]
    setTimeout((function(){
         a= ["asif","asma"]
         
    }),1000)
    return a
}
func()