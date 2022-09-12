import axios from "axios";

class ManagerService{

    // getAllEmployees(){
    //     return axios.get("http://localhost:8088/employee/listemployees")
    // }

    saveManager(manager){
        return axios.post("http://localhost:8080/api/manager/", manager);
    }

    // getEmployeeById(employeeId){
    //     return axios.get("http://localhost:8088/employee/findemployee/"+employeeId);
    // }

    // updateEmployee(employee,employeeId){
    //     return axios.put("http://localhost:8088/employee/updateemployee/"+employeeId,employee);
    // }

    // deleteEmployee(employeeId){
    //     return axios.delete("http://localhost:8088/employee/deleteemployee/"+employeeId);
    // }
}

export default new ManagerService();