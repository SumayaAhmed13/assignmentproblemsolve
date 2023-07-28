// 1) Topic: Online Store Discount Calculator (If-Else Statement) ----Problem Solve
function discountAmount(purchaseamount){
    let amount=parseInt(purchaseamount);
    let discount;
    let discountamount;
    let totalamount;

    if(amount < 50){
        discount=0;
        totalamount   = amount - (amount* discount / 100);
        discountamount = amount -  totalamount;

        console.log(`Discounted Amount $${discountamount},Total Amount $${totalamount} ,Discount Amount $${discount}`);

    }
    else if(amount >= 50 && amount<100){

        discount=5;
        totalamount   = amount - (amount* discount / 100);
        discountamount = amount -  totalamount;

        console.log(`Discounted Amount $${discountamount},Total Amount $${totalamount} ,Discount Amount $${discount}`);
    }
    else if(amount >= 100 && amount <200){

        discount=10;
        totalamount   = amount - (amount* discount / 100);
        discountamount = amount -  totalamount;

        console.log(`Discounted Amount $${discountamount},Total Amount $${totalamount} ,Discount Amount $${discount}`);
    }
    else if(amount >= 200 ){

        discount=15;
        totalamount   = amount - (amount* discount / 100);
        discountamount = amount -  totalamount;

        console.log(`Discounted Amount $${discountamount},Total Amount $${totalamount} ,Discount Amount $${discount}`);
    }

}
discountAmount(105);

//...................................................................//


//2) Topic: Filter Even Numbers ----Problem Solve

var array= [12, 34, 45, 23, 6, 78, 54, 90];

var result=array.filter((n)=>n%2 == 0);

console.log(result);

//...................................................................//
// 3) Topic: Multiplication Table Generator----Problem Solve
 function numberGenerator(number){


    for(let i = 1; i <= 10; i++) {
        const result = i * number;
        console.log(`${number} * ${i} = ${result}`);
    }

 }
numberGenerator(5);


//...................................................................//

//4) Topic: Grade Calculator (JavaScript Switch Case)----Problem Solve


function studentGrade(score){
 var gscore;

switch(true){
    case (score >= 90):
        gscore = 'A';
        break;
    case (score >= 80 && score <= 89):
         gscore = 'B';
         break;
    case (score >= 70 && score <= 79):
        gscore = 'C';
        break;
    case (score >= 60 && score <= 69):
        gscore = 'D';
        break;
    case (score <= 60):
            gscore = 'F';
        break;
     default:
        return 'INVALID SCORE';
    }
    return gscore;

}
console.log(studentGrade(95)); // A
console.log(studentGrade(80)); // B
console.log(studentGrade(72)); // C
console.log(studentGrade(63)); // D
console.log(studentGrade(54)); // F