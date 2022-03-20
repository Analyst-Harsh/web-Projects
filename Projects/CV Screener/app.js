console.log("inluded script");
let index = 0;
let selectedCandidates =[]
const data = [
  {
    name: "Raj",
    location: "Mumbai",
    age: "27",
    language: "Python",
    framework: "Django",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Mukesh Ambani",
    location: "Mumbai",
    age: "29",
    language: "Java",
    framework: "Django",
    img: "https://randomuser.me/api/portraits/men/79.jpg",
  },
  {
    name: "Steve Jobs",
    location: "Mumbai",
    age: "37",
    language: "Javascript",
    framework: "Django",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Elon Musk",
    location: "Bangalore",
    age: "27",
    language: "C#",
    framework: "Flask",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Jeff Beezos",
    location: "US",
    age: "47",
    language: "Go",
    framework: "Flask",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    name: "Ratan Tata",
    location: "Bangalore",
    age: "57",
    language: "C#",
    framework: "Flask",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Gautam Adani",
    location: "Gujrat",
    age: "37",
    language: "Java",
    framework: "Blockchain",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

let sel = document.getElementById("select");
sel.addEventListener("click", () => {
selectedCandidates.push(data[index].name)
  nextProfile(++index);
});

let rej = document.getElementById("reject");
rej.addEventListener("click", () => {
  nextProfile(++index);
});

let nextProfile = (val = 0) => {
  let card = document.getElementById("cardBody");
  if (val < data.length) {
    let person = data[val];
    card.innerHTML = `<img src=${person.img} alt="no image found">
    <p class="card-text">
      <ul class="list-group list-group-flush">
          <li class="list-group-item">Name:  ${person.name}</li>
          <li class="list-group-item">Age :  ${person.age}</li>
          <li class="list-group-item">Location: ${person.location}</li>
          <li class="list-group-item">Language : ${person.language}</li>
          <li class="list-group-item">Framework : ${person.framework}</li>
        </ul>
      </p>`;
  } else {
    var myToastEl = document.getElementById("liveToast");
    var myToast = bootstrap.Toast.getOrCreateInstance(myToastEl);
    myToast.show();
  }
};

nextProfile();

let selCan = document.getElementById("selectedCandidates");
selCan.addEventListener("click", () => {
  openSelectedCandidates();
});

let openSelectedCandidates = () => {
    let modalBody = document.getElementById('modal-body');
    let html='';
    selectedCandidates.forEach((element)=>{
        html+= `<li>${element}</li>`
    })
    if(html==''){
        html = 'No candidate is selected yet'
    }
    modalBody.innerHTML = html;
  var myModal = new bootstrap.Modal(document.getElementById("myModal"), {
    keyboard: false,
  });
  var modalToggle = document.getElementById("myModal"); // relatedTarget
  myModal.show(modalToggle);
};
