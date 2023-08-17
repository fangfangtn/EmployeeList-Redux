import axios from 'axios';

const BASE_URL = "https://64c8ad34a1fe0128fbd60bba.mockapi.io/crud-api/employee";

class EmployeeService{

    getAllEmployee(){
        return axios.get(BASE_URL);
    }

    createEmployee(employee: any){
        return axios.post(BASE_URL, employee);
    }

    getEmployeeById(employeeId: string){
        return axios.get(BASE_URL + '/' + employeeId);
    }

    updateEmployee(employeeId: string, employee: any){ 
        return axios.put(BASE_URL + '/' +employeeId, employee);
    }

    deleteEmployee(employeeId: string){
        return axios.delete(BASE_URL + '/' + employeeId);
    }

}

export default new EmployeeService()