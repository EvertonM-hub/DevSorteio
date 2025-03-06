function generateNumber(){
    

    const enter = Math.ceil (document. querySelector(".enter").value)
    const until = Math.floor(document. querySelector(".until").value)

   const result = Math.floor(Math.random() * (enter - until + 1)) + until;

    alert (result)

      }




