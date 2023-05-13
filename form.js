function buat_login() {
    let elem = document.getElementById("X");
    elem.parentElement.removeChild(elem);
    let p = document.createElement("p");
    p.className = "tulisan_login";
    p.innerHTML = "silahkan mendaftar";
    let element = document.getElementsByTagName("div")[0];
    element.appendChild(p);
    let form = document.createElement("form");
    element.appendChild(form);
    let label = document.createElement("label");
    label.innerHTML = "Nama User";
    form.appendChild(label);
    let input_name_user = document.createElement("input");
    input_name_user.type = "text";
    input_name_user.placeholder = "Nama User.."
    input_name_user.name = "namaUser";
    input_name_user.className = "form_login";
    form.appendChild(input_name_user);
    let label2 = document.createElement("label");
    label2.innerHTML = "Nomor Handphone";
    form.appendChild(label2);
    let input_no_handphone = document.createElement("input");
    input_no_handphone.type = "text";
    input_no_handphone.placeholder = "Nomor Handphone."
    input_no_handphone.name = "phone";
    input_no_handphone.className = "form_login";
    form.appendChild(input_no_handphone);
    let label3 = document.createElement("label");
    label3.innerHTML = "Username"
    form.appendChild(label3);
    let input_username = document.createElement("input");
    input_username.type = "text";
    input_username.placeholder = "Username atau email .."
    input_username.name = "Username";
    input_username.className = "form_login";
    form.appendChild(input_username);
    let label4 = document.createElement("label");
    label4.innerHTML = "Password"
    form.appendChild(label4);
    let input_password = document.createElement("input");
    input_password.type = "password";
    input_password.placeholder = "Password .."
    input_password.name = "Password";
    input_password.className = "form_login";
    form.appendChild(input_password);
    let button = document.createElement("button");
    button.className = "tombol_login";
    button.innerHTML = "DAFTAR SEKARANG";
    form.appendChild(button);
}