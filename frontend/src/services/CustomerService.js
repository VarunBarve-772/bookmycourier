import axios from "axios";

class CustomerService{

    // getAllEmployees(){
    //     return axios.get("http://localhost:8088/employee/listemployees")
    // }

    saveCustomer(customer){
        return axios.post("http://localhost:8080/api/customer/",customer);
    }

    loginCustomer(customer) {
        return axios.post("http://localhost:8080/api/customer/login", customer);
    }

    getCustomerById(custId) {
        return axios.get(`http://localhost:8080/api/customer/${custId}`);
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

export default new CustomerService();