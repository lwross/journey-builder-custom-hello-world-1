define([], function(){      
    return {
        "icon": "images/push.png",
        "iconSmall": "images/push.png", 
        "key": "dewalt-in-app-offer-demo",
        "partnerApiObjectTypeId": "IXN.CustomActivity.REST",
        "lang": {
            "en-US": {        
                "name": "Promo Offer",
                "description": "Activity simply posts the data into an array for display on the App's home page."
            }
        },
        "category": "messaging",
        "version": "1.0",
        "apiVersion": "1.0",
       "execute": {
            "uri": "https://cnx14-sbd-jb-interaction.herokuapp.com/ixn/activities/push/execute/",
			"inArguments": [],
			"outArguments": [],
            "verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
		},
        "save": {
            "uri": "https://cnx14-sbd-jb-interaction.herokuapp.com/ixn/activities/push/save/",
			"verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
        },
        "publish": {
            "uri": "https://cnx14-sbd-jb-interaction.herokuapp.com/ixn/activities/push/publish/",
            "verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
        },
        "validate": {
            "uri": "https://cnx14-sbd-jb-interaction.herokuapp.com/ixn/activities/push/validate/",
            "verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
        },

        "edit": {
            "uri": "https://cnx14-sbd-jb-interaction.herokuapp.com/ixn/activities/push/",
            "height": 400,
            "width": 600
        }
};
});
