function Service() {
    this.getListTeacher = function () {
        return axios({
          url: "https://6309fc1032499100327e990a.mockapi.io/users",
          method: "GET",
        });
      };

      this.deleteTeacherApi = function (id) {
        return axios({
          url: `https://6309fc1032499100327e990a.mockapi.io/users/${id}`,
          method: "DELETE",
        });
      };

      this.addTeacherApi = function (teacher) {
        return axios({
          url: "https://6309fc1032499100327e990a.mockapi.io/users",
          method: "POST",
          data: teacher,
        });
      };

      this.getTeacherById = function (id) {
        return axios({
          url: `https://6309fc1032499100327e990a.mockapi.io/users/${id}`,
          method: "GET",
        });
      };

      this.updateTeacherApi = function (teacher) {
        return axios({
          url: `https://6309fc1032499100327e990a.mockapi.io/users/${teacher.id}`,
          method: "PUT",
          data: teacher,
        });
      };
}