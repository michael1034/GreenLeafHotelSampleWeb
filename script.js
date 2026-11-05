const checkinInput = document.getElementById('checkin');

checkinInput.addEventListener('focus', () => {
    const checkinDate = new Date();
    const formattedDate = checkinDate.toLocaleDateString('en-CA');
    checkinInput.type = 'date';
    checkinInput.showPicker();
    checkinInput.value = formattedDate;
});

const checkoutInput = document.getElementById('checkout');
checkoutInput.addEventListener('focus', () => {
    const checkoutDate = new Date();
    checkoutDate.setDate(checkoutDate.getDate() + 1);
    const formattedDate = checkoutDate.toLocaleDateString('en-CA');
    checkoutInput.type = 'date';
    checkoutInput.showPicker();
    checkoutInput.value = formattedDate;
});

