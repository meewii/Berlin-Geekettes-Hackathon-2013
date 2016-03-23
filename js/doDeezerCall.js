/**
 * Created with JetBrains WebStorm.
 * User: User
 * Date: 03.03.13
 * Time: 10:28
 * To change this template use File | Settings | File Templates.
 */
function doDeezerCall(artist, song)
{
    var container = $('#_results');

    container.append("Artist: " + artist);
    container.append(" - Song: " + song);
    container.append("<br>");
}