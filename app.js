const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();
const dbPath = path.join(__dirname, "cricketTeam.db");

let db = null;
const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3001/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};
initializeDBAndServer();

//API 1 GET Method 
app.get("/players/", async (request,response) => {
    const getListOfPlayerTeam = 
    SELECT 
    * 
    FROM 
    cricket_team
    ORDER BY 
    player_id;
    
    Const teamDetails = await db.all(getListOfPlayerTeam);
    response.send(teamDetails);


}); 