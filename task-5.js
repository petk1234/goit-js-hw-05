class Car{
    static getSpecs(car){
        console.log(car);
     
    }
    constructor({speed = 0, price_, maxSpeed, isOn = false, distance = 0}){
        this.speed = speed;
        this._price = price_;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }
    get price(){
        return this._price;
    }
    set price(value){
        return (this._price = value);
    }
    turnOn(){
        this.isOn = true;
    }
    turnOff(){
        this.isOn = false;
        this.speed = 0;
    }
    decelerate(value){
        if((this.speed) - value >= 0){
            this.speed -= value;
        }
    }
    accelerate(value){
        this.speed += value
    }
    drive(hours){
        if(this.isOn === true){
            this.distance += hours * this.speed;
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price_: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000