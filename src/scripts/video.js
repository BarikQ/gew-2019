var player,
  player1,
  player2,
  player3,
  player4,
  player5,
  player6,
  player7,
  player8,
  player9,
  player10;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("video-placeholder", {
    width: 600,
    height: 400,
    videoId: "m5gmD-ymWJw",
    playerVars: {
      color: "white",
      playlist: "taJ60kskkns,FG0fTKAqZ5g"
    },
    events: {
      onReady: initialize
    }
  });

  player1 = new YT.Player("video-placeholder-1", {
    videoId: "p7MfW5nYFEE",
    playerVars: {
      color: "white",
      playlist: "taJ60kskkns,FG0fTKAqZ5g"
    },
    events: {
      onReady: initialize
    }
  });

  player2 = new YT.Player("video-placeholder-2", {
    videoId: "RvHRPZ3Mc6A",
    playerVars: {
      color: "white",
      playlist: "taJ60kskkns,FG0fTKAqZ5g"
    },
    events: {
      onReady: initialize
    }
  });

  player3 = new YT.Player("video-placeholder-3", {
    videoId: "PrZ4zLLoOs4",
    playerVars: {
      color: "white",
      playlist: "taJ60kskkns,FG0fTKAqZ5g"
    },
    events: {
      onReady: initialize
    }
  });

  player4 = new YT.Player("video-placeholder-4", {
    videoId: "zmWvH14A6Fg",
    playerVars: {
      color: "white",
      playlist: "taJ60kskkns,FG0fTKAqZ5g"
    },
    events: {
      onReady: initialize
    }
  });

  player5 = new YT.Player("video-placeholder-5", {
    videoId: "_H3yEEYOdmw",
    playerVars: {
      color: "white",
      playlist: "taJ60kskkns,FG0fTKAqZ5g"
    },
    events: {
      onReady: initialize
    }
  });

  player6 = new YT.Player("video-placeholder-6", {
    videoId: "R-om4VawO4g",
    playerVars: {
      color: "white",
      playlist: "taJ60kskkns,FG0fTKAqZ5g"
    },
    events: {
      onReady: initialize
    }
  });

  player7 = new YT.Player("video-placeholder-7", {
    videoId: "gtmgIaQ0J2A",
    playerVars: {
      color: "white",
      playlist: "taJ60kskkns,FG0fTKAqZ5g"
    },
    events: {
      onReady: initialize
    }
  });

  player8 = new YT.Player("video-placeholder-8", {
    videoId: "gHH40ydO1BI",
    playerVars: {
      color: "white",
      playlist: "taJ60kskkns,FG0fTKAqZ5g"
    },
    events: {
      onReady: initialize
    }
  });

  player9 = new YT.Player("video-placeholder-9", {
    videoId: "06PI34Wk1KQ",
    playerVars: {
      color: "white",
      playlist: "taJ60kskkns,FG0fTKAqZ5g"
    },
    events: {
      onReady: initialize
    }
  });

  player10 = new YT.Player("video-placeholder-10", {
    videoId: "SovcIZpv2P0",
    playerVars: {
      color: "white",
      playlist: "taJ60kskkns,FG0fTKAqZ5g"
    },
    events: {
      onReady: initialize
    }
  });
}

function initialize() {}

$(".video_svg").click(function() {
  $(".modal-video").fadeToggle("fast");
  player.playVideo();
});
$(".modal-video").bind("click", function(e) {
  e.preventDefault();
  if (
    $(e.target).attr("class") !== "modal-content" ||
    $(e.target).attr("class") === "close"
  ) {
    player.pauseVideo();
    $(".modal-video").fadeOut("fast");
  }
});
