const htmlCode=document.querySelector("#html");
const cssCode=document.querySelector("#css");
const jsCode=document.querySelector("#js")
const output=document.querySelector("#output")

function run()
{
    localStorage.setItem('htmlCode',htmlCode.value);
    localStorage.setItem('cssCode',cssCode.value);
    localStorage.setItem('jsCode',jsCode.value);
    output.contentDocument.body.innerHTML=`<style>${localStorage.cssCode}</style>`+localStorage.htmlCode;
    output.contentWindow.eval(localStorage.jsCode);
}

htmlCode.addEventListener('keyup',()=>run())
cssCode.addEventListener('keyup',()=>run())
jsCode.addEventListener('keyup',()=>run())

htmlCode.value=localStorage.htmlCode;
cssCode.value=localStorage.cssCode;
jsCode.value=localStorage.jsCode;