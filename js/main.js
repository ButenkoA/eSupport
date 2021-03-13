const submitBtn = document.getElementById('submitBtn');
submitBtn.onclick = () => {
    const o = document.getElementById('mySelect').options.selectedIndex;
    const origin = document.getElementById('mySelect').options[o].text;
    const s = document.getElementById('select').options.selectedIndex;
    const state = document.getElementById('select').options[s].text;
    const clientName = document.getElementById('client-name').value;
    const csName = document.getElementById('cs-name').value;
    const caseN = document.getElementById('input-case').value;
    setResult(origin, state, clientName, csName, caseN);

}

setResult = (origin, state, clientName, csName, caseN) => {
    let result;
    switch (origin) {
        case "original":
            switch (state) {
                case "new":
                    result = `Dear ${clientName},
                        <br><br>Thank you for contacting us.
                        <br><br>We have identified that you have another case (ID ${caseN}) open with us regarding the same matter. We have reviewed that case and sent an update via the original case.
                        <br><br>If you require any additional assistance or have any further comments, please do not hesitate to write back to us. In order to keep all the communication in one place and make sure that we are able to provide faster service, please send all future communication regarding this matter through case ID ${caseN}.
                        <br><br>Thank you for your understanding.
                        <br><br>Best Regards,
                        <br>${csName}.
                        <br>eToro Customer Support`;
                    break;
                case "reopen":
                    result = `Dear ${clientName},
                        <br><br>Thank you for coming back to us.
                        <br><br>We have identified that you have another case (ID ${caseN}) open with us regarding the same matter. We have reviewed that case and sent an update via the original case.
                        <br><br>If you require any additional assistance or have any further comments, please do not hesitate to write back to us. In order to keep all the communication in one place and make sure that we are able to provide faster service, please send all future communication regarding this matter through case ID ${caseN}.
                        <br><br>Thank you for your understanding.
                        <br><br>Best Regards,
                        <br>${cstName}.
                        <br>eToro Customer Support`;
                    break;
            }
            break;
        case "duplicated":
            switch (state) {
                case "new":
                    result = `
                        Internal comment:
                        <br><br>duplicated case<br> original CASE ${caseN}
                        <br>please keep all the communication there`;
                    break;
                case "reopen":
                    result = `internal coment:
                        <br><br>duplicated case<br> original CASE ${caseN}
                        <br>please keep all the communication there`;
                    break;
            }
            break;
    }
    document.getElementById('result').innerHTML = `${result}`;
}


const CopyTo = document.getElementById('btnCopy')

CopyTo.onclick = () => {
    let copyText = document.getElementById('result').innerText;
    let elem = document.createElement('textarea');
    document.body.appendChild(elem);
    elem.value = copyText;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    // alert("Copied to clipboard!");
}