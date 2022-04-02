
function buildASentenceFromBiggerSentence(smallSentence, biggerSentence){
       smallSentence = smallSentence.toLowerCase();
	   biggerSentence = biggerSentence.toLowerCase();
	   
	   smallSentence = smallSentence.replace(/[^A-Za-z0-9]/g,' ');
	   biggerSentence = biggerSentence.replace(/[^A-Za-z0-9]/g,' ');
	   let smallArray = smallSentence.split(" ");
	   let bigArray = biggerSentence.split(" ");
	   let wordsMap = new Map();
	   
	   let result = true
	 
	   bigArray.forEach(element => {
	       wordsMap.set(element, wordsMap.get(element) ? wordsMap.get(element) + 1 : 1 )
	   })
	   
	   smallArray.forEach(element => {
	      const value = wordsMap.get(element)
	      if(value && value !== 0){
	          wordsMap.set(element, value - 1)
	      }else{
	          result = false 
	          return
	      }
	   })
	   
	   if(result)
	    console.log('The sentence was builded successfully')
	   else 
	    console.log("Is not possible to build the sentence")
}


buildASentenceFromBiggerSentence("i Beautiful a girl when i i#", "When i was a child i used to play with a girl. We had beautiful toys.")
