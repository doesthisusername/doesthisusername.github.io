updateTimes("FT");

document.getElementById("goal-select").addEventListener("change", function(element, event) {
   updateTimes(this.value);
});

function updateTimes(goal) {
   // delete table if it exists already
   if(document.getElementById("time-table"))
      document.body.removeChild(document.getElementById("time-table"));

   var table = document.createElement("table");
   table.id = "time-table";
   
   goal = goal.toLowerCase();
   var row, cell, goal_board, current_time;

   // header
   row = table.insertRow();
   cell = row.appendChild(document.createElement("th"));
   cell.colSpan = 3;
   cell.appendChild(document.createTextNode("Records for " + goal.toUpperCase()));
   
   // body
   for(var level in data.levels) {
      if(data.levels[level].leaderboard[goal]) {
         goal_board = data.levels[level].leaderboard[goal];

         var best_run = {
            player: "",
            time: ""
         };

         for(var run in goal_board) {
            current_time = parseFloat(goal_board[run]);

            if(!best_run.time || (best_run.time && current_time < best_run.time)) {
               best_run.time = current_time.toFixed(3);
               best_run.player = data.players[run];
            }
         }

         row = table.insertRow();
         
         cell = row.insertCell();
         cell.appendChild(document.createTextNode(data.levels[level].name));
         cell = row.insertCell();
         cell.appendChild(document.createTextNode(best_run.time));
         cell = row.insertCell();
         cell.appendChild(document.createTextNode(best_run.player));
      }
   }

   document.body.appendChild(table);
}