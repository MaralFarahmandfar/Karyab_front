// لیست آگهی‌ها
const jobs = [
    {
        title: "توسعه‌دهنده وب",
        company: "شرکت آلفا",
        salary: "۱۰,۰۰۰,۰۰۰ تومان",
        benefits: "بیمه، پاداش",
        skills: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "طراح گرافیک",
        company: "شرکت بتا",
        salary: "۸,۰۰۰,۰۰۰ تومان",
        benefits: "امکانات رفاهی",
        skills: ["Photoshop", "Illustrator"]
    },
    {
        title: "مدیر پروژه",
        company: "شرکت گاما",
        salary: "۱۵,۰۰۰,۰۰۰ تومان",
        benefits: "بیمه تکمیلی، سهام تشویقی",
        skills: ["مدیریت پروژه", "Scrum", "Agile"]
    },
    {
        title: "مهندس داده",
        company: "شرکت دلتا",
        salary: "۱۸,۰۰۰,۰۰۰ تومان",
        benefits: "بیمه، پاداش عملکرد",
        skills: ["Python", "SQL", "ETL"]
    },
    {
        title: "تحلیل‌گر کسب‌وکار",
        company: "شرکت اومگا",
        salary: "۱۲,۰۰۰,۰۰۰ تومان",
        benefits: "بیمه، اضافه‌کاری",
        skills: ["تحلیل داده", "Microsoft Excel", "Power BI"]
    },
    {
        title: "مهندس نرم‌افزار",
        company: "شرکت سیگما",
        salary: "۲۰,۰۰۰,۰۰۰ تومان",
        benefits: "بیمه تکمیلی، پاداش",
        skills: ["C#", "Java", "Spring"]
    },
    {
        title: "مدیر منابع انسانی",
        company: "شرکت فی",
        salary: "۱۰,۰۰۰,۰۰۰ تومان",
        benefits: "بیمه، مزایای رفاهی",
        skills: ["HRM", "ارتباطات", "قوانین کار"]
    },
    {
        title: "تحلیل‌گر مالی",
        company: "شرکت زتا",
        salary: "۱۴,۰۰۰,۰۰۰ تومان",
        benefits: "بیمه، پاداش عملکرد",
        skills: ["Excel", "مدیریت مالی", "گزارش‌دهی"]
    },
    {
        title: "مدیر فروش",
        company: "شرکت تتا",
        salary: "۱۶,۰۰۰,۰۰۰ تومان",
        benefits: "بیمه تکمیلی، کارانه",
        skills: ["فروش", "بازاریابی", "مذاکره"]
    },
    {
        title: "کارشناس دیجیتال مارکتینگ",
        company: "شرکت اپسیلون",
        salary: "۱۱,۰۰۰,۰۰۰ تومان",
        benefits: "بیمه، دورکاری",
        skills: ["SEO", "Google Ads", "تحلیل داده"]
    },
];
// نمایش لیست آگهی‌ها
const jobList = document.getElementById("jobList");
jobs.forEach((job) => {

    const jobAd = document.createElement("div");
  jobAd.className = "job-ad";

  const title = document.createElement("h3");
  title.textContent = job.title;
    const company = document.createElement("p");
    company.innerHTML = `<strong>شرکت:</strong> ${job.company}`;

  const salary = document.createElement("p");
  salary.innerHTML = `<strong>حقوق:</strong> ${job.salary}`;

  const benefits = document.createElement("p");
  benefits.innerHTML = `<strong>مزایای همکاری:</strong> ${job.benefits}`;

  const skills = document.createElement("p");
  skills.innerHTML = `<strong>مهارت‌های مورد نیاز:</strong> ${job.skills.join("، ")
  }`;
  
    const resumeButton = document.createElement("button");
    resumeButton.textContent = "ارسال رزومه";
    resumeButton.onclick = () => showResumeForm(job.company);
  
    const chatButton = document.createElement("button");
    chatButton.textContent = "چت با کارفرما";
    chatButton.onclick = () => startChat(job.company);


  

  // افزودن المان‌ها به div
  jobAd.appendChild(title);
  jobAd.appendChild(company);
  jobAd.appendChild(salary);
  jobAd.appendChild(benefits);
  jobAd.appendChild(skills);
  jobAd.appendChild(resumeButton);
  jobAd.appendChild(chatButton);

  // افزودن div به jobList  
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

