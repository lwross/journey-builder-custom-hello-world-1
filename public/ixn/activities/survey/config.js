define([], function(){      
    return {
        "icon": "images/jb-icon.jpg",
        "iconSmall": "images/jb-icon.jpg", 
        "key": "dewalt-survey-demo",
        "partnerApiObjectTypeId": "IXN.CustomActivity.REST",
        "lang": {
            "en-US": {        
                "name": "Survey",
                "description": "Activity simply posts the data into an array for display on the App's home page."
            }
        },
        "category": "messaging",
        "version": "1.0",
        "apiVersion": "1.0",
       "execute": {
            "uri": "https://cnx14-sbd-jb-interaction.herokuapp.com/ixn/activities/survey/execute/",
			"inArguments": [],
			"outArguments": [],
            "verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
		},
        "save": {
            "uri": "https://cnx14-sbd-jb-interaction.herokuapp.com/ixn/activities/survey/save/",
			"verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
        },
        "publish": {
            "uri": "https://cnx14-sbd-jb-interaction.herokuapp.com/ixn/activities/survey/publish/",
            "verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
        },
        "validate": {
            "uri": "https://cnx14-sbd-jb-interaction.herokuapp.com/ixn/activities/survey/validate/",
            "verb": "POST",
			"body": "",
            "format": "json",
            "useJwt": false,
            "timeout": 3000
        },

        "edit": {
            "uri": "https://cnx14-sbd-jb-interaction.herokuapp.com/ixn/activities/survey/",
            "height": 400,
            "width": 600
        }
};
});
