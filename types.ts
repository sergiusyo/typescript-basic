const isFetching: boolean = true;
const isLoading: boolean = false;
const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;
const message: string = "hello TypeScript!";
const numberArray: number[] = [1, 2, 3, 4, 5, 7];
const numberArray2: Array<number> = [1, 2, 3, 4, 5, 7];

const words: string[] = ["hello", "typescript"];

const contact: [string, number] = ["Vladilen", 1234567];

let variable: any = 42;

variable = "New String";
variable = [];

function sayMyName(name: string): void {
  console.log(name);
}

sayMyName("Hello!");

function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {}
}

type Login = string;

const login: Login = "admin";

type ID = string | number;
const id1: ID = 12345;
const id2: ID = "12345";

type SomeType = string | null | undefined;
