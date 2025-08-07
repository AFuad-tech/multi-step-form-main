const page_1_btn_next_step = document.getElementById("page_1_btn_next_step");
const num = document.getElementsByClassName("num");

let Total_sum = 0;
let name_page_1_final, email_page_1_final, phone_page_1_final;

const main = document.getElementById("main");
console.log(main.offsetHeight);

page_1_btn_next_step.addEventListener("click", () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  // Labels
  const nameLabel = document.getElementById("nameLabel");
  const emailLabel = document.getElementById("emailLabel");
  const phoneLabel = document.getElementById("phoneLabel");

  // Reset previous errors
  [nameLabel, emailLabel, phoneLabel].forEach((label) => {
    label.classList.remove("error");
    label.removeAttribute("data-error");
  });

  let hasError = false;

  // Validation
  if (name.value.trim() === "") {
    nameLabel.classList.add("error");
    nameLabel.setAttribute("data-error", "Name is required");
    hasError = true;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    emailLabel.classList.add("error");
    emailLabel.setAttribute("data-error", "Invalid email format");
    hasError = true;
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone.value.trim())) {
    phoneLabel.classList.add("error");
    phoneLabel.setAttribute("data-error", "This field is required");
    hasError = true;
  }

  if (!hasError) {
    name_page_1_final = name.value.trim();
    email_page_1_final = email.value.trim();
    phone_page_1_final = phone.value.trim();

    console.log(name_page_1_final);
    console.log(email_page_1_final);
    console.log(phone_page_1_final);

    // Proceed to next step or send data

    document.getElementById("main_page_1").style.display = "none";
    document.getElementById("main_page_2").style.display = "flex";
    num[1].style.backgroundColor = "lightblue";
    num[1].style.color = "darkblue";
    num[0].style.backgroundColor = "transparent";
    num[0].style.color = "white";
  }
});

/* Main page 2 code */

const toggle = document.getElementById("toggle_switchbox");
const monthly_lable = document.getElementById("monthly-label");
const yearly_lable = document.getElementById("yearly-label");
const main_page_2_group = document.getElementsByClassName("main_page_2_group");
let monthly_yearly = true;
let page_2_option_clicked = false;
const buttons_page_2 = document.getElementById("buttons_page_2");

const main_page_2_price = document.getElementsByClassName("main_page_2_price");
const two_months_free = document.getElementsByClassName("two_months_free");
const toggle_wrapper = document.getElementById("toggle_wrapper");

const right_price = document.getElementsByClassName("right_price");

toggle.addEventListener("change", function () {
  if (this.checked) {
    yearly_lable.style.color = "hsl(213, 96%, 18%)";

    monthly_lable.style.color = "hsl(231, 11%, 63%)";
    toggle_wrapper.style.marginTop = "39px";

    monthly_yearly = false;

    for (let i = 0; i < main_page_2_price.length; i++) {
      if (i === 0) {
        main_page_2_price[0].textContent = "$90/yr";
        two_months_free[0].style.display = "block";
        right_price[i].textContent = "+10$/yr";
      }
      if (i === 1) {
        main_page_2_price[1].textContent = "$120/yr";
        two_months_free[1].style.display = "block";
        right_price[i].textContent = "+20$/yr";
      }
      if (i === 2) {
        main_page_2_price[2].textContent = "$150/yr";
        two_months_free[2].style.display = "block";
        right_price[i].textContent = "+20$/yr";
      }
    }
    console.log("Yearly selected");
    buttons_page_2.style.marginTop = "84px";
    if (window.innerWidth <= 380) {
      // Code here runs only if the viewport is 768px wide or less
      toggle_wrapper.style.marginTop = "10px";
      buttons_page_2.style.marginTop = "0px";

      // You can apply styles, classes, logic, etc.
    } else {
      if (window.innerWidth <= 380) {
        toggle_wrapper.style.marginTop = "10px";
        console.log("is this running");
      } else {
        toggle_wrapper.style.marginTop = "38px";
      }
    }
  } else {
    console.log("Monthly selected");
    buttons_page_2.style.marginTop = "85px";
    yearly_lable.style.color = " hsl(231, 11%, 63%)";

    monthly_lable.style.color = "hsl(213, 96%, 18%)";
    toggle_wrapper.style.marginTop = "60px";
    if (window.innerWidth <= 380) {
      // Code here runs only if the viewport is 768px wide or less
      toggle_wrapper.style.marginTop = "10px";
      buttons_page_2.style.marginTop = "0px";
      console.log("does this check runs");
      // You can apply styles, classes, logic, etc.
    } else {
      toggle_wrapper.style.marginTop = "60px";
    }

    monthly_yearly = true;
    for (let i = 0; i < main_page_2_price.length; i++) {
      if (i === 0) {
        main_page_2_price[0].textContent = "$9/mo";
        two_months_free[0].style.display = "none";
        right_price[i].textContent = "+1$/mo";
      }
      if (i === 1) {
        main_page_2_price[1].textContent = "$12/mo";
        two_months_free[1].style.display = "none";
        right_price[i].textContent = "+2$/mo";
      }
      if (i === 2) {
        main_page_2_price[2].textContent = "$15/mo";
        two_months_free[2].style.display = "none";
        right_price[i].textContent = "+2$/mo";
      }
    }
  }
});

