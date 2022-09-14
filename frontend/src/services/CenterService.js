import axios from "axios";

class CenterService{

    // getAllEmployees(){
    //     return axios.get("http://localhost:8088/employee/listemployees")
    // }

    saveCenter(center){
        return axios.post("http://localhost:8080/api/center/",center);
    }

    getCenterById(centerId) {
        return axios.get(`http://localhost:8080/api/center/${centerId}`);
    }

    getAllCenters() {
        return axios.get(`http://localhost:8080/api/center/centers`)
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

export default new CenterService();