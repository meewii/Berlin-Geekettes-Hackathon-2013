function xmlGetLyric(xml)
{
	//var xml = '<?xml version=\"1.0\" encoding=\"utf-8\"?><GetLyricResult xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns=\"http://api.chartlyrics.com/\"><TrackId>0</TrackId><LyricChecksum>2a3ea713422cbc97470b0c38c6e5a552</LyricChecksum><LyricId>1710</LyricId><LyricSong>Bad</LyricSong><LyricArtist>Michael Jackson</LyricArtist><LyricUrl>http://www.chartlyrics.com/28h-8gWvNk-Rbj1X-R7PXg/Bad.aspx</LyricUrl><LyricCovertArtUrl>http://ec1.images-amazon.com/images/P/B000CNET66.02.MZZZZZZZ.jpg</LyricCovertArtUrl><LyricRank>9</LyricRank><LyricCorrectUrl>http://www.chartlyrics.com/app/correct.aspx?lid=MQA3ADEAMAA=</LyricCorrectUrl><Lyric>Your butt is mine... gonna tell you right Just show your face... throughout daylight I\'m telling you... on how I feel Gonna hurt your mind... gonna shoot to kill Come on, come on, lay it on me All right</Lyric></GetLyricResult>';


    var xmlDoc = $.parseXML(xml),
       // $xmlurl = $( xmlDoc ),
        //$LyricId = $( xmlDoc ).find( "LyricId" );
        $GetLyricResult = $( xmlDoc ).find( "Lyric" );

    /* append "RSS Title" to #someElement */
	var lyrics = $GetLyricResult.text();
	var checklyrics = lyrics.indexOf(textareaval);
	
	if(checklyrics != -1) {

        var artist = $( xmlDoc ).find( "LyricArtist" ).text();
        var song = $( xmlDoc ).find( "LyricSong" ).text();
		//LyricNames = artist + " " + song;

        var deezerUrl = "http://api.deezer.com/2.0/search?q=" + artist;
        doDeezerCall(artist, song);


	}
}

