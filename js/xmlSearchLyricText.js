/**
 * Created with JetBrains WebStorm.
 * User: User
 * Date: 02.03.13
 * Time: 18:49
 * To change this template use File | Settings | File Templates.
 */

function xmlSearchLyricText(results)
{
//parse results from SearchLyricText to get an array of LyricId and LyricChecksum

    var xml = results,
        xmlDoc = $.parseXML( xml ),
        $SearchLyricResult = $( xmlDoc ).find( "SearchLyricResult" );

    $SearchLyricResult.each(function(){
        sendid =  $(this).children("LyricId").text();
        sendchecksum = $(this).children("LyricChecksum").text();
        sendurl = "http://api.chartlyrics.com/apiv1.asmx/GetLyric?lyricId=" + sendid + "&lyricCheckSum=" + sendchecksum;

        doXmlGetLyric(sendurl);
    });
}
