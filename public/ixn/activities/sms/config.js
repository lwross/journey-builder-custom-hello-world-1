define([], function(){      
    return {
        "icon": "images/sms.png",
        "iconSmall": "images/sms.png", 
        "key": "dewalt-survey-demo",
        "partnerApiObjectTypeId": "IXN.CustomActivity.REST",
        "lang": {
            "en-US": {        
                "name": "Send SMS",
                "description": "Activity simply posts the data into an array for display on the App's home page."
            }
        },
        "category": "messaging",
        "version": "1.0",
        "apiVersion": "1.0",
       "execute": {
            "uri": "https://cnx14-sbd-jb-interaction.herokuapp.com/ixn/activities/sms/execute/",
			"inArguments": [],
			"outArguments": [],
            "verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
		},
        "save": {
            "uri": "https://cnx14-sbd-jb-interaction.herokuapp.com/ixn/activities/sms/save/",
			"verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
        },
        "publish": {
            "uri": "https://cnx14-sbd-jb-interaction.herokuapp.com/ixn/activities/sms/publish/",
            "verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
        },
        "validate": {
            "uri": "https://cnx14-sbd-jb-interaction.herokuapp.com/ixn/activities/sms/validate/",
            "verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
        },

        "edit": {
            "uri": "https://cnx14-sbd-jb-interaction.herokuapp.com/ixn/activities/sms/",
            "height": 400,
            "width": 600
        }
};
});
