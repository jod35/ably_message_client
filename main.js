

const client = new Ably.Realtime(
    'your ably api key'
);
const messagesContainer = document.querySelector(".messages");
const clearButton = document.querySelector("button");

const clearMessages = () => {
  messagesContainer.innerHTML = "";
};

clearButton.addEventListener("click", clearMessages());

// create json tree object

// render tree into dom element

client.connection.on("connect", () => {
  console.log("Connected to Ably");
});

var channel = client.channels.get("channel_name");

console.log(channel);

channel.subscribe("event_name", (message) => {
  const tree = jsonview.create(message.data);
  const html = `<div class='tree-${message.timestamp}' style="margin-bottom:30px; background-color:lightgray;padding:10px;"></div>`;
  messagesContainer.innerHTML += html;
  jsonview.render(tree, document.querySelector(`.tree-${message.timestamp}`));
  jsonview.expand(tree);
});
