import { differenceInYears } from "date-fns";
import type { Employee } from "../types";

const EmployeeView = ({ employee }: { employee: Employee }) => {
  const { name, profession, year } = employee;
  const age = differenceInYears(new Date(), new Date(year, 1, 1));
  console.log(new Date());

  return (
    <p>
      {name}, {profession}, {age}
    </p>
  );
};

export default EmployeeView;
