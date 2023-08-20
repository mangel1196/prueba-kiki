import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "kiki_prueba",
    synchronize: true,
    logging: false,
    migrations: [],
    subscribers: [],
})
