Chat-App Tutorial -> https://www.youtube.com/watch?v=ZwFA3YMfkoc&feature=youtu.be

CORS -> Durch das Einsetzen des CORS Package als Middleware im Express-Server werden die nötigen Header gesendet, so dass
        der Browser sich nicht beschwer, wenn ich von Localhost oder All-Ink auf den Heroku-Server zugreifen.


Server-Re-Deploy
        heroku login
        git add .
        git commit -m 'another commit'
        git push heroku master
        Unter https://jorroch-consulting.herokuapp.com/ prüfen