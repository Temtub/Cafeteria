// Start popovers
var popoverTriggerList = [].slice.call(document.querySelectorAll('.popper'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    });