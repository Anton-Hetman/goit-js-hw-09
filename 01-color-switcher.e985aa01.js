!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=a();function a(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.disabled=!0,t.addEventListener("click",(function(){n=setInterval((function(){var t=a();document.body.style.backgroundColor=t}),1e3),e.disabled=!1,t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.e985aa01.js.map
