function validateForm() {
    const form = document.getElementById('registrationForm');
    const coName = form.coName.value.trim();
    const size = form.size.value;
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const province = form.province.value.trim();
    const city = form.city.value.trim();

    if (!coName || !size || !email || !password || !province || !city) {
        alert('لطفاً همه فیلدها را پر کنید');
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        alert('لطفاً ایمیل معتبر وارد کنید');
        return false;
    }

    if (password.length < 6) {
        alert('رمز عبور باید حداقل 6 کاراکتر باشد');
        return false;
    }
    // انتقال به صفحه دیگر در صورت موفقیت
    window.location.href = "../dashboard/dashboard.html";
    return false;
}


