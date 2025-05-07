// Lớp Bóng đèn
class LightBulb {
    constructor() {
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
    }

    getStatus() {
        return this.isOn ? "Bóng đèn đang BẬT" : "Bóng đèn đang TẮT";
    }
}

// Lớp Công tắc
class Switch {
    constructor() {
        this.connectedBulb = null;
        this.isOn = false;
    }

    connectToBulb(bulb) {
        this.connectedBulb = bulb;
    }

    toggle() {
        if (!this.connectedBulb) {
            console.log("Chưa kết nối bóng đèn!");
            return;
        }

        this.isOn = !this.isOn;

        if (this.isOn) {
            this.connectedBulb.turnOn();
        } else {
            this.connectedBulb.turnOff();
        }

        console.log(this.connectedBulb.getStatus());
    }
}

// Khởi tạo đối tượng
const bulb = new LightBulb();
const sw = new Switch();

// Kết nối công tắc với bóng đèn
sw.connectToBulb(bulb);

// Bật/tắt công tắc 10 lần
for (let i = 1; i <= 10; i++) {
    console.log(`Lần ${i}:`);
    sw.toggle();
}
