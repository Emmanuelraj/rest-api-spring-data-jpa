import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8050/api/v1/employees";

const USER_API_BASE_URL = "http://localhost:8050/rest-api";


class UserService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    createUser(user){
       return axios.post(USER_API_BASE_URL + '/save', user )
    }

    getUserByEmail(userEmail){
       return axios.get(USER_API_BASE_URL + '/viewById/' + userEmail)
    }
}

export default new UserService()