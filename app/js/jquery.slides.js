
'use strict';

$( function() {

    $( function() {

        $.each( $( '.advantages' ), function() {
            new Slides ( $( this ) );
        } );

    } );

    var Slides = function ( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _window = $( window );

        //private methods
        var _addEvents = function () {
                _window.on( {
                    scroll: function () {
                        _checkScroll();
                    }
                } );
            },
            _checkScroll = function(){

                var windowScroll =  $(window).scrollTop();

                if (_obj.offset().top - windowScroll < _window.height() - 300 ){
                    _obj.addClass( 'animation' );
                }

            },
            _init = function () {
                _obj[ 0 ].slides = _self;
                _addEvents();
                _checkScroll();
            };

        //public properties

        //public methods

        _init();
    };

} );
