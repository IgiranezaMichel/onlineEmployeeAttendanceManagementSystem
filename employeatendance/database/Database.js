import * as SQLite from 'expo-sqlite';
const Database = SQLite.openDatabase('user.db');
Database.transaction(tx => {
  tx.executeSql(
    
    'CREATE TABLE IF NOT EXISTS Employeer (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, phoneNumber TEXT,email TEXT NOT NULL,password TEXT NOT NULL,UNIQUE (ID))',
    [],
    (_, error) => {
      if (error) console.log('Error creating table:', error);
      else  console.log('Table created successfully!');
    }
  );
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS Employee (id integer primary key autoincrement, name text,phoneNumber text,position text,payment integer,employeerId integer,foreign key(employeerId) references employeer(id) on delete cascade)',[],
    (_, error) => {
      if (error) console.log('Error creating table:', error);
      else  console.log('Table created successfully!');
    }
  );
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS Attendance (id integer primary key autoincrement, employeeId integer,employeerId,dayOfAttendance TEXT,foreign key(employeeId) reference employee(id) on delete cascade,foreign key(employeerId) references employeer(id) on delete cascade)',[],
    (_, error) => {
      if (error) console.log('Error creating table:', error);
      else  console.log('Table created successfully!');
    }
  )
});
export default Database;