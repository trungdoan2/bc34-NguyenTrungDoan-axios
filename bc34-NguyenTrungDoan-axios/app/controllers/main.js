var service = new Service();

function getEle(id) {
    return document.getElementById(id);
  }

  function fetchData() {
    service
      .getListTeacher()
      .then(function (result) {
        renderHTML(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  fetchData();

  function renderHTML(data) {
    var content = "";
    data.forEach(function (teacher,index) {
      content += `
      <tr>
      <td>${index + 1}</td>
      <td>${teacher.taiKhoan}</td>
      <td>${teacher.matKhau}</td>
      <td>${teacher.hoTen}</td>
      <td>${teacher.email}</td>
      <td>${teacher.ngonNgu}</td>
      <td>${teacher.loaiND}</td>
      <td>
        <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editTeacher(${
          teacher.id
        })">Edit</button>

        <button class="btn btn-danger" onclick="deleteTeacher(${
          teacher.id
        })">Delete</button>
      </td>
  </tr>


      `;
    });
    getEle('tblDanhSachNguoiDung').innerHTML = content;
  }

  function deleteTeacher(id) {
    service.deleteTeacherApi(id)
    .then(function () {
      //render list data
      fetchData();
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  getEle("btnThemNguoiDung").addEventListener("click",function () {
    document.getElementsByClassName("modal-title")[0].innerHTML = "Thêm Người Dùng";

    var btnAdd = `<button class="btn btn-success" onclick="addTeacher()">Add</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = btnAdd;
  })

  function addTeacher() {
     var taiKhoan = getEle("TaiKhoan").value;
     var hoTen = getEle("HoTen").value;
     var matKhau = getEle("MatKhau").value;
     var email = getEle("Email").value;
   
     var loaiND = getEle("loaiNguoiDung").value;
     var ngonNgu = getEle("loaiNgonNgu").value;
     var moTa = getEle("MoTa").value;

     var teacher = new Teacher("", taiKhoan, hoTen, matKhau, email, ngonNgu,  loaiND, moTa)

     service
     .addTeacherApi(teacher)
     .then(function () {
       fetchData();
 
       //close modal
       document.getElementsByClassName("close")[0].click();
     })
     .catch(function (error) {
       console.log(error);
     });
 }

 function editTeacher(id) {
  document.getElementsByClassName("modal-title")[0].innerHTML = "Update Người Dùng";

  var btnUpdate = `<button class="btn btn-success" onclick="updateUser(${id})">Update</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnUpdate;

  service
    .getTeacherById(id)
    .then(function (result) {
      //show thông ra các thẻ input
      getEle("TaiKhoan").value = result.data.taiKhoan;
      getEle("HoTen").value = result.data.hoTen;
      getEle("MatKhau").value = result.data.matKhau;
      getEle("Email").value = result.data.email;
      getEle("HinhAnh").value = result.data.hinhAnh;
      getEle("loaiNguoiDung").value = result.data.loaiND;
      getEle("loaiNgonNgu").value = result.data.ngonNgu;
      getEle("MoTa").value = result.data.moTa;
    })
    .catch(function (error) {
      console.log(error);
    });
}
  

function updateUser(id) {
  var taiKhoan = getEle("TaiKhoan").value;
  var hoTen = getEle("HoTen").value;
  var matKhau = getEle("MatKhau").value;
  var email = getEle("Email").value;

  var loaiND = getEle("loaiNguoiDung").value;
  var ngonNgu = getEle("loaiNgonNgu").value;
  var moTa = getEle("MoTa").value;

  var teacher = new Teacher(id, taiKhoan, hoTen, matKhau, email, ngonNgu, loaiND, moTa);

  service
    .updateTeacherApi(teacher)
    .then(function () {
      fetchData();
      //close modal
      document.getElementsByClassName("close")[0].click();
    })
    .catch(function (error) {
      console.log(error);
    });

}