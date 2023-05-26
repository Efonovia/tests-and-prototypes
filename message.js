let objDiv = document.querySelector('.message-area');
document.getElementById('chat').focus();
objDiv.scrollTop = objDiv.scrollHeight;

const mt = new Date();


document.querySelector('#chat').addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        const textAreaDiv = document.createElement('div');
        textAreaDiv.className = 'text-area';
        const para = document.createElement("p");
        para.className = 'text';
        const timeSpan = document.createElement("span");
        timeSpan.className = 'time-area';
        timeSpan.textContent = mt.getHours() + ":" + mt.getMinutes();
        let message = document.getElementById('chat').value;
        
        const text = document.createTextNode(message);

        if (message !== "") {
            para.appendChild(text);
            textAreaDiv.appendChild(para);
            textAreaDiv.appendChild(timeSpan);
            document.querySelector('.message-area').appendChild(textAreaDiv);

            console.log(message);
            objDiv.scrollTop = objDiv.scrollHeight;
            document.getElementById('chat').value = '';
        }
        
    }
})

// document.onkeyup = function(e) {
//     if (e.keyCode == 77) {
//       alert("M key was pressed");
//     } else if (e.ctrlKey && e.keyCode == 66) {
//       alert("Ctrl + B shortcut combination was pressed");
//     } else if (e.ctrlKey && e.altKey && e.keyCode == 89) {
//       alert("Ctrl + Alt + Y shortcut combination was pressed");
//     } else if (e.ctrlKey && e.altKey && e.shiftKey && e.keyCode == 85) {
//       alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
//     }
//   };

document.querySelector("body").addEventListener('keydown', function(event) {
    console.log(event.keycode);
})

