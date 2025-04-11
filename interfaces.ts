interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "12345",
  size: {
    width: 20,
    height: 30,
  },
};

const rect2: Rect = {
  id: "12345",
  size: {
    width: 10,
    height: 20,
  },
};

rect2.color = "red";

const rect3 = {} as Rect;

//===========================

// Наследование интерфейсов

interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "12345",
  size: {
    width: 10,
    height: 20,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid red",
  marginTop: "10px",
  borderRadius: "10px",
};
