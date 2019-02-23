$(document).on('ready', function() {
  /* Add 1-3 repertoire fields depending on student's school grade */
  $('#grade input[type=radio]').on('change', function(event) {
   //should display one repertoire div by default otherwise it looks weird..., then add one or two if 4th grade or above!!
    $('div#repertoire').empty();

    var numPiecesObject = {
             '1st-5th': 1,
             '6th-8th': 2,
             '9th-12th': 3
    };

    var grade = event.target.value;
    var numPieces = numPiecesObject[grade];
    var i = 1; 

    while (i <= numPieces) {
        var $repertoireDiv = '<div class="repertoire-item">' +
                             '<div><label>Title</label><input type="text" name="Title' + i + '" /></div>' +
                             '<div><label>Composer</label><input type="text" name="Composer' + i + '" /></div>' +
                             '<div><label>Time (in minutes)</label><input type="number" min=1 name="Performance Time' + i + '" /></div>' +
                             '</div>';

       $('div#repertoire').append($repertoireDiv);

       if (i === 1) {
         $('.repertoire-item input').prop('required', true);
       } 

       i++;
    }

  /* Change the payment page user is directed to based on the student grade selection. */
  });

  /* Add text field for entering instrument name if the division selected is "Instrumental". */
    var $instrumentDiv = '<div id="instrument">' +    
                            '<label>Instrument</label>' +
                            '<input style="margin-left: 10px;" type="text" name="Instrument" required/>' +
                         '</div>';

    $('#division input').on('click', function(event) {
       if ($('#instrument')) {
          $('#instrument').remove(); 
       }

       if (event.target.value === 'Instrumental') {
         $('#division').append($instrumentDiv);
       }
    });
});
