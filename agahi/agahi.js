// لیست آگهی‌ها
const jobs = [
    { title: "توسعه‌دهنده وب", company: "شرکت آلفا" },
    { title: "طراح گرافیک", company: "شرکت بتا" },
    { title: "مدیر پروژه", company: "شرکت گاما" },
    { title: "مهندس داده", company: "شرکت دلتا" },

    { title: "تحلیل‌گر کسب‌وکار", company: "شرکت اومگا" },
    { title: "مهندس نرم‌افزار", company: "شرکت سیگما" },
    { title: "مدیر منابع انسانی", company: "شرکت فی" },
    { title: "تحلیل‌گر مالی", company: "شرکت زتا" },
    { title: "مدیر فروش", company: "شرکت تتا" },
    { title: "کارشناس دیجیتال مارکتینگ", company: "شرکت اپسیلون" },
];

// نمایش لیست آگهی‌ها
const jobList = document.getElementById("jobList");
jobs.forEach((job) => {
    const jobAd = document.createElement("div");
    jobAd.className = "job-ad";
    jobAd.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>شرکت:</strong> ${job.company}</p>
        <button onclick="showResumeForm('${job.company}')">ارسال رزومه</button>
        <button onclick="startChat('${job.company}')">چت با کارفرما</button>
    `;
    jobList.appendChild(jobAd);
});

// ارسال رزومه
function showResumeForm(company) {
    document.getElementById("companyName").textContent = company;
    document.getElementById("resumeModal").style.display = "flex";

}

function submitResume() {
    const resumeFile = document.getElementById("resumeFile")
    if (!resumeFile || !resumeFile.files || resumeFile.files.length==0 ){
        alert("لطفا یک فایل انتخاب کنید")
        return;
    }
    else{
    alert("رزومه با موفقیت ارسال شد!");
    closeModal();}
}

function closeModal() {
    document.getElementById("resumeModal").style.display = "none";
}

// چت با کارفرما*-
function startChat(company) {
    document.getElementById("chatCompany").textContent = company;
    document.getElementById("chatModal").style.display = "flex";
}

function sendMessage() {
    const chatInput = document.getElementById("chatInput");
    if (chatInput.value.trim()) {
        const chatWindow = document.getElementById("chatWindow");
        const message = document.createElement("p");
        message.textContent = chatInput.value;
        chatWindow.appendChild(message);
        chatInput.value = "";
    }

}

function closeChat() {
    document.getElementById("chatModal").style.display = "none";
}

