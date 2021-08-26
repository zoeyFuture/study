
const UN_SUBSCRIBE_SYMBOL = Symbol('UN_SUBSCRIBE_SYMBOL')

interface NotificationObserver {
  onMessage(message: Message): string;
}

interface Notify {
  sendMessage(message: Message): any
}

class Message {
  message: string

  constructor(message: string) {
    this.message = message
  }

  getMessage(): string {
    return `${this.message} from publication`
  }
}

class User implements NotificationObserver {
  element: Element

  constructor(element: Element) {
    this.element = element
  }

  onMessage(message: Message): string {
    return (this.element.innerHTML += `<li> you have a new message - ${message.getMessage()}`)
  }
}

class MailingList implements Notify {
  protected observers: User[] = []
  protected id: number = 0

  notify (message: Message) {
    this.observers.forEach((observer) => {
      observer.onMessage(message)
    })
  }

  subscribe (observer: User) {
    observer[UN_SUBSCRIBE_SYMBOL] = this.observers.push(observer)
  }

  unsubscribe (observer: User) {
    if (observer[UN_SUBSCRIBE_SYMBOL]) {
      this.observers.splice(observer[UN_SUBSCRIBE_SYMBOL], 1)
    } else {
      this.observers = this.observers.filter((subscriber) => subscriber === observer)
    }
  }

  sendMessage(message: Message) {
    this.notify(message)
  }
}

/******测试*******/

const messageInput: HTMLInputElement = document.querySelector('.message-input')

const user1: Element = document.querySelector('.user1-messages')
const user2: Element = document.querySelector('.user2-messages')

const u1 = new User(user1)
const u2 = new User(user2)

const subscribe1: Element = document.querySelector('.user1-subscribe')
const subscribe2: Element = document.querySelector('.user2-subscribe')

const sendBtn: Element = document.querySelector('.send-btn')

const mailingList = new MailingList()

mailingList.subscribe(u1)
mailingList.subscribe(u2)

subscribe1.addEventListener('click', () => {
  mailingList.subscribe(u1)
})

subscribe2.addEventListener('click', () => {
  mailingList.subscribe(u2)
})

sendBtn.addEventListener("click", () => {
  mailingList.sendMessage(new Message(messageInput.value))
});

