import axios from "axios";

class BookedCourierService{

    // getAllEmployees(){
    //     return axios.get("http://localhost:8088/employee/listemployees")
    // }

    saveCourier(courier, custId){
        return axios.post(`http://localhost:8080/api/bookedcourier/?custId=${custId}`,courier);
    }

    acceptCourier(courier, courierId) {
        return axios.put(`http://localhost:8080/api/bookedcourier/${courierId}`, courier);
    }

    rejectCourier(courier, courierId) {
        return axios.put(`http://localhost:8080/api/bookedcourier/${courierId}`, courier);
    }

    updateStatus(courier, courierId) {
        return axios.put(`http://localhost:8080/api/bookedcourier/updatestatus/${courierId}`, courier);
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

export default new BookedCourierService();