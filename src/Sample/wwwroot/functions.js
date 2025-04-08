function configure() {
    var pp = window.powerplanning;
    if (pp == null) return;
    cleanResults();
    pp.Configurate({ Url: 'https://localhost:9999' });
}

function impersonate() {
    var pp = window.powerplanning;
    if (pp == null) return;
    const el = document.getElementById('email');
    cleanResults();
    pp.Impersonate(el.value);
}

function undoImpersonate() {
    const pp = window.powerplanning;
    if (pp == null) return;
    cleanResults();
    pp.UndoImpersonate();
}

function isImpersonated() {
    var pp = window.powerplanning;
    if (pp == null) return;
    cleanResults();
    pp.IsImpersonated()
        .then((response) => logResult(response))
        .catch((e) => logException(e));
}

function isAuthenticated() {
    var pp = window.powerplanning;
    if (pp == null) return;
    cleanResults();
    pp.IsAuthenticated()
        .then((response) => logResult(response))
        .catch((e) => logException(e));
}

function getCurrentUserEmail() {
    var pp = window.powerplanning;
    if (pp == null) return;
    cleanResults();
    pp.GetCurrentUserEmail()
        .then((email) => logResult(email))
        .catch((e) => logException(e));
}

function getObjects() {
    var pp = window.powerplanning;
    if (pp == null) return;
    cleanResults();
    var elp = document.getElementById('objectsParent');
    pp.GetObjects(elp.value)
        .then((objects) => logResult(objects, 'Name'))
        .catch((e) => logException(e));
}

function cleanResults() {
    const elx = document.getElementById('exception');
    elx.value = '';
    const el = document.getElementById('logResult');
    while (el.childNodes.length > 0)
        el.removeChild(el.childNodes[0]);
}

function logResult(result, propertyName) {
    const el = document.getElementById('logResult');
    cleanResults();
    if (result == null) return;
    const results = Array.isArray(result) ? result : [result];
    const fragment = document.createDocumentFragment();
    for (const r of results) {
        const elc = document.createElement('span');
        if (typeof r === 'object' && r !== null && propertyName in r) {
            elc.innerText = r[propertyName];
        }
        else {
            elc.innerText = result;
        }
        fragment.appendChild(elc);
        const elbr = document.createElement('br');
        fragment.appendChild(elbr);
    }
    el.appendChild(fragment);
}

function logException(exception) {
    const el = document.getElementById('exception');
    el.value = exception;
}

function CreateOptions()
{
    var elc = document.getElementById('objectCode');
    var obj = {};
    obj.Code = elc.value;
    return (obj);
}

function create1() {
    var pp = window.powerplanning;
    if (pp == null) return;
    var el = document.getElementById('obj1');
    pp.Create(el, CreateOptions());
}

function create2() {
    var pp = window.powerplanning;
    if (pp == null) return;
    var el = document.getElementById('obj2');
    pp.Create(el, CreateOptions());
}

function create3() {
    var pp = window.powerplanning;
    if (pp == null) return;
    var el = document.getElementById('obj3');
    pp.Create(el, CreateOptions());
}

function destroy() {
    var pp = window.powerplanning;
    if (pp == null) return;
    pp.Destroy();
}

function logout() {
    var pp = window.powerplanning;
    if (pp == null) return;
    pp.Logout();
}