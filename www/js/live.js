/**
 * Created by HP ELITEBOOK on 1/6/2017.
 */


function createMatch (team1Name, team2Name) {
    team1Name = document.getElementById('team1').value;
    team2Name = document.getElementById('team2').value;

    firebase.database().ref('matches/').push(
        {
            //in the meantime I just want to store these three fields for the agent
            "Home": team1Name,
            "Home Score": 0,
            "Away": team2Name,
            "Away Score": 0
        }
    );
    var $toastContent = $('<span>Team added</span>');
    Materialize.toast($toastContent, 5000);


//okay twas really no problem posting data to the freaking DB
// now I gotta get back my data and print it on the dashboard----
}

firebase.database().ref('matches/').limitToLast(10).on('child_added', function(snapshot) {

    var match = snapshot.val();
    console.log(match);
    console.log(match.key);

    this.matchList = function( team1name, team2name){


        var myKey = snapshot.key;
        //var ordernum = mykey.substring(1, 4);
        return'<li>'+
            '<div class="collapsible-header"><span class="team1">'+team1name+'</span><span class="team2">'+team2name+'</span></div>'+
            '<div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>'+
            '</li>';

    };//create list

    $("#matches").append(this.matchList(match.Home ,match.Away ));
//beauty

});

