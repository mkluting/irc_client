
            var socket = io();
            $('document').ready( function() {
                $('.send').on('click', function(e) {
                    e.preventDefault();
                    if($('#m').val() == '') {
                        return false;
                    }
                    socket.emit('chat message', $('#m').val());
                    $('#m').val('');
                    return false;
                });
                socket.on('chat message', function(msg) {
                    var date = new Date(),
                    datestring = date.getHours() +':'+date.getMinutes()+':'+date.getSeconds();
                    $('#messages').append($('<li>').html('<b>'+datestring+': </b>'+msg));
                });
            });
