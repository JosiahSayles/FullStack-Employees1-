import db from "#db/client";
import { createEmployee } from "./queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for (let i = 0; i < 10; i++) {
    const employee = {
      name: "Employee" + i,
      birthday: faker.date.past({ years: 20 }),
      salary: faker.number.int({ min: 50000, max: 200000 }),
    };
    await createEmployee(employee);
  }
}
