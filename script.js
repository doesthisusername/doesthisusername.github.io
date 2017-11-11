var data;
fetch("data.json").then(function(response) {
   if(response.status != 200) throw response.status;
   data = response.text();
});

console.log(data.leveloftheday);