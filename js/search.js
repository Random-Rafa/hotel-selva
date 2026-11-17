function initDefaultDates() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 3);

    const format = d => d.toISOString().split('T')[0];
    
    id('checkin-date').value = format(today);
    id('checkout-date').value = format(tomorrow);
    id('wiz-checkin').value = format(today);
    id('wiz-checkout').value = format(tomorrow);
}

function triggerQuickSearch() {
    bookingState.checkin = id('checkin-date').value;
    bookingState.checkout = id('checkout-date').value;
    bookingState.adults = parseInt(id('search-guests').value);
    
    id('wiz-checkin').value = bookingState.checkin;
    id('wiz-checkout').value = bookingState.checkout;
    id('wiz-adults').value = bookingState.adults;
    
    openBookingWizard();
}
