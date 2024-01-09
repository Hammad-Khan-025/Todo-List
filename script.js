/*global document */

function Add(){
    let inputField = document.getElementById("input-field");
    let textField = document.querySelector(".text");

    let inputValue = inputField.value.trim();
    let model = document.getElementById('staticBackdrop');

    if(inputValue === ""){
        // Show the Bootstrap modal if the input field is empty
        let myModal = new bootstrap.Modal(model);
        myModal.show();

    }
    else{
        let newElement = document.createElement("ul");
        newElement.innerHTML = ` <div class="list-items d-flex justify-content-between border px-5 py-3">
                                    <li>${inputField.value}</li>
                                    <button class="text-secondary" data-toggle="tooltip" 
                                    data-placement="left" title="Delete"><i class="fa-solid fa-xmark"></i></button>
                                </div>`;
                                
        textField.appendChild(newElement);
        inputField.value = "";

        function remove(){
            newElement.remove();
        }

        newElement.querySelector("i").addEventListener("click", remove);
    }
}
// ----------------------key down---------------------------

function handleKey(event) {
    if (event.key === 'Enter') {
      Add();
    }
  }

