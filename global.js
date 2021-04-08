$('input[type=range]').on('input', function() {
    $(this).trigger('change');
});
$(this).on('change', function($event) {
    const target = $event.target.id.replace('-range', '-extra');
    const value = $event.target.value;
    let result = '';
    if (value == 1) {
        result = '-1 sur les jets, pas de contre attaque.';
    }
    if (value == 2) {
        result = '-1 sur les jets.';
    }
    if (value == 8 || value == 9) {
        result = '+1 sur les jets.';
    }
    if (value == 10) {
        result = '+1 sur les jets, contre attaque sur 5-6.';
    }
    document.getElementById(target).innerHTML = result;
})