for (let i = 0; i < main_page_2_group.length; i++) {
  main_page_2_group[i].addEventListener("click", () => {
    main_page_2_group[0].style.border = "1px solid hsl(231, 11%, 63%)";
    main_page_2_group[1].style.border = "1px solid hsl(231, 11%, 63%)";
    main_page_2_group[2].style.border = "1px solid hsl(231, 11%, 63%)";
    main_page_2_group[i].style.border = "2px solid darkblue";
    page_2_option_clicked = true;
    second_page_choice_selected = true;
  });
}

const page_2_btn_next_step = document.getElementById("page_2_btn_next_step");

let page_2_choice_final;
page_2_btn_next_step.addEventListener("click", () => {
  if (page_2_option_clicked) {
    num[2].style.backgroundColor = "lightblue";
    num[2].style.color = "darkblue";
    num[1].style.backgroundColor = "transparent";
    num[1].style.color = "white";
    if (monthly_yearly) {
      if (main_page_2_group[0].style.borderColor === "darkblue") {
        page_2_choice_final = 9;
        Total_sum += 9;
        console.log(Total_sum);

        document.getElementById("main_page_2").style.display = "none";
        document.getElementById("main_page_3").style.display = "flex";
      }
      if (main_page_2_group[1].style.borderColor === "darkblue") {
        page_2_choice_final = 12;

        Total_sum += 12;
        console.log(Total_sum);

        document.getElementById("main_page_2").style.display = "none";
        document.getElementById("main_page_3").style.display = "flex";
      }
      if (main_page_2_group[2].style.borderColor === "darkblue") {
        page_2_choice_final = 15;
        Total_sum += 15;
        console.log(Total_sum);

        document.getElementById("main_page_2").style.display = "none";
        document.getElementById("main_page_3").style.display = "flex";
      }
    } else {
      if (main_page_2_group[0].style.borderColor === "darkblue") {
        page_2_choice_final = 90;
        Total_sum += 90;
        console.log(Total_sum);

        document.getElementById("main_page_2").style.display = "none";
        document.getElementById("main_page_3").style.display = "flex";
      }
      if (main_page_2_group[1].style.borderColor === "darkblue") {
        page_2_choice_final = 120;

        Total_sum += 120;
        console.log(Total_sum);

        document.getElementById("main_page_2").style.display = "none";
        document.getElementById("main_page_3").style.display = "flex";
      }
      if (main_page_2_group[2].style.borderColor === "darkblue") {
        page_2_choice_final = 150;

        Total_sum += 150;
        console.log(Total_sum);

        document.getElementById("main_page_2").style.display = "none";
        document.getElementById("main_page_3").style.display = "flex";
      }
    }
  } else {
    alert("Please make a choice");
  }
});

const page_2_btn_previous_step = document.getElementById(
  "page_2_btn_previous_step"
);

