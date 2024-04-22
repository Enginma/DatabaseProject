<?php
$authenticated=false;
if(isset($_POST['verify']) && $_POST['verify']=='Verify'){
    if(!$authenticated)
    {
        echo "not valid";
    }
}
?>

<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<!doctype html>
<html lang="en">
    <head>
        <title>Login</title>
        <meta charset="utf-8">
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
            rel="stylesheet">
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="css/login.css">
        <script nonce="a05a5ae8-81d8-4ce8-96aa-465f9693052f">
            try {
                (function (w, d) {
                    !function (kL, kM, kN, kO) {
                        kL[kN] = kL[kN] || {};
                        kL[kN].executed = [];
                        kL.zaraz = {
                            deferred: [],
                            listeners: []
                        };
                        kL.zaraz.q = [];
                        kL.zaraz._f = function (kP) {
                            return async function () {
                                var kQ = Array
                                    .prototype
                                    .slice
                                    .call(arguments);
                                kL
                                    .zaraz
                                    .q
                                    .push({m: kP, a: kQ})
                            }
                        };
                        for (const kR of["track", "set", "debug"]) 
                            kL.zaraz[kR] = kL
                                .zaraz
                                ._f(kR);
                        kL.zaraz.init = () => {
                            var kS = kM.getElementsByTagName(kO)[0],
                                kT = kM.createElement(kO),
                                kU = kM.getElementsByTagName("title")[0];
                            kU && (kL[kN].t = kM.getElementsByTagName("title")[0].text);
                            kL[kN].x = Math.random();
                            kL[kN].w = kL.screen.width;
                            kL[kN].h = kL.screen.height;
                            kL[kN].j = kL.innerHeight;
                            kL[kN].e = kL.innerWidth;
                            kL[kN].l = kL.location.href;
                            kL[kN].r = kM.referrer;
                            kL[kN].k = kL.screen.colorDepth;
                            kL[kN].n = kM.characterSet;
                            kL[kN].o = (new Date).getTimezoneOffset();
                            if (kL.dataLayer) 
                                for (
                                    const kY of Object.entries(Object.entries(dataLayer).reduce(((kZ, k$) => ({
                                        ...kZ[1],
                                        ...k$[1]
                                    })), {}))
                                ) 
                                    zaraz.set(kY[0], kY[1], {scope: "page"});
                        kL[kN].q = [];
                            for (; kL.zaraz.q.length;) {
                                const la = kL
                                    .zaraz
                                    .q
                                    .shift();
                                kL[kN]
                                    .q
                                    .push(la)
                            }
                            kT.defer = !0;
                            for (const lb of[localStorage, sessionStorage]) 
                                Object
                                    .keys(lb || {})
                                    .filter((ld => ld.startsWith("_zaraz_")))
                                    .forEach((lc => {
                                        try {
                                            kL[kN]["z_" + lc.slice(7)] = JSON.parse(lb.getItem(lc))
                                        } catch  {
                                            kL[kN]["z_" + lc.slice(7)] = lb.getItem(lc)
                                        }
                                    }));
                            kT.referrerPolicy = "origin";
                            kT.src = "/cdn-cgi/zaraz/s.js?z=" + btoa(
                                encodeURIComponent(JSON.stringify(kL[kN]))
                            );
                            kS
                                .parentNode
                                .insertBefore(kT, kS)
                        };
                        ["complete", "interactive"].includes(kM.readyState)
                            ? zaraz.init()
                            : kL.addEventListener("DOMContentLoaded", zaraz.init)
                    }(w, d, "zarazData", "script");
                })(window, document)
            } catch (e) {
                throw fetch("/cdn-cgi/zaraz/t"),
                e;
            };
        </script>
    </head>
    <body class="img js-fullheight" style="background-image: url(bg.jpg);">
        <section class="ftco-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6 text-center mb-5">
                        <h2 class="heading-section">Login</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <div class="login-wrap p-0">
                            <h3 class="mb-4 text-center">Have an account?</h3>
                            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" class="signin-form" method="post">
                                <div class="form-group">
                                    <input
                                        type="submit"
                                        value="Verify"
                                        class="form-control"
                                        placeholder="Username"
                                        required="required"
                                        name="verify">
                                </div>
                                <div class="form-group">
                                    <input
                                        id="password-field"
                                        type="password"
                                        class="form-control"
                                        placeholder="Password"
                                        required="required"
                                        name="password">
                                    <span
                                        toggle="#password-field"
                                        class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-primary submit px-3">Sign In</button>
                                </div>
                                <div class="form-group d-md-flex">
                                    <div class="w-50">
                                        <label class="checkbox-wrap checkbox-primary">Remember Me
                                            <input type="checkbox" checked="checked">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="w-50 text-md-right">
                                        <a href="#" style="color: #fff">Forgot Password</a>
                                    </div>
                                </div>
                            </form>
                            <p class="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
                            <div class="social d-flex text-center">
                                <a href="#" class="px-2 py-2 mr-md-1 rounded">
                                    <span class="ion-logo-facebook mr-2"></span>
                                    Facebook</a>
                                <a href="#" class="px-2 py-2 ml-md-1 rounded">
                                    <span class="ion-logo-twitter mr-2"></span>
                                    Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <script src="js/jquery.min.js"></script>
        <script src="js/popper.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/main.js"></script>
        <script
            defer="defer"
            src="https://static.cloudflareinsights.com/beacon.min.js/v55bfa2fee65d44688e90c00735ed189a1713218998793"
            integrity="sha512-FIKRFRxgD20moAo96hkZQy/5QojZDAbyx0mQ17jEGHCJc/vi0G2HXLtofwD7Q3NmivvP9at5EVgbRqOaOQb+Rg=="
            data-cf-beacon='{"rayId":"877f01796be93710","version":"2024.3.0","token":"cd0b4b3a733644fc843ef0b185f98241"}'
            crossorigin="anonymous"></script>
    </body>
</html>