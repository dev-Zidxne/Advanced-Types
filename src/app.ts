type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployees = Admin & Employee;

const e1: ElevatedEmployees = {
  name: "Zid",
  privilages: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | boolean;

type Numeric = number | boolean;

type Universal = Combinable | Numeric;
