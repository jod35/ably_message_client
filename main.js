const client = new Ably.Realtime(
  "Kcalxw.tn6QTw:YBblwRIdBgL9VXgn7KYTg8RQGNEfT3wzsqzALSOXjZU"
);
const messagesContainer = document.querySelector(".messages");
const clearButton = document.querySelector("#clear-btn");

const clearMessages = () => {
  messagesContainer.innerHTML = "";

  console.log("yes")
};

clearButton.addEventListener("click",()=>{
  clearMessages()
});

// create json tree object

// render tree into dom element

client.connection.on("connect", () => {
  console.log("Connected to Ably");
});

var channel = client.channels.get("staking");

console.log(channel);

channel.subscribe("account_update", (message) => {
  const tree = jsonview.create(message.data);
  const html = `<div class='tree-${message.timestamp}' style="margin-bottom:30px; background-color:lightgray;padding:10px;"></div>`;
  messagesContainer.innerHTML += html;
  jsonview.render(tree, document.querySelector(`.tree-${message.timestamp}`));
  jsonview.expand(tree);
});
