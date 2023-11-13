const client = new Ably.Realtime(
  "your-key"
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

var channel = client.channels.get("your-channe-name");

console.log(channel);

channel.subscribe("the event you want to listen to", (message) => {
  const tree = jsonview.create(message.data);
  const html = `<div class='tree-${message.timestamp}' style="margin-bottom:30px; background-color:lightgray;padding:10px;"></div>`;
  messagesContainer.innerHTML += html;
  jsonview.render(tree, document.querySelector(`.tree-${message.timestamp}`));
  jsonview.expand(tree);
});
