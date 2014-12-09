game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
        //title screen
	onResetEvent: function() {	
           me.game.world.addChild( new me.Sprite (0, 0, me.loader.getImage("title-screen")), 3);
           me.input.bindKey(me.input.KEY.ENTER, "START");
           
           this._super(me.Renderable, 'init', [510, 30,
           me.game.viewport.width, me.game.viewport.height]);4 
           
           this.handler = me.event.subscribe ( me.event.KEYDOWN, function (action, keyCode, edge){
            if(action === "start"){
                me.state.change(me.state.PLAY);
            }   
           });
                   
		; // TODO
	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		; // TODO
	}
});
