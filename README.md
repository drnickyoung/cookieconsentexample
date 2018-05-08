# Alternative Opt-in
An alternative opt-in cookie consent derived from cookieconsent.insites.com (see [https://github.com/insites/cookieconsent/](https://github.com/insites/cookieconsent/)).

**Please note**

* I have aimed this for a site without any marketing, tracking or other cookies, just essential. 
* I am not a GDPR expert, this is not a full solution, just an example. Full requirements need you to get consent for each type of cookie you wish to set (marketing, analytics, etc.). It is down to you to check your implementation/use meets the requirements.

## What is this example?
So using the JavaScript API ([JavaScript API](http://cookieconsent.insites.com/documentation/javascript-api/)) I have created an alternative Opt-in. Please note this is a rough example and could **(a)** be enchanced and cleaned up and **(b)** possibly added back into the original library as an alternative Opt-in method.

The Opt-in that comes with [Cookie Consent](http://cookieconsent.insites.com/) is good and works. This is what it looks like:

![](images/original.png)

However looking to use it with the GDPR changes and I believe it will not fit. The changes note that there needs to be a clear way to change your mind about cookies so you can easily enable or disable them. The current way to change your mind, shown below, automatically revokes your choice when you click it. What if you were just looking to see what you selected, too bad all your settings have just been revoked!

![](images/revoke.png)

I have created an **example** to change this. Firstly I have replaced the dismiss button with a deny button. In other words it is no longer **allow** or **dismiss** but **allow** or **deny** so a visitor has to make a choice and we do not assume anything. I have changed the default wording slightly as I believe essential cookies are still allowed (I might be wrong!). The buttons, allow and deny now highlight which option you have selected (see below).

![](images/settings_alt_1.png) ![](images/settings_alt_2.png)

The second bit to this is that once an option is selected there is a pop up, the revoke button, that lets you change your choice (see below). I have overridden the code for this so that cookies are **NOT** deleted when you click it but that it simply display the selection bar showing your current choice. If decline is now clicked selected all current cookies are deleted unless you have deemed them essential (array in the code for that option).

![](images/revoke_alt.png)

## How do I use it?

This is based on [https://github.com/insites/cookieconsent/](https://github.com/insites/cookieconsent/) so first I would suggest taking a look at their documentation. Second look in the examples folder, there is basic HTML, CSS and JS files. Most should be easy to follow. 

## Other libraries

* gdpr-cookie-notice (my version - [https://github.com/drnickyoung/gdpr-cookie-notice](https://github.com/drnickyoung/gdpr-cookie-notice) / (original version - [https://github.com/passatgt/gdpr-cookie-notice](https://github.com/passatgt/gdpr-cookie-notice))
* gdpr-cookie - [https://github.com/southcoastweb/gdpr-cookie](https://github.com/southcoastweb/gdpr-cookie)
* tarteaucitron - [https://github.com/AmauriC/tarteaucitron.js?files=1](https://github.com/AmauriC/tarteaucitron.js?files=1)
* GDPR-Cookie-Compliance - [https://github.com/Jyxon/GDPR-Cookie-Compliance](https://github.com/Jyxon/GDPR-Cookie-Compliance)

## Disclaimer

I am not a GDPR expert, this is not a full solution, just an example. Full requirements need you to get consent for each type of cookie you wish to set (marketing, analytics, etc.). It is down to you to check your implementation/use meets the requirements.
