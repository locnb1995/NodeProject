import mysql from 'mysql';
//import Employee from '../Model/Employee';
import ConfigDB from '../ConfigDB';

export default class EmployeeController{
    constructor(){}
    
    doExecuteQuery(queryDB){
        return new Promise(function(resolve , reject){
            const conn = mysql.createConnection({
                host: ConfigDB.getHost(),
                user: ConfigDB.getUsername(),
                password: ConfigDB.getPassword(),
                database: ConfigDB.getDB()
            });
    
            conn.connect(function(err) {
                if (err) reject(err);
            });
    
            conn.query(queryDB, function (err, result) {
                if (err){
                    reject(err);
                }else{
                    resolve(result);
                } 
            });
        });
    }

    async getAllEmployee(){
        let response;
        await this.doExecuteQuery('SELECT * FROM employee').then(function(result){
            response = result;
        })
        .catch(err => response = err);
        return response;
    }
}