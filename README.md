# hnbot

hnbot is an AI chatbot built for Node.js. hnbot's AI engine and brain markup language are based on [RiveScript](http://www.rivescript.com/) and served for web browser using [Socket.IO](https://socket.io/). Web interface of hnbot is built using [Bootstrap](https://getbootstrap.com/), [jQueryTerminal](https://terminal.jcubic.pl/) and [jquery-mousewheel](https://github.com/jquery/jquery-mousewheel).

## Installing / Getting started

```shell
git clone https://github.com/heiswayi/hnbot.git
cd hnbot
npm install
npm start
```

Once everything's okay, open your web browser and visit http://localhost:3000 to start chatting with the bot.

### Prerequisites

If you start fresh, you may need to install [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/).

### Creating your own bot brain

hnbot's brain is using RiveScript markup language. You can design your own AI chatbot based on [RiveScript](http://www.rivescript.com/). All you need to is to create your own `.rive` file and put it into `brain` directory. If you need more examples, you can take a look on the provided `.rive` files reside in the `brain` directory.

## Licensing

[MIT](LICENSE.md)