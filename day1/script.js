
const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (email.value === "") {
        console.log("Bạn chưa nhập email");
    } else if (password.value === "") {
        console.log("Bạn chưa nhập mật khẩu");
    } else {
        console.log("Đã nhập đủ thông tin");
    }
});
