$(document).ready(function() {

    parseCookies();

    if (getCookie("auth", "") != "")
    {
        InitialSettingsSave();
    }

    var authWait = setInterval(function() {

        parseCookies();

        if (getCookie("auth", "") != "" && getCookie("authchange", "false") == "true")
        {
            setCookie("authchange", "false");

            InitialSettingsSave();
        }
    }, 250);

    var appWindow = null;

    function InitialSettingsSave() {

        $("#launch").prop("disabled", false);
        $("#link").html("http://bitbosstest.herokuapp.com/app.html?userid=" + getCookie("userid", "") + "&token=" + getCookie("auth", "") + "&rev=" + rev);

        $.ajax({
            url: "https://api.twitch.tv/kraken/user",
            type: "GET",
            beforeSend: function(xhr)
            {
                xhr.setRequestHeader('Accept', "application/vnd.twitchtv.v5+json");
                xhr.setRequestHeader('Authorization', "OAuth " + getCookie("auth", ""));
                xhr.setRequestHeader('Client-ID', clientId);
            },
            success: function(data) {

                userId = data._id;
                setCookie("userid", userId);
                $("#link").html("http://bitbosstest.herokuapp.com/app.html?userid=" + getCookie("userid", "") + "&token=" + getCookie("auth", "") + "&rev=" + rev);
                // Updates the link once the userid has actually been retrieved. If it's the first time there is no cookie and wouldn't be set before.

                var settings = {
                    overwrite: false,
                    sound: (getCookie("sound", "false") == "true"),
                    trans: (getCookie("trans", "false") == "true"),
                    chroma: (getCookie("chroma", "false") == "true"),
                    persistence: (getCookie("persistent", "false") == "true"),
                    bossHealing: (getCookie("bossheal", "false") == "true"),
                    avtrHidden: (getCookie("hideavtr", "false") == "true"),
                    hpMode: getCookie("hptype", "overkill"),
                    hpInit: parseInt(getCookie("hpinit", "1000")),
                    hpMult: parseInt(getCookie("hpmult", "1")),
                    hpIncr: parseInt(getCookie("hpincr", "100")),
                    hpAmnt: parseInt(getCookie("hpamnt", "1000")),
                    colorBg: getCookie("colorbg", "rgba(34, 34, 34, 1)"),
                    colorHb: getCookie("colorhb", "rgba(255, 0, 0, 1)"),
                    colorHm: getCookie("colorhm", "rgba(255, 165, 0, 1)"),
                    colorHf: getCookie("colorhf", "rgba(0, 128, 0, 1)"),
                    colorTx: getCookie("colorhf", "rgba(255, 255, 255, 1)")
                };

                $.post("/settings/" + userId, settings, function (res) { if (res == "success") { } });
            }
        });
    }

    function LaunchAuth() {

        window.open("https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=" + clientId + "&redirect_uri=" + redirectUri + "&scope=user_read", "", "width=400,height=512");
    }
    function LaunchForce() {

        window.open("https://api.twitch.tv/kraken/oauth2/authorize?response_type=token&client_id=" + clientId + "&redirect_uri=" + redirectUri + "&scope=user_read&force_verify=true", "", "width=400,height=512");
    }
    function LaunchApp() {

        appWindow = window.open("./app.html", "App", "width=350,height=100");
    }
    function LaunchDemo() {

        appWindow = window.open("./demo.html", "Demo", "width=350,height=325");
    }
    function Reset() {

        setCookie("currentBoss", "");
        setCookie("currentHp", "0");
        setCookie("userid", "");
        setCookie("auth", "");
        $("#launch").prop("disabled", true);
        $("#link").html("<span style='color: red;'>App not yet authorized. Authorize the app to get a link.</span>");
    }

    $("#auth").click(LaunchAuth);
    $("#force").click(LaunchForce);
    $("#launch").click(LaunchApp);
    $("#demo").click(LaunchDemo);
    $("#reset").click(Reset);
});
