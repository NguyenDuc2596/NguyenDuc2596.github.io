function onDisplayName() {
    let name = document.getElementById("txt-name").value;
    // tag Input phải dùng value
    document.getElementById("display-name").innerHTML =
        name;
};