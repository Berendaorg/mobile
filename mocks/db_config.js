const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '109.70.148.43',     // Change to your DB host
    user: 'curiouco_client',          // Change to your DB user
    password: 'qwerty1234qwerty',  // Change to your DB password
    database: 'curiouco_Nest-realestate' // Your MariaDB database
  });

  connection.query('CALL SelectAllReview()', (error, results) => {
    if (error) {
      console.log(error);
    }
    console.log(results)
})