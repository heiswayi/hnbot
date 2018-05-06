# hnbot

hnbot is an AI chatbot based on [RiveScript](http://www.rivescript.com/) interpreter engine built using [Node.js](https://nodejs.org/en/) and [Socket.IO](https://socket.io/). hnbot's web interface is designed with [Bootstrap](https://getbootstrap.com/), [jQueryTerminal](https://terminal.jcubic.pl/) and [jquery-mousewheel](https://github.com/jquery/jquery-mousewheel).

## Installing / Getting started

```shell
git clone https://github.com/heiswayi/hnbot.git
cd hnbot
npm install
npm start
```

Once everything's okay, open your web browser and visit http://localhost:3000 to start chatting with the bot.

### Prerequisites

If you start fresh, you may need to install [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/) first.

### Creating your own bot brain

hnbot's brain is using RiveScript markup language. You can design your own AI chatbot based on [RiveScript](http://www.rivescript.com/). All you need is to create your own `.rive` file and put it into `brain` directory. For examples, you can take a look any of `.rive` files located in `brain` directory.

## Licensing

[MIT](LICENSE.md)