page_2_btn_previous_step.addEventListener("click", () => {
  document.getElementById("main_page_2").style.display = "none";
  document.getElementById("main_page_1").style.display = "flex";
  num[0].style.backgroundColor = "lightblue";
  num[0].style.color = "darkblue";
  num[1].style.backgroundColor = "transparent";
  num[1].style.color = "white";
});

/* Main page 3 start */

const final_page_checkup =
  document.getElementsByClassName("final_page_checkup");
const page_4_right_price =
  document.getElementsByClassName("page_4_right_price");

const main_page_3_group = document.getElementsByClassName("main_page_3_group");
const checkbox = document.querySelectorAll(".checkbox");
let main_page_3_ifChecked = false;

for (let i = 0; i < main_page_3_group.length; i++) {
  main_page_3_group[i].addEventListener("click", () => {
    if (main_page_3_group[i].style.borderColor !== "darkblue") {
      main_page_3_group[i].style.border = "2px solid darkblue";
      checkbox[i].checked = true;
    } else {
      main_page_3_group[i].style.border = "1px solid #cccccc";
      checkbox[i].checked = false;
    }
  });
}
let online_page_3_final, large_page_3_final, customizable_page_3_final;
const main_page_4_group = document.getElementsByClassName("main_page_4_group");

const page_3_btn_next_step = document.getElementById("page_3_btn_next_step");

page_3_btn_next_step.addEventListener("click", () => {
  if (monthly_yearly) {
    if (main_page_3_group[0].style.borderColor === "darkblue") {
      online_page_3_final = 1;
      Total_sum += 1;
      console.log(Total_sum);
    } else {
      online_page_3_final = 0;
    }
    if (main_page_3_group[1].style.borderColor === "darkblue") {
      large_page_3_final = 2;
      Total_sum += 2;
      console.log(Total_sum);
    } else {
      large_page_3_final = 0;
    }
    if (main_page_3_group[2].style.borderColor === "darkblue") {
      customizable_page_3_final = 2;
      Total_sum += 2;
      console.log(Total_sum);
    } else {
      customizable_page_3_final = 0;
    }
  } else {
    if (main_page_3_group[0].style.borderColor === "darkblue") {
      online_page_3_final = 10;
      console.log(online_page_3_final);
      Total_sum += 10;
      console.log(Total_sum);
    } else {
      online_page_3_final = 0;
    }
    if (main_page_3_group[1].style.borderColor === "darkblue") {
      large_page_3_final = 20;
      Total_sum += 20;
      console.log(Total_sum);
    } else {
      large_page_3_final = 0;
    }
    if (main_page_3_group[2].style.borderColor === "darkblue") {
      customizable_page_3_final = 20;
      Total_sum += 20;
      console.log(Total_sum);
    } else {
      customizable_page_3_final = 0;
    }
  }
  num[3].style.backgroundColor = "lightblue";
  num[3].style.color = "darkblue";
  num[2].style.backgroundColor = "transparent";
  num[2].style.color = "white";
  ////////////////////////////
  for (let i = 0; i < final_page_checkup.length; i++) {
    if (final_page_checkup[i] === final_page_checkup[0]) {
      if (monthly_yearly) {
        if (page_2_choice_final === 9) {
          final_page_checkup[i].textContent = "Arcade (Monthly)";
          page_4_right_price[i].textContent = "+$9/mo";
        }
        if (page_2_choice_final === 12) {
          final_page_checkup[i].textContent = "Advance (Monthly)";
          page_4_right_price[i].textContent = "+$12/mo";
        }
        if (page_2_choice_final === 15) {
          final_page_checkup[i].textContent = "Pro (Monthly)";
          page_4_right_price[i].textContent = "+$15/mo";
        }
      } else {
        if (page_2_choice_final === 90) {
          final_page_checkup[i].textContent = "Arcade (Yearly)";
          page_4_right_price[i].textContent = "+$90/yr";
        }
        if (page_2_choice_final === 120) {
          final_page_checkup[i].textContent = "Advance (Yearly)";
          page_4_right_price[i].textContent = "+$120/yr";
        }
        if (page_2_choice_final === 150) {
          final_page_checkup[i].textContent = "Pro (Yearly)";
          page_4_right_price[i].textContent = "+$150/yr";
        }
      }
    }
    if (final_page_checkup[i] === final_page_checkup[1]) {
      if (monthly_yearly) {
        if (online_page_3_final) {
          page_4_right_price[i].textContent = "+$1/mo";
          main_page_4_group[1].style.display = "flex";
        } else {
          main_page_4_group[1].style.display = "none";
        }
      } else {
        if (online_page_3_final) {
          page_4_right_price[i].textContent = "+$10/yr";
          main_page_4_group[1].style.display = "flex";
        } else {
          main_page_4_group[1].style.display = "none";
        }
      }
    }
    if (final_page_checkup[i] === final_page_checkup[2]) {
      if (monthly_yearly) {
        if (large_page_3_final) {
          page_4_right_price[i].textContent = "+$2/mo";
          main_page_4_group[2].style.display = "flex";
        } else {
          main_page_4_group[2].style.display = "none";
        }
      } else {
        if (large_page_3_final) {
          page_4_right_price[i].textContent = "+$20/yr";
          main_page_4_group[2].style.display = "flex";
        } else {
          main_page_4_group[2].style.display = "none";
        }
      }
    }
    if (final_page_checkup[i] === final_page_checkup[3]) {
      if (monthly_yearly) {
        if (customizable_page_3_final) {
          page_4_right_price[i].textContent = "+$2/mo";
          main_page_4_group[3].style.display = "flex";
        } else {
          main_page_4_group[3].style.display = "none";
        }
      } else {
        if (customizable_page_3_final) {
          page_4_right_price[i].textContent = "+$20/yr";
          main_page_4_group[3].style.display = "flex";
        } else {
          main_page_4_group[3].style.display = "none";
        }
      }
    }
  }

  ///////////////////////////
  if (monthly_yearly) {
    final_page_checkup[4].textContent = "Total (Per Month)";
    page_4_right_price[4].textContent = `+$${Total_sum}/mo`;
    console.log("Loop is running monthly");
  } else {
    final_page_checkup[4].textContent = "Total (Per Year)";
    page_4_right_price[4].textContent = `+$${Total_sum}/yr`;
    console.log("Loop is running yearly");
  }
  document.getElementById("main_page_3").style.display = "none";
  document.getElementById("main_page_4").style.display = "flex";

  /* Mobile version code */
});

