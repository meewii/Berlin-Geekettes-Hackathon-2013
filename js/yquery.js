/**
 * Created with JetBrains WebStorm.
 * User: User
 * Date: 02.03.13
 * Time: 17:08
 * To change this template use File | Settings | File Templates.
 */
function doXmlSearchLyricText(url){

    var container = $('#_results');

    //if(url.match('^http')){

        $.getJSON("http://query.yahooapis.com/v1/public/yql?"+
            "q=select%20*%20from%20xml%20where%20url%3D%22"+
            encodeURIComponent(url)+
            "%22&format=xml&callback=?",
            function(data){
                if(data.results[0]){
                    lresults = data.results[0];
                } else {
                   //var errormsg = '<p>Error: could not load doXmlSearchLyricText.</p>';
                    //console.log(errormsg);
                }

            }
        ).success( function(){ xmlSearchLyricText(lresults); });

    //} else {
    //    $('#target').load(url);
    //}
}

function doXmlGetLyric(url){

        //if(url.match('^http')){
            $.getJSON("http://query.yahooapis.com/v1/public/yql?"+
                "q=select%20*%20from%20xml%20where%20url%3D%22"+
                encodeURIComponent(url)+
                "%22&format=xml&callback=?",
                function(data){
                    if(data.results[0]){
                        lresults2 = data.results[0];
                    } else {
                      //var errormsg = '<p>Error: could not load doXmlGetLyric.</p>';
                      //console.log(errormsg);
                    }

                }
            ).success( function(){ xmlGetLyric(lresults2); });

        /*} else {
            $('#target').load(url);
        }*/

}
/*
function doDeezerCall(url){

    var container = $('#_results');


    $.getJSON("http://query.yahooapis.com/v1/public/yql?"+
        "q=select%20*%20from%20xml%20where%20url%3D%22"+
        encodeURIComponent(url)+
        "%22&format=xml&callback=?",
        function(rs){
            if(rs.data[0]){
                lresults3 = rs.data[0];

            } else {
                //var errormsg = '<p>Error: could not load doXmlGetLyric.</p>';
                //console.log(errormsg);
            }

        }
        //).success( function(){ console.log('yay' + lresults) });
    ).success( function(){ container.html("success") });


}

*/