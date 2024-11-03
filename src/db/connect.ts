import "reflect-metadata";
import { Photo } from "@/entities/photo";
import { Connection, ConnectionOptions, getConnectionManager } from "typeorm";
import { Schedule } from "@/entities/schedule";

let connection: Connection;

export const connectDatabase = async (): Promise<void> => {
  const connectionManager = getConnectionManager();

  if (connectionManager.has("default")) {
    connection = connectionManager.get("default");
  } else {
    connection = connectionManager.create({
      type: process.env.DB_TYPE,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Photo, Schedule],
      logging: true,
      synchronize: true,
    } as ConnectionOptions);

    await connection.connect();
    console.log("TypeORM connected!");
  }
};

export const getConnection = (): Connection => {
  if (!connection) {
    throw new Error("Connection not established!");
  }

  return connection;
};
