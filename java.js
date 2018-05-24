    const fizzBuzz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,31];
    //make array loop

    for (i = 0; i < fizzBuzz.length; i++)
    { 
         if (i%5===0 && i%3===0) {
        console.log("fizzbuzz");
        }
        else if (i%3===0){
            console.log("fizz");
        }
        else if (i%5===0){
            console.log("buzz");
        }
        else
        {
            console.log(i);
        }

    }


     
//set up if/else statement seeing if # is divisible by 3 or 5 and post to console fizz for /3 ,buzz for 5 fizzbuzz for both/ and just post number if neither// 
