new SmoothScroll('a[href*="#"]', {
  speed: 800,
  easing: 'easeInOutQuad'
});

// BUp-Hf3JpG8Z2DwLJAmeww

// $.ajax({
//   type: “POST”,
//   url: “https://mandrillapp.com/api/1.0/messages/send.json”,
//   data: {
//     ‘key’: ‘YOUR API KEY HERE’,
//     ‘message’: {
//       ‘from_email’: ‘YOUR@EMAIL.HERE’,
//       ‘to’: [
//           {
//             ‘email’: ‘RECIPIENT_NO_1@EMAIL.HERE’,
//             ‘name’: ‘RECIPIENT NAME (OPTIONAL)’,
//             ‘type’: ‘to’
//           },
//           {
//             ‘email’: ‘RECIPIENT_NO_2@EMAIL.HERE’,
//             ‘name’: ‘ANOTHER RECIPIENT NAME (OPTIONAL)’,
//             ‘type’: ‘to’
//           }
//         ],
//       ‘autotext’: ‘true’,
//       ‘subject’: ‘YOUR SUBJECT HERE!’,
//       ‘html’: ‘YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!’
//     }
//   }
//  }).done(function(response) {
//    console.log(response); // if you're into that sorta thing
//  });

const sendMailBtn = document.getElementById("send-me-button");

sendMailBtn.addEventListener("click", getInTouch);

function getInTouch() {
  const data = validateForm();
  sendMail(data);
}
function validateForm() {
  const name = document.getElementById('name');
  const topics = document.getElementById('topics');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // if (name == "") {
  //   return
  // }

  var formatMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(formatMail)) {
    return true;
  } else {
    console.log("You have entered an invalid email address!");
    email.focus();
    return false;
  }

  return { test: "test" };
}
function sendMail(data) {
  console.log(data);
}
