
(function ($) {
  var BrowserClass = {
    init: function() {
      this.agent = navigator.userAgent.toLowerCase();
      this.browser = this.checkBrowser();
      this.platform = this.checkPlatform();
      this.classes = this.browser.concat(this.platform);
    },

    checkBrowser: function() {
      var classes = Array();

      if (this.agent.match(/msie/)) {
        classes.push('ie');

        reg_res = this.agent.match(/.*msie ([0-9]*)\..*/);
        classes.push(reg_res[1]);

      }

      if (this.agent.match(/opera/)) {
        classes.push('opera');
      }

      // Chrome is send safari header too
      if (this.agent.match(/chrome/)) {
        classes.push('chrome');
      } else if (this.agent.match(/safari/)) {
        classes.push('safari');
      }

      if (this.agent.match(/netscape/)) {
        classes.push('netscape');
      }

      if (this.agent.match(/firefox/)) {
        classes.push('ff');
      }

      if (this.agent.match(/konqueror/)) {
        classes.push('konqueror');
      }

      if (this.agent.match(/dillo/)) {
        classes.push('dillo');
      }

      if (this.agent.match(/chimera/)) {
        classes.push('chimera');
      }

      if (this.agent.match(/beonex/)) {
        classes.push('beonex');
      }

      if (this.agent.match(/aweb/)) {
        classes.push('aweb');
      }

      if (this.agent.match(/amaya/)) {
        classes.push('amaya');
      }

      if (this.agent.match(/icab/)) {
        classes.push('icab');
      }

      if (this.agent.match(/lynx/)) {
        classes.push('lynx');
      }

      if (this.agent.match(/galeon/)) {
        classes.push('galeon');
      }

      if (this.agent.match(/opera mini/)) {
        classes.push('operamini');
      }

      return classes;
    },

    checkPlatform: function() {
      var classes = Array();

      if (this.agent.match(/windows/)) {
        classes.push('win');
      }

      if (this.agent.match(/ipad/)) {
        classes.push('ipad');
      }

      if (this.agent.match(/ipod/)) {
        classes.push('ipod');
      }

      if (this.agent.match(/iphone/)) {
        classes.push('iphone');
      }

      if (this.agent.match(/mac/)) {
        classes.push('mac');
      }

      if (this.agent.match(/android/)) {
        classes.push('android');
      }

      if (this.agent.match(/linux/)) {
        classes.push('linux');
      }

      if (this.agent.match(/nokia/)) {
        classes.push('nokia');
      }

      if (this.agent.match(/blackberry/)) {
        classes.push('blackberry');
      }

      if (this.agent.match(/freebsd/)) {
        classes.push('freebsd');
      }

      if (this.agent.match(/openbsd/)) {
        classes.push('openbsd');
      }

      if (this.agent.match(/netbsd/)) {
        classes.push('netbsd');
      }

      return classes;
    }

  };

  BrowserClass.init();
  $('body').addClass(BrowserClass.classes.join(' '));
})(jQuery);;
/**
 * Location/Country selector handles location popup.
 * 
 * Copyright (c) 2011 LinkedIn Corporation. All rights reserved.
 * @author Tan Nhu, tnhu@linkedin.com
 * @date 2011-05-10
 */
(function($) {
	var selector = $(".language-selector"),
		isMouseInSelector = false,
		isMouseInAnchor = false;

	/**
	 * Hide language selector.
	 */
	function hideLanguageSelector() {
		isMouseInSelector = false;
		isMouseInAnchor = false;
		selector.css("display", "none");
	}

	/**
	 * Timeout function to hide language selector.
	 */
	function hideSelectorTimeout() {
		if ( !isMouseInSelector && !isMouseInAnchor) {
			hideLanguageSelector();
		} else {
			setTimeout(hideSelectorTimeout, 1000);
		}
	}
	
	$(".select-lang .default-color").bind("mouseenter", function() {
		var th = $(this),
			offset = th.offset();

		selector.appendTo("body").css({ 
			left: offset.left + "px", 
			top: (offset.top + 15) + "px",
			display: "block" 
		});
		
		isMouseInAnchor = true;
		hideSelectorTimeout();
	}).bind("mouseleave", function() {
		isMouseInAnchor = false;
	});

	selector.bind("mouseenter", function() {
		isMouseInSelector = true;
	}).bind("mouseleave", function() {
		isMouseInSelector = false;
	});
})(jQuery);;
/**
 * Make all external links opened in new tab.
 * 
 * Copyright (c) 2011 LinkedIn Corporation. All rights reserved.
 * @author Tan Nhu, tnhu@linkedin.com
 * @date 2011-05-17
 */
(function($) {
	$(document).ready(function() {
		$("a").each(function() {
			var	th = $(this),
				isExternal = !th.hasClass("no-external-link"),
				href = th.attr("href"),
				host = window.location.host,
				target = $.trim(th.attr("target")),
				test;
			
			if (isExternal && !target) {
				test = /^http:\/\//.test(href) && href.indexOf(host) == -1;
				
				if (test) {
					th.attr("target", "_blank");
				}
			}
		});
	});
})(jQuery);;
