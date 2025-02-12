// 可以在这里添加交互功能，比如表单提交后的提示
document
  .querySelector(".contact form")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
  });
