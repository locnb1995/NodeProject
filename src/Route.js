import EmployeeController from './Controller/EmployeeController';
export default class Route{
    constructor(app){
        this.app = app;
    }

    getRoute(){
        var empController = new EmployeeController();

        this.app.get('/' , function(req , res){
            empController.getAllEmployee().then(function(result){
                //console.log(result);
                res.send(result);
            }).catch(err => res.send(err));
        });

        this.app.post('/addEmp', function (req, res) {
            console.log(req.body);
            res.send('add Emp');
        });

    }
}