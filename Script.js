function onYouTubePlayerReady(playerId) {
    player = document.getElementById("movie_player");
    player.addEventListener("onStateChange", "onytplayerStateChange");
}

function onytplayerStateChange(newState) {
  if(newState == 0)
  {
    player.seekTo(0, true);
  }
};
