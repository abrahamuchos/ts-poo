export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  isConnected(name: string): boolean;
  disconnect(): void;
}


class PostgresDriver implements Driver {
  constructor(public database: string,
              public password: string,
              public port: number
  ) {

  }

  connect() {
    //code to connect
  }

  isConnected(name: string): boolean {
    //code to check if connected
    return true;
  }

  disconnect() {
    //code to disconnect
  }

}


const pgslq = new PostgresDriver('test_db', 'test', 5432);