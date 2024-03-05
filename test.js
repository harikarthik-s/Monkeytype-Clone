const testConfiguration = document.querySelector(".test-config");

let testConfig = {
  "include-to-test": [],
  "test-by": "time",
  "time-word-config": 60,
};

testConfiguration.addEventListener("change", handleTestConfigChange);
window.addEventListener("DOMContentLoaded", setUpTestConfigurationContainer);

function handleTestConfigChange(e) {
  const { name, value } = e.target;
  if (name === "test-by") {
    testConfig = { ...testConfig, [name]: value };
  }
  if (name === "time-word-config") {
    testConfig = { ...testConfig, [name]: parseInt(value) };
  }
  
  if (name === "include-to-test") {
    const checkBoxes = document.querySelectorAll(`input[name="${name}"]`);
    const checkedBoxesValue = [];

    for (let box of checkBoxes) {
      if (box.checked) {
        checkedBoxesValue.push(box.value);
      }
    }

    testConfig = { ...testConfig, [name]: checkedBoxesValue };
  }

  // Update test configuration container
  setUpTestConfigurationContainer();
}

function setUpTestConfigurationContainer() {
  const timeWordConfigs = document.querySelectorAll(".time-word-config");
  if (testConfig["test-by"] === "time") {
    timeWordConfigs.forEach((elm) => elm.classList.add("time"));
  } else {
    timeWordConfigs.forEach((elm) => elm.classList.remove("time"));
  }
}