const page_3_btn_previous_step = document.getElementById(
  "page_3_btn_previous_step"
);
page_3_btn_previous_step.addEventListener("click", () => {
  if (monthly_yearly) {
    if (main_page_2_group[0].style.borderColor === "darkblue") {
      Total_sum -= 9;
      console.log(Total_sum);
    }
    if (main_page_2_group[1].style.borderColor === "darkblue") {
      Total_sum -= 12;
      console.log(Total_sum);
    }
    if (main_page_2_group[2].style.borderColor === "darkblue") {
      Total_sum -= 15;
      console.log(Total_sum);
    }
  } else {
    if (main_page_2_group[0].style.borderColor === "darkblue") {
      Total_sum -= 90;
      console.log(Total_sum);
    }
    if (main_page_2_group[1].style.borderColor === "darkblue") {
      Total_sum -= 120;
      console.log(Total_sum);
    }
    if (main_page_2_group[2].style.borderColor === "darkblue") {
      Total_sum -= 150;
      console.log(Total_sum);
    }
  }
  document.getElementById("main_page_3").style.display = "none";
  document.getElementById("main_page_2").style.display = "flex";

  num[2].style.backgroundColor = "transparent";
  num[2].style.color = "white";
  num[1].style.backgroundColor = "lightblue";
  num[1].style.color = "darkblue";
});

/* Main page 4 start */

