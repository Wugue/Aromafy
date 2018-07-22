//@program
let scent = "none";
let intensity2 = "0%";
let duration = "0";
let color = "#86BD3E";

        application.discover("app.project.kinoma.marvell.com");
        trace(deviceURL + "\n");
        trace("discovered device\n");

Handler.bind("/updateScent", Behavior({
		handler.invoke(new Message(deviceURL + "getScent"), Message.TEXT);
	onComplete: function(handler, message, text){
        currentScent.string = text;
Handler.bind("/updateIntensity", Behavior({
		handler.invoke(new Message(deviceURL + "getIntensity"), Message.TEXT);
	onComplete: function(handler, message, text){
        intensity.string = intensity2;
Handler.bind("/updateDuration", Behavior({
		handler.invoke(new Message(deviceURL + "getDuration"), Message.TEXT);
	onComplete: function(handler, message, text){
        time.string = text;
Handler.bind("/updateColor", Behavior({
		handler.invoke(new Message(deviceURL + "getColor"), Message.TEXT);
	onComplete: function(handler, message, text){
        MainContainer.skin = new Skin({fill: color});


