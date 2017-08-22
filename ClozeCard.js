function ClozeCard(text, cloze){
	if(this instanceof ClozeCard) {
    	if(text.includes(cloze)){
			this.fullText = text;
			this.cloze = cloze;
			//array of what's left after deleting/splitting..
			var deletedArray = text.split(cloze);
			var partial = "";
			//build partial string
			for(var i = 0; i < deletedArray.length; i++){
				partial +=deletedArray[i];
				if(i < deletedArray.length-1){
					partial+= "...";
				}
			}
			this.partial = partial;
		}
		else
			console.log("Error: '"+cloze +"' not found in '" +text + "'");
  	} 
  	else {
    	return new ClozeCard(text, cloze);
  	}
};
module.exports = ClozeCard;





