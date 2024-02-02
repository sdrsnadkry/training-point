function submitForm(event) {
    event.preventDefault();

    const form = document.forms["login-form"];

    const brand = form.brand.value;
    const model = form.model.value;
    const color = form.color.value;

    const car = {
        brand: brand,
        model: model,
        color: color,
    };

    const strigify = JSON.stringify(car);

    localStorage.setItem("car", strigify);

    const carDetails = `This is ${brand} ${model} ${color} car`;

    document.getElementById("car-detail").innerHTML = carDetails;
}