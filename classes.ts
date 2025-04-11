class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

//==================

// class Car {
//     readonly model: string; // укажем поля с модификатором readonly, т.е. они НЕ смогут перезаписываться
//     readonly numberOfWheels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel // не смотря на то, что поле model перезаписвть нельзя, т.к. оно readOnly, мы все равно можем
//         // его перезаписать внутри конструктора! Но более НИГДЕ! Ни в каких других методах.
//     }
// }

// Более короткая запись
class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

//=======================
// Модификаторы.

class Animal {
  protected voice: string = "";
  public color: string = "black";

  private go() {
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();

//=====================================

// Абстрактные классы. От них можно наследоваться. Они НЕ компилируются.
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Component on render");
  }

  info(): string {
    return "This is info";
  }
}
