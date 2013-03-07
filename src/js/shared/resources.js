define( [ "jquery", "postal", "amplify", "data/amplifyResources" ], function( $, postal, amplify ) {
    var ResourceManager = function(){
        this.channel = postal.channel( "data" );
        this._setupListeners();
    };

    _.extend(ResourceManager.prototype, {
        _setupListeners: function() {
            this.channel.subscribe( "#.fetch", this.request ).withContext( this );
        },
        request: function( data, env ) {
            var self = this;
            
            amplify.request({
                resourceId: env.resourceId,
                data: data,
                success: function( response ) {
                    self.success.call( self, env.successReplyTo, response );
                },
                error: function( xhr, status ) {
                    self.error.call( self, env.errorReplyTo, xhr, status );
                }
            });
        },
        success: function( replyTo, response ) {
            this.channel.publish( replyTo || "*", response );
        },
        error: function( replyTo, xhr, status ) {
            this.channel.publish( replyTo, {
                xhr: xhr,
                status: status
            });
        }
    });

    return ResourceManager;
});