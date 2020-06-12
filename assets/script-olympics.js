	function countdownTimer(elementId, repeatCheckTime) {
		//function countdownTimer(elementId) {
			var toTime = new Date('Jul 23, 2021 00:00:00');
			toTime = toTime.getTime(); var elem = document.getElementById(elementId); function update() {
				var curTime = new Date().getTime();
				var d = toTime - curTime;
				d = Math.floor(d / (1000 * 60 * 60 * 24));
				elem.innerHTML = "" + d;
			} update();
			if (repeatCheckTime && repeatCheckTime > 0) {
				setInterval(update, repeatCheckTime*1000);
			}
		}
		
	$(function (){
		
		countdownTimer('countdownNumber',2);
	});		
	
	(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=245846166498088&version=v7.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
    
var coll = document.getElementsByClassName("collapsed");
        var i;
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function(e) {

            e.preventDefault();
            this.parentElement.parentElement.classList.toggle("active");
            var content = this.parentElement.nextElementSibling;
            if (content.style.maxHeight){
              content.style.maxHeight = null;
              content.style.paddingBottom = "0px";
              this.classList.remove("open");
            } else {
              content.style.maxHeight = (parseInt(content.scrollHeight) + 20) + "px";
              content.style.paddingBottom = "20px";
              this.classList.add("open");
            } 
          });
        }
        $(document).ready(function() {
          var owl = $('.owl-carousel');
          owl.owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            items: 2,
            dots: false,
            center: true,
            responsive: {
              500: {
                items: 4
              },
              768: {
                items: 4,
                center: false
              }
            }
          })
        })