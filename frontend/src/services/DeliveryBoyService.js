import axios from "axios";

class DeliveryBoyService{

    // getAllEmployees(){
    //     return axios.get("http://localhost:8088/employee/listemployees")
    // }

    saveDeliveryBoy(deliveryBoy){
        return axios.post("http://localhost:8080/api/deliveryboy/", deliveryBoy);
    }

    loginDeliveryBoy(deliveryBoy) {
        return axios.post("http://localhost:8080/api/deliveryboy/login", deliveryBoy);
    }

    getDeliveryBoyById(deliveryBoyId) {
        return axios.get(`http://localhost:8080/api/deliveryboy/${deliveryBoyId}`);
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

export default new DeliveryBoyService();