$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "red"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall
     



    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms

    // -- Perkings, I changed some of your code.
    // --    You had several calls to createPlatform where NO COLOR was specified.
    // --    Also, you had several calls to the SAME location with "red" & then "hotpink"

    createPlatform(500, 0, 20, 290, "white");
    
    createPlatform(100, 650, 100, 50, "white");

    createPlatform(200, 550, 100, 50, "black");

    createPlatform(300, 650, 100, 50, "darkgreen");

    createPlatform(110, 450, 50, 50, "white");

     createPlatform(500, 550, 50, 50, "white");

     createPlatform(700, 420, 50, 50, "white");

     createPlatform(900, 560, 50, 50, "black");

     createPlatform(1100, 650, 100, 50, "yellow");

    createCollectable("steve", 500, 500);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("grace", 900, 500);
    createCollectable("max", 1150, 600);

    createCannon("top", 500, 800);
    createCannon("right", 780, 300);
    createCannon("top", 870, 700);
    createCannon("right", 200, 300);


     












    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
