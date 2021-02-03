class SwitchButton
{
    constructor()
    {
        this.status=false;
    }
    connectToLamp(lamp)
    {
        this.lamp=lamp;
    }
    switchOn()
    {
        this.status=true;
        this.lamp.turnOn();
    }
    switchOff()
    {
        this.status=false;
        this.lamp.turnOff();
    }
}
class EletricLamp
{
    constructor()
    {
        this.status=false;
    }
    turnOn()
    {
        this.status=true;
        alert("Linghting");
    }
    turnOff()
    {
        this.status=false;
        alert("No thing");
    }
}
let oneswitch= new SwitchButton();
let oneLamp = new EletricLamp();
oneswitch.connectToLamp(oneLamp);
for(let i =1; i<6;i++)
{
    oneswitch.switchOn();
    oneswitch.switchOff();    
}