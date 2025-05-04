class Mobile {
    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.isOn = true;
        this.draftMessage = '';
        this.inbox = []; //nơi nhận tin nhắn đến
        this.sentMessages = []; //tin nhắn đã gửi
    }

    //kiem tra dien thoai bat tat
    checkStatus() {
        return this.isOn;
    }

    //bat dt
    powerOn() {
        if (!this.isOn) {
            this.isOn = true;
            console.log(`${this.name} is on!`)
        }
    }

    //tat dt
    powerOff() {
        if (this.isOn) {
            this.isOn = false;
            console.log(`${this.name} is off!`)
        }
    }
    //soan tin nhan
    setMessages(message) {
        if(this.isOn) {
            this.draftMessage = message;
        } else {
            console.log(`${this.name} is off, cant set message`)
        }
    }

    //tin nhan da gui
    sendMessagesTo(mobile2) {
        if (this.isOn && this.draftMessage !== '') {
            mobile2.getMessage(this.draftMessage, this.name);
            this.sentMessages.push(`Sent ${this.draftMessage} to ${mobile2.name}`);
            this.draftMessage = ''; //reset draft message after sending
        } else {
            console.log(`${this.name} is off, cant sent message`)
        }
    }

    //nhan tin nhan
    getMessage(message, name) {
        if(this.isOn) {
            this.inbox.push(`from ${name}: ${message}`)
        } else {
            console.log(`${this.name} is off, cant get message`)
        }
    }

    //kiem tra tin nhan trong hop chat
    checkInbox() {
        if(this.isOn) {
            console.log(`Inbox of ${this.name}`);
            this.inbox.forEach((mess, index) => {
               console.log(`${index + 1}. ${mess}`)
            });
        } else {
            console.log(`${this.name} is off, cant check inbox`);
        }
    }

    checkSentMessage() {
        if(this.isOn) {
            console.log(`SentMessage of ${this.name}`);
            this.sentMessages.forEach((mess, index) => {
                console.log(`${index + 1}. ${mess}`)
            });
        } else {
            console.log(`${this.name} is off, cant check sent-message`);
        }
    }

    //Use battery
    useBattery() {
        this.battery--;
        if (this.battery <= 0) {
            this.battery = 0;
            this.powerOff();
            console.log(`${this.name} is out of battery, auto turn off`)
        }
    }

    //Charge battery
    chargeBattery() {
        this.battery = 100;
        console.log(`${this.name} is full`)
    }
}

// Tạo đối tượng Nokia và iPhone
const nokia = new Mobile("Nokia");
const iPhone = new Mobile("iPhone");

// Bật cả hai điện thoại
nokia.powerOn();
iPhone.powerOn();

// Nokia soạn tin nhắn và gửi cho iPhone
nokia.setMessages("Chào iPhone! Bạn khỏe không?");
nokia.sendMessagesTo(iPhone);

// iPhone kiểm tra hộp thư đến
iPhone.checkInbox();