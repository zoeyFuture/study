var UN_SUBSCRIBE_SYMBOL = Symbol('UN_SUBSCRIBE_SYMBOL');
var Message = /** @class */ (function () {
    function Message(message) {
        this.message = message;
    }
    Message.prototype.getMessage = function () {
        return this.message + " from publication";
    };
    return Message;
}());
var User = /** @class */ (function () {
    function User(element) {
        this.element = element;
    }
    User.prototype.onMessage = function (message) {
        return (this.element.innerHTML += "<li> you have a new message - " + message.getMessage());
    };
    return User;
}());
var MailingList = /** @class */ (function () {
    function MailingList() {
        this.observers = [];
        this.id = 0;
    }
    MailingList.prototype.notify = function (message) {
        this.observers.forEach(function (observer) {
            observer.onMessage(message);
        });
    };
    MailingList.prototype.subscribe = function (observer) {
        observer[UN_SUBSCRIBE_SYMBOL] = this.observers.push(observer);
    };
    MailingList.prototype.unsubscribe = function (observer) {
        if (observer[UN_SUBSCRIBE_SYMBOL]) {
            this.observers.splice(observer[UN_SUBSCRIBE_SYMBOL], 1);
        }
        else {
            this.observers = this.observers.filter(function (subscriber) { return subscriber === observer; });
        }
    };
    MailingList.prototype.sendMessage = function (message) {
        this.notify(message);
    };
    return MailingList;
}());
/******测试*******/
var messageInput = document.querySelector('.message-input');
var user1 = document.querySelector('.user1-messages');
var user2 = document.querySelector('.user2-messages');
var u1 = new User(user1);
var u2 = new User(user2);
var subscribe1 = document.querySelector('.user1-subscribe');
var subscribe2 = document.querySelector('.user2-subscribe');
var sendBtn = document.querySelector('.send-btn');
var mailingList = new MailingList();
mailingList.subscribe(u1);
mailingList.subscribe(u2);
subscribe1.addEventListener('click', function () {
    mailingList.subscribe(u1);
});
subscribe2.addEventListener('click', function () {
    mailingList.subscribe(u2);
});
sendBtn.addEventListener("click", function () {
    mailingList.sendMessage(new Message(messageInput.value));
});
