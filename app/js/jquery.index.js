
'use strict';

$( function() {

    $( function() {

        $.each( $( '.site__header-scroll-btn' ), function() {

            new ScrollToContent ( $( this ) );

        } );

    } );

    var ScrollToContent = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj;

        //private methods
        var _onEvents = function() {

                _obj.on( {
                    click: function() {

                        var parent = $(this).parents(".site__header"),
                            nextBlock = parent.next();

                        $('html, body').stop().animate({
                            scrollTop: nextBlock.offset().top
                        }, 1000);

                        return false;

                    }
                } );

            },
            _init = function() {
                _obj[ 0 ].obj = _self;
                _onEvents();
            };

        _init();
    };

} );