const change_page4 = document.getElementById("change_page4");
change_page4.addEventListener("click", () => {
  document.getElementById("main_page_4").style.display = "none";
  document.getElementById("main_page_3").style.display = "none";
  document.getElementById("main_page_2").style.display = "none";
  document.getElementById("main_page_1").style.display = "flex";
  num[0].style.backgroundColor = "lightblue";
  num[0].style.color = "darkblue";
  num[1].style.backgroundColor = "transparent";
  num[2].style.backgroundColor = "transparent";
  num[3].style.backgroundColor = "transparent";
  num[1].style.color = "white";
  num[2].style.color = "white";
  num[3].style.color = "white";

  if (monthly_yearly) {
    if (main_page_2_group[0].style.borderColor === "darkblue") {
      Total_sum -= 9;
      console.log(Total_sum);
    }
    if (main_page_2_group[1].style.borderColor === "darkblue") {
      Total_sum -= 12;
      console.log(Total_sum);
    }
    if (main_page_2_group[2].style.borderColor === "darkblue") {
      Total_sum -= 15;
      console.log(Total_sum);
    }
  } else {
    if (main_page_2_group[0].style.borderColor === "darkblue") {
      Total_sum -= 90;
      console.log(Total_sum);
    }
    if (main_page_2_group[1].style.borderColor === "darkblue") {
      Total_sum -= 120;
      console.log(Total_sum);
    }
    if (main_page_2_group[2].style.borderColor === "darkblue") {
      Total_sum -= 150;
      console.log(Total_sum);
    }
    if (monthly_yearly) {
      if (main_page_3_group[0].style.borderColor === "darkblue") {
        Total_sum -= 1;
        console.log(Total_sum);
        online_page_3_final = 0;
      }
      if (main_page_3_group[1].style.borderColor === "darkblue") {
        Total_sum -= 2;
        console.log(Total_sum);
        large_page_3_final = 0;
      }
      if (main_page_3_group[2].style.borderColor === "darkblue") {
        Total_sum -= 2;
        console.log(Total_sum);
        customizable_page_3_final = 0;
      }
    } else {
      if (main_page_3_group[0].style.borderColor === "darkblue") {
        Total_sum -= 10;
        console.log(Total_sum);
        online_page_3_final = 0;
      }
      if (main_page_3_group[1].style.borderColor === "darkblue") {
        Total_sum -= 20;
        console.log(Total_sum);
        large_page_3_final = 0;
      }
      if (main_page_3_group[2].style.borderColor === "darkblue") {
        Total_sum -= 20;
        console.log(Total_sum);
        customizable_page_3_final = 0;
      }
    }
  }
});

const page_4_btn_next_step = document.getElementById("page_4_btn_next_step");
const page_4_btn_previous_step = document.getElementById(
  "page_4_btn_previous_step"
);
page_4_btn_previous_step.addEventListener("click", () => {
  document.getElementById("main_page_3").style.display = "flex";
  document.getElementById("main_page_4").style.display = "none";
  num[3].style.backgroundColor = "transparent";
  num[3].style.color = "white";

  num[2].style.backgroundColor = "lightblue";
  num[2].style.color = "darkblue";

  if (monthly_yearly) {
    if (main_page_3_group[0].style.borderColor === "darkblue") {
      Total_sum -= 1;
      console.log(Total_sum);
      online_page_3_final = 0;
    }
    if (main_page_3_group[1].style.borderColor === "darkblue") {
      Total_sum -= 2;
      console.log(Total_sum);
      large_page_3_final = 0;
    }
    if (main_page_3_group[2].style.borderColor === "darkblue") {
      Total_sum -= 2;
      console.log(Total_sum);
      customizable_page_3_final = 0;
    }
  } else {
    if (main_page_3_group[0].style.borderColor === "darkblue") {
      Total_sum -= 10;
      console.log(Total_sum);
      online_page_3_final = 0;
    }
    if (main_page_3_group[1].style.borderColor === "darkblue") {
      Total_sum -= 20;
      console.log(Total_sum);
      large_page_3_final = 0;
    }
    if (main_page_3_group[2].style.borderColor === "darkblue") {
      Total_sum -= 20;
      console.log(Total_sum);
      customizable_page_3_final = 0;
    }
  }
  /* Mobile version code */
  /* if ((main.style.height = "400px")) {
    
    main.style.height = " auto";
    
  } */
});
page_4_btn_next_step.addEventListener("click", () => {
  document.getElementById("main_page_5").style.display = "flex";
  document.getElementById("main_page_4").style.display = "none";
});
