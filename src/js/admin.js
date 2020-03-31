window.addEventListener('load', function () {
    let chooseButtonAdd = document.querySelector('.btnAdd'),
        chooseButtonDel = document.querySelector('.btnDelete'),
        car = document.getElementById('carList'),
        firebaseConfig = {};

    chooseButtonAdd.addEventListener('click', function () {
        let option = new Option('Новый автомобиль');
        car.append(option);
        option.selected = true;
    });

    chooseButtonDel.addEventListener('click', function () {
        let selectedOption = car.options[car.selectedIndex];
        selectedOption.remove();
    });

    firebase.initializeApp(firebaseConfig);
});







