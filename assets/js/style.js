var wheel=document.querySelector("#wheel"),button=document.querySelector("#button"),rando=0,modal=document.getElementById("myModal"),premiumCount=parseInt(localStorage.getItem("premium")?localStorage.getItem("premium"):0),specialCount=parseInt(localStorage.getItem("special")?localStorage.getItem("special"):0),premiumLimit=parseInt(localStorage.getItem("premiumLimit")?localStorage.getItem("premiumLimit"):0),specialLimit=parseInt(localStorage.getItem("specialLimit")?localStorage.getItem("specialLimit"):0);function RandomNumber(e,t,o){for(var l=o.concat().sort(function(e,t){return e-t}),i=t-l.length,a=Math.floor(Math.random()*(i-e+1))+e,n=0;n<l.length;n++)a>=l[n]&&a++;return a}var excludedResults=[];if(console.log("limit prem",premiumLimit),premiumCount>premiumLimit)for(var i=135;i<=179;i++)excludedResults.push(i);if(console.log("limit spec",specialLimit),specialCount>specialLimit){console.log("true?????");for(i=0;i<=44;i++)excludedResults.push(i);for(i=90;i<=134;i++)excludedResults.push(i);for(i=180;i<=224;i++)excludedResults.push(i);for(i=270;i<=360;i++)excludedResults.push(i)}$("#premium").text(premiumCount),$("#special").text(specialCount),document.getElementById("premium-input").setAttribute("value",premiumLimit),document.getElementById("special-input").setAttribute("value",specialLimit);var settings=new Foundation.Reveal($("#settingsModal")),errorLogin=new Foundation.Reveal($("#errorLogin"));$("#settings-login").submit(function(e){e.preventDefault(),"sagaevents"==$("#password").val()?settings.open():errorLogin.open()}),$("#set-limit").submit(function(e){e.preventDefault(),localStorage.setItem("premiumLimit",$("#premium-input").val()),localStorage.setItem("specialLimit",$("#special-input").val())}),$("#reset-counter").on("click",function(e){localStorage.setItem("premium",0),localStorage.setItem("special",0)}),console.log("range",excludedResults);var spin_wheel=function(){rando=RandomNumber(0,360,excludedResults)+2880,console.log("random-raw",rando),console.log("random + 2880",rando-2880),wheel.style.webkitTransform="rotate("+rando+"deg)",wheel.style.mozTransform="rotate("+rando+"deg)",wheel.style.msTransform="rotate("+rando+"deg)",wheel.style.transform="rotate("+rando+"deg)"};console.log("prem",premiumCount),console.log("spec",specialCount),wheel.addEventListener("transitionend",function(e){var t=rando-2880,o=$(".modal-result h2");console.log("test",t),t>=0&&t<=44&&(console.log("smile 1"),o.text("Give your current look a makeover with whatever you can grab around.")),t>=45&&t<=89&&(console.log("sad 4"),o.text("Stage a fashion photoshoot and share your photos online using the hashtags.")),t>=90&&t<=134&&(console.log("wink 3"),o.text("Strut like a model on a runway.")),t>=135&&t<=179&&(console.log("cool 2"),o.text("Switch any item of clothing with a friend then post your OOTDs online.")),t>=180&&t<=224&&(console.log("laugh1 1"),o.text("Give your current look a makeover with whatever you can grab around.")),t>=225&&t<=269&&(console.log("cry 4"),o.text("Stage a fashion photoshoot and share your photos online using the hashtags.")),t>=270&&t<=314&&(console.log("heart 3"),o.text("Strut like a model on a runway.")),t>=315&&t<=360&&(console.log("laugh2 2"),o.text("Switch any item of clothing with a friend then post your OOTDs online.")),modal.style.display="block",localStorage.setItem("special",specialCount),localStorage.setItem("premium",premiumCount)},!1),button.addEventListener("click",spin_wheel,!1);