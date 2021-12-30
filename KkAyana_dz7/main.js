class Transport{
    constructor(name, color, type) {
        this.name = name;
        this.color = color;
        this.type = type;
    }

    startEngine(){
        console.log("Engine is disable")
    }
}

class Car extends Transport {
    constructor(name, color, type, battery, brake, wheel, steering, transmission) {
        super(name, color, type, battery, brake, wheel, steering, transmission);
        this.battery = battery;
        this.brake = brake;
        this.wheel = wheel;
        this.steering = steering;
        this.transmission = transmission;
    }

    // startEngine() {
    //     console.log("Engine is start")
    // }
    startEngine(nameT) {
        super.startEngine(nameT);
    }
}


class BMW extends Car{
    constructor(name, color, type, battery, brake, wheel, steering, transmission) {
        super(name, color, type, battery, brake, wheel, steering, transmission);
    }
    startEngine() {
        console.log("Engine is  start")
    }
}

const bmw = new Car ("BMW ", "Розовый", "car", "5er(E12)", "520i", "RUN-FLAT", "Active Front Steering", "Gasoline")
console.log(bmw)


class Airplane extends Transport{
    constructor(name, color, type, height, fuselage, plumage) {
        super(name, color, type, height, fuselage, plumage);
        this.height = height
        this.fuselage = fuselage
        this.plumage = plumage
    }
}

const airplane = new Airplane("airplane", "голубой", "airplane", 37, "7 metres", "T-shaped")
console.log(airplane)